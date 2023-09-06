
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useQuery } from "react-query"

import { fetchSurveyDetails } from "@/network/survey"

import SurveyMainContainer from "@/components/Containers/SurveyMainContainer"
import SurveyParentContainer from "@/components/Containers/SurveyParentContainer"
import SurveySecondaryContainer from "@/components/Containers/SurveySecondaryContainer"
import LoadingSurvey from "@/components/Loading/LoadingSurvey"
import { SurveyAnswer } from "@/types/surveyTypes"
import QuestionBox from "@/components/Survey/QuestionBox"

const Survey = () => {

    const [active, setActive] = useState(1)
    const [answers, setAnswers] = useState<SurveyAnswer[] | []>([])

    const router = useRouter()

    const { id } = router.query

    const { data, error, isLoading } = useQuery(`survey-${id}`, () => fetchSurveyDetails(id))

    useEffect(() => {

        // Create function which maps through questions array, and passes them in to the state

        const populateStateArray = () => {
            console.log("Running populate...")
            console.log(data?.data)
            console.log(data?.data.questions)
            const newArray = data?.data.questions.map((item: SurveyAnswer) => {
                return {
                    id: item.id,
                    title: item.title,
                    type: item.type,
                    index: item.index,
                    answer: ""
                }
            })

            setAnswers(newArray)
        }

        if (data?.data) {
            populateStateArray()
        }

        console.log(answers)

    }, [data])

    if (isLoading) {
        return <LoadingSurvey />
    }

    if (error) {}

    if (!isLoading && data) {
        return (
                <SurveyParentContainer>
                <SurveyMainContainer>
                    <iframe className="w-[90%] h-[90%] rounded-md" src={`https://www.figma.com/embed?embed_host=emble&url=${data?.data?.prototype_url}`}  />
                </SurveyMainContainer>
                <SurveySecondaryContainer>
                    <div className="h-auto w-[90%] flex items-center justify-start mb-[10px]">
                    <img className="h-[30px] w-[30px] mr-[10px] cursor-pointer" src={active === 1 ? "/arrow-up-grey.svg" : "/arrow-up-black.svg"} />
                        <img className="h-[30px] w-[30px] mr-10 cursor-pointer" src={active === data!.data!.questions.length ? "/arrow-down-grey.svg" : "/arrow-down-black.svg"} />
                    </div>
                    { answers.map(answer => {
                        return <QuestionBox title={answer.title} type={answer.type} />
                    })}
                </SurveySecondaryContainer>
            </SurveyParentContainer>
        )
    }

    
}

export default Survey