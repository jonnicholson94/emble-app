
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
import ResearchHeader from "@/components/Research/ResearchHeader"
import ResearchDivider from "@/components/Research/ResearchDivider"
import ResearchQuestions from "@/components/Research/ResearchQuestions"
import ResearchComments from "@/components/Research/ResearchComments"
import LoadingResearch from "@/components/Loading/LoadingResearch"
import ResearchTitle from "@/components/Research/ResearchTitle"
import ResearchDescription from "@/components/Research/ResearchDescription"

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

    const handleOrderChange = async (index: number, change: 1 | -1) => {
        // if (index + change > questions.length || index + change <= 0) {
        //     return;
        // }
    
        // // Identify the clicked target
        // const clickedTarget = questions[index - 1];
    
        // // Identify the change target
        // const changeTarget = questions[index - 1 + change];
    
        // // Swap the question_index values
        // const tempIndex = clickedTarget.question_index;
        // clickedTarget.question_index = changeTarget.question_index;
        // changeTarget.question_index = tempIndex;
    
        // // Update the state array with the new order
        // const updatedQuestions = [...questions];
        // updatedQuestions[index - 1] = changeTarget;
        // updatedQuestions[index - 1 + change] = clickedTarget;

        // setQuestions(updatedQuestions)

        // const { data, error } = await editQuestionOrder(updatedQuestions[index - 1], updatedQuestions[index - 1 + change])

        // if (error != null) {
        //     toast.error("Failed to save changes")
        // } else {
        //     toast.success("Saved changes")
        // }
    };

    const handleQuestionDelete = async (question_id: string) => {
        // console.log("Running...")
        // const { data, error } = await deleteQuestion(question_id)

        // if (error !== null) {
        //     toast.error(error.message)
        //     errorHandler(error.status)
        // }

        // if (data !== null) {
        //     toast.success(data)
        // }

    }

    const handleEdit = () => {}
    const handleCreateQuestion = () => {}

    const handleBlur = () => {}
    const handleClick = () => {}
    const handleAddOption = () => {}
    const handleDeleteOption = () => {}

    const handleCommentCreate = () => {}
    const handleCommentEdit = () => {}
    const handleCommentDelete = () => {}

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
                    <ResearchTitle state={title} setState={setTitle} handleEdit={handleEdit} />
                    <ResearchDescription state={description} setState={setDescription} handleEdit={handleEdit} />
                    <ResearchDivider />
                    <ResearchQuestions questions={questions} setQuestions={setQuestions} intro={intro} setIntro={setIntro} outro={outro} setOutro={setOutro} handleOrderChange={handleOrderChange} handleCreateQuestion={handleCreateQuestion} handleQuestionDelete={handleQuestionDelete} handleBlur={handleBlur} handleClick={handleClick} handleAddOption={handleAddOption} handleDeleteOption={handleDeleteOption} />
                    <ResearchDivider />
                    <ResearchComments comments={comments} setComments={setComments} name={name} research_id={id} handleCreate={handleCommentCreate} handleEdit={handleCommentEdit} handleDelete={handleCommentDelete} />
                </ResearchMainContainer>

            </ResearchParentContainer>
        </div>
    )
}

export default ViewResearch