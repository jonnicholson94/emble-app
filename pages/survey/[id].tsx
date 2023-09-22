
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { v4 as uuidv4 } from "uuid"
import Head from "next/head"

import { fetchSurveyDetails } from "@/network/survey"

import { SurveyAnswer } from "@/types/surveyTypes"

import SurveyMainContainer from "@/components/Containers/SurveyMainContainer"
import SurveyParentContainer from "@/components/Containers/SurveyParentContainer"
import SurveySecondaryContainer from "@/components/Containers/SurveySecondaryContainer"
import LoadingSurvey from "@/components/Loading/LoadingSurvey"
import QuestionBox from "@/components/Survey/QuestionBox"
import EmbleLink from "@/components/Survey/EmbleLink"
import Progress from "@/components/Survey/Progress"
import Success from "@/components/Survey/Success"
import SurveyIntro from "@/components/Survey/SurveyIntro"

const Survey = () => {

    const containerRef = useRef(null)

    const [intro, setIntro] = useState(true)
    const [introTitle, setIntroTitle] = useState("")
    const [introDescription, setIntroDescription] = useState("")
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
            setIntro(data?.data.intro)
            setIntroTitle(data?.data.intro_title)
            setIntroDescription(data?.data.intro_description)
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
                <title>{introTitle} | emble</title>
            </Head>
            <div onKeyDown={(e) => handleKeyDown(e)} tabIndex={-1} ref={containerRef}>
                <SurveyParentContainer>

                    <SurveyMainContainer>
                        <iframe className="w-[90%] h-[90%] rounded-md" src={`https://www.figma.com/embed?embed_host=emble&url=${data?.data?.prototype_url}`}  />
                    </SurveyMainContainer>

                    <SurveySecondaryContainer>
                        <div className="h-auto w-[90%] flex items-center justify-start mb-[10px]">
                            <img className="h-[30px] w-[30px] mr-[10px] cursor-pointer" src={active === 0 ? "/arrow-up-grey.svg" : "/arrow-up-black.svg"} alt="An up icon for moving up a question" onClick={() => handleDecrement()} />
                            <img className="h-[30px] w-[30px] mr-10 cursor-pointer" src={active + 1 > answers.length - 1 ? "/arrow-down-grey.svg" : "/arrow-down-black.svg"} alt="A down icon for moving down a question" onClick={() => handleIncrement()} />
                            <Progress active={active} setActive={setActive} answers={answers} />
                        </div>
                        <QuestionBox state={answers} setState={setAnswers} setSuccess={setSuccess} active={active} setActive={setActive} id={answers[active]?.question_id} title={answers[active]?.question_title} type={answers[active]?.question_type} options={answers[active]?.question_options} index={active} />

                        <EmbleLink />
                        
                    </SurveySecondaryContainer>
                
                </SurveyParentContainer>
            </div>
            </>
        )
    }

export default Survey