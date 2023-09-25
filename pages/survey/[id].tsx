
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { v4 as uuidv4 } from "uuid"
import Head from "next/head"

import { fetchSurveyDetails } from "@/network/survey"

import { SurveyAnswer } from "@/types/surveyTypes"
import { ResearchOptions } from "@/types/researchTypes"

import LoadingSurvey from "@/components/Loading/LoadingSurvey"
import Success from "@/components/Survey/Success"
import SurveyIntro from "@/components/Survey/SurveyIntro"
import Prototype from "@/components/Survey/SurveyTypes/Prototype"
import SurveyOnly from "@/components/Survey/SurveyTypes/SurveyOnly"

const Survey = () => {

    const containerRef = useRef(null)

    const [type, setType] = useState<ResearchOptions | "">("")
    const [intro, setIntro] = useState(true)
    const [introTitle, setIntroTitle] = useState("")
    const [introDescription, setIntroDescription] = useState("")
    const [prototype, setPrototype] = useState("")
    const [success, setSuccess] = useState(false)
    const [active, setActive] = useState(0)
    const [answers, setAnswers] = useState<SurveyAnswer[] | []>([])

    const router = useRouter()

    const { id } = router.query

    const { data, isLoading } = useQuery(`survey-${id}`, () => fetchSurveyDetails(id))

    const handleDecrement = () => {
        if (active - 1 < 0) {
            return 
        }

        setActive(active - 1)
    }

    const handleIncrement = () => {
        if (active + 1 > answers.length) {
            return 
        }

        setActive(active + 1)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {

        if (e.key === "Enter" && active !== answers.length - 1) {
            setActive(active + 1)
        }

        if (e.key === "ArrowLeft" && active !== 0) {
            setActive(active - 1)
        }

        if (e.key === "ArrowRight" && active !== answers.length + 1) {
            setActive(active + 1)
        }

    }

    useEffect(() => {

        console.log(data?.data)

        // Create function which maps through questions array, and passes them in to the state

        const populateStateArray = () => {
            const newArray = data?.data.questions.map((item: SurveyAnswer) => {
                return {
                    answer_id: uuidv4(),
                    answer_research_id: id,
                    question_id: item.question_id,
                    question_title: item.question_title,
                    question_type: item.question_type,
                    question_index: item.question_index,
                    question_options: item.question_options,
                    answer_answer: []
                }
            })

            setAnswers(newArray)
        }

        if (data?.data) {
            populateStateArray()
            setType(data?.data.type)
            setIntro(data?.data.intro)
            setIntroTitle(data?.data.intro_title)
            setIntroDescription(data?.data.intro_description)
            setPrototype(data?.data.prototype_url)
        }

    }, [data])

    if (isLoading) {
        return <LoadingSurvey />
    }

    if (intro) {
        return <SurveyIntro setIntro={setIntro} introTitle={introTitle} introDescription={introDescription} />
    }

    if (success) {
        return <Success />
    }

    return (
            <>
            <Head>
                <title>{!introTitle ? "Survey" : introTitle} | emble</title>
            </Head>
            <div onKeyDown={(e) => handleKeyDown(e)} tabIndex={-1} ref={containerRef}>
                
                { type === "Prototype" && <Prototype prototype_url={prototype} active={active} setActive={setActive} answers={answers} setAnswers={setAnswers} setSuccess={setSuccess} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />}
                { type === "Survey" && <SurveyOnly active={active} setActive={setActive} answers={answers} setAnswers={setAnswers} setSuccess={setSuccess} handleDecrement={handleDecrement} handleIncrement={handleIncrement}  />}

            </div>
            </>
        )
    }

export default Survey