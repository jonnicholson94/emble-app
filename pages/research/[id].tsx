
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useRouter } from "next/router"
import { useQueryClient } from "react-query"

import { fetchSingleResearch } from "@/network/research"
import useAuth from "@/lib/hooks/useAuth"
import { toast } from "sonner"
import errorHandler from "@/lib/errorHandler"

import { QuestionType } from "@/types/questionTypes"
import { CommentType } from "@/types/commentTypes"

import ResearchParentContainer from "@/components/Containers/ResearchParentContainer"
import ResearchMainContainer from "@/components/Containers/ResearchMainContainer"
import ResearchHeader from "@/components/ViewResearch/ResearchHeader"
import ResearchInput from "@/components/ViewResearch/ResearchInput"
import ResearchTextarea from "@/components/ViewResearch/ResearchTextarea"
import ResearchDivider from "@/components/ViewResearch/ResearchDivider"
import ResearchQuestions from "@/components/ViewResearch/ResearchQuestions"
import ResearchComments from "@/components/ViewResearch/ResearchComments"
import LoadingResearch from "@/components/Loading/LoadingResearch"

const ViewResearch = () => {

    useAuth()

    const router = useRouter()
    const queryClient = useQueryClient()

    const { id } = router.query

    const { data, isFetching } = useQuery(`research-${id}`, () => fetchSingleResearch(id))

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [intro, setIntro] = useState(false)
    const [outro, setOutro] = useState(false)
    const [status, setStatus] = useState<"Backlog" | "Active" | "Completed">("Backlog")
    const [limit, setLimit] = useState<number>(50)
    const [prototype, setPrototype] = useState("")
    const [questions, setQuestions] = useState<QuestionType[] | []>([])
    const [comments, setComments] = useState<CommentType[] | []>([])
    const [name, setName] = useState("")

    useEffect(() => {
        if (data?.data) {
            console.log(data.data)
            setTitle(data.data.title)
            setDescription(data.data.description)
            setStatus(data.data.status)
            setLimit(data.data.limit)
            setPrototype(data.data.prototype_url)
            setQuestions(sortQuestions(data.data.questions))
            setComments(sortComments(data.data.comments))
            setName(data.data.first_name + " " + data.data.last_name)
        }
    }, [data])

    const sortQuestions = (array: QuestionType[] | []) => {
        if (array == null) {
            return []
        } else if (array.length > 0) {
            return [...array].sort((a, b) => a.question_index - b.question_index)
        } else {
            return []
        }
    }

    const sortComments = (array: CommentType[] | []) => {
        if (array == null) {
            return []
        } else if (array.length > 0) {
            return [...array].sort((a, b) => a.comment_timestamp - b.comment_timestamp)
        } else {
            return []
        }
    }

    if (isFetching) {
        return <LoadingResearch />
    }

    if (data?.error !== null && !isFetching) {

        toast.error(data?.error.message)
        errorHandler(data?.error.status)

        return (
            <LoadingResearch />
        )
    }

    return (
        <div className="h-auto w-screen flex overflow-hidden items-center justify-start flex-col bg-offWhite">
            <ResearchHeader heading="" status={status} setStatus={setStatus} prototype={prototype} setPrototype={setPrototype} research_id={id} />
            <ResearchParentContainer>

                <ResearchMainContainer>
                    <ResearchInput state={title} setState={setTitle} research_id={id} />
                    <ResearchTextarea state={description} setState={setDescription} research_id={id} />
                    <ResearchDivider />
                    <ResearchQuestions questions={questions} setQuestions={setQuestions} intro={intro} setIntro={setIntro} outro={outro} setOutro={setOutro} research_id={id} />
                    <ResearchDivider />
                    <ResearchComments comments={comments} setComments={setComments} name={name} research_id={id} />
                </ResearchMainContainer>

            </ResearchParentContainer>
        </div>
    )
}

export default ViewResearch