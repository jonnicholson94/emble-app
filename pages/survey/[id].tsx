
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { useQuery } from "react-query"

import { fetchSurveyDetails } from "@/network/survey"

import SurveyMainContainer from "@/components/Containers/SurveyMainContainer"
import SurveyParentContainer from "@/components/Containers/SurveyParentContainer"
import SurveySecondaryContainer from "@/components/Containers/SurveySecondaryContainer"
import LoadingSurvey from "@/components/Loading/LoadingSurvey"
import { SurveyAnswer } from "@/types/surveyTypes"
import QuestionBox from "@/components/Survey/QuestionBox"
import EmbleLink from "@/components/Survey/EmbleLink"
import Progress from "@/components/Survey/Progress"

const Survey = () => {

    const containerRef = useRef(null)

    const [active, setActive] = useState(0)
    const [answers, setAnswers] = useState<SurveyAnswer[] | []>([])

    const router = useRouter()

    const { id } = router.query

    const { data, isFetching } = useQuery(`survey-${id}`, () => fetchSurveyDetails(id))

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

        // Create function which maps through questions array, and passes them in to the state

        console.log(data)

        const populateStateArray = () => {
            const newArray = data?.data.questions.map((item: SurveyAnswer) => {
                return {
                    question_id: item.question_id,
                    question_title: item.question_title,
                    question_type: item.question_type,
                    question_index: item.question_index,
                    question_options: item.question_options,
                    question_answer: []
                }
            })

            setAnswers(newArray)
        }

        if (data?.data) {
            populateStateArray()
        }

    }, [data])

    if (isFetching) {
        return <LoadingSurvey />
    }

    return (
            <div onKeyDown={(e) => handleKeyDown(e)} tabIndex={-1} ref={containerRef}>
                <SurveyParentContainer>

                    <SurveyMainContainer>
                        <iframe className="w-[90%] h-[90%] rounded-md" src={`https://www.figma.com/embed?embed_host=emble&url=${data?.data?.research_prototype_url}`}  />
                    </SurveyMainContainer>

                    <SurveySecondaryContainer>
                        <div className="h-auto w-[90%] flex items-center justify-start mb-[10px]">
                            <img className="h-[30px] w-[30px] mr-[10px] cursor-pointer" src={active === 0 ? "/arrow-up-grey.svg" : "/arrow-up-black.svg"} onClick={() => handleDecrement()} />
                            <img className="h-[30px] w-[30px] mr-10 cursor-pointer" src={active + 1 > answers.length - 1 ? "/arrow-down-grey.svg" : "/arrow-down-black.svg"} onClick={() => handleIncrement()} />
                            <Progress active={active} setActive={setActive} answers={answers} />
                        </div>
                        <QuestionBox state={answers} setState={setAnswers} active={active} setActive={setActive} id={answers[active]?.question_id} title={answers[active]?.question_title} type={answers[active]?.question_type} options={answers[active]?.question_options} index={active} />

                        <EmbleLink />
                        
                    </SurveySecondaryContainer>
                
                </SurveyParentContainer>
            </div>
        )
    }

export default Survey