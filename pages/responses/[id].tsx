
import { useRouter } from "next/router"
import { useQuery } from "react-query"

import useAuth from "@/lib/hooks/useAuth"

import ResponsesMainContainer from "@/components/Containers/ResponsesMainContainer"
import ResponsesSecondaryContainer from "@/components/Containers/ResponsesSecondaryContainer"
import LoadingResponses from "@/components/Loading/LoadingResponses"
import ResponsesHeader from "@/components/Responses/ResponsesHeader"
import SelectResponse from "@/components/Responses/SelectResponse"
import TextResponse from "@/components/Responses/TextResponse"
import { fetchResponses } from "@/network/responses"
import { ResponseQuestion } from "@/types/responseTypes"

const Responses = () => {

    useAuth()

    const router = useRouter()

    const { id } = router.query

    const { data, isFetching } = useQuery(`responses-${id}`, () => fetchResponses(id))

    if (isFetching) {
        return <LoadingResponses />
    }

    console.log(data)

    return (

        <ResponsesMainContainer>
            <ResponsesHeader title={data?.data.research_title} id={id} />
            <ResponsesSecondaryContainer>

                { data?.data.research_questions.map((question: ResponseQuestion, index: number) => {

                    if (question.question_type === "Short text" || question.question_type === "Long text") {
                        return <TextResponse key={index} title={question.question_title} type={question.question_type} responses={question.question_responses} />
                    } else if (question.question_type === "Single select" || question.question_type === "Multi select" || question.question_type === "Rating" || question.question_type === "Scale") {
                        return <SelectResponse key={index} title={question.question_title} type={question.question_type} responses={question.question_responses} />
                    }

                })}

            </ResponsesSecondaryContainer>
        </ResponsesMainContainer>
        
    )
}

export default Responses