
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useRouter } from "next/router"
import { v4 as uuidv4 } from "uuid"

import { editResearch, fetchSingleResearch } from "@/network/research"
import { editQuestionOrder } from "@/network/questions"
import useAuth from "@/lib/hooks/useAuth"
import { toast } from "sonner"
import errorHandler from "@/lib/errorHandler"

import { QuestionOption, QuestionType, QuestionTypeOptions } from "@/types/questionTypes"
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
import { createQuestion, updateQuestion, deleteQuestion } from "@/network/questions"
import { createOption, deleteOption, editOption } from "@/network/options"
import { addComment, deleteComment, editComment } from "@/network/comments"
import Head from "next/head"
import { ResearchOptions } from "@/types/researchTypes"

const ViewResearch = () => {

    useAuth()

    const router = useRouter()

    const { id } = router.query

    const { data, isLoading } = useQuery(`research-${id}`, () => fetchSingleResearch(id))

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [intro, setIntro] = useState(false)
    const [introTitle, setIntroTitle] = useState("")
    const [introDescription, setIntroDescription] = useState("")
    const [status, setStatus] = useState<"Backlog" | "Active" | "Completed">("Backlog")
    const [type, setType] = useState<ResearchOptions>("Prototype")
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
            setType(data.data.type)
            setIntro(data.data.intro)
            setIntroTitle(data.data.intro_title)
            setIntroDescription(data.data.intro_description)
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
        if (index + change > questions.length || index + change <= 0) {
            return;
        }
    
        // Identify the clicked target
        const clickedTarget = questions[index - 1];
    
        // Identify the change target
        const changeTarget = questions[index - 1 + change];
    
        // Swap the question_index values
        const tempIndex = clickedTarget.question_index;
        clickedTarget.question_index = changeTarget.question_index;
        changeTarget.question_index = tempIndex;
    
        // Update the state array with the new order
        const updatedQuestions = [...questions];
        updatedQuestions[index - 1] = changeTarget;
        updatedQuestions[index - 1 + change] = clickedTarget;

        setQuestions(updatedQuestions)

        const { data, error } = await editQuestionOrder(updatedQuestions[index - 1], updatedQuestions[index - 1 + change])

        if (error !== null) {
            toast.error("Failed to save changes")
        }
    };

    const handleEdit = async (column: string, value: string | number) => {

        const { data, error } = await editResearch(column, value, id)

        if (error !== null) {
            toast.error(error.message)
            errorHandler(error.status)
        } else {
            toast.success("Successfully saved your changes")
        }

    }
    const handleCreateQuestion = async (question: QuestionType) => {

        // Add comment to existing array and update the question state

        const stateCopy = [...questions, question]

        setQuestions(stateCopy)

        // Post data to BE

        const { data, error } = await createQuestion(question.question_id, question.question_title, question.question_type, question.question_research_id, question.question_index)

        if (error !== null) {
            toast.error(error.message)
            errorHandler(error.status)
        }

    }
    const handleQuestionTitleUpdate = async (question_id: string, new_title: string) => {
        const index = questions.findIndex(question => question.question_id == question_id)

        const stateCopy = [...questions]

        stateCopy[index].question_title = new_title

        setQuestions(stateCopy)

        const { data, error } = await updateQuestion("question_title", new_title, question_id)

        if (error != null) {
            toast.error(error.message)
            errorHandler(error.status)
        }

    }

    const handleQuestionTypeUpdate = async (question_id: string, new_type: QuestionTypeOptions) => {
        const index = questions.findIndex(question => question.question_id == question_id)

        const stateCopy = [...questions]

        stateCopy[index].question_type = new_type

        setQuestions(stateCopy)

        const { data, error } = await updateQuestion("question_type", new_type, question_id)

        if (error != null) {
            toast.error(error.message)
            errorHandler(error.status)
        }
    }

    const handleQuestionDelete = async (question_id: string) => {

        const stateCopy = [...questions]

        const filteredState = stateCopy.filter(question => question.question_id !== question_id)

        setQuestions(filteredState)

        const { data, error } = await deleteQuestion(question_id)

        if (error !== null) {
            toast.error(error.message)
            errorHandler(error.status)
        }

    }

    const handleAddOption = async (question_id: string, new_option: string) => {

        const index = questions!.findIndex(question => question.question_id == question_id)

        const stateCopy = [...questions!]

        const option = {
            option_id: uuidv4(),
            option_content: new_option,
            option_index: 1,
            option_question_id: question_id,
            option_research_id: id
        }

        if (stateCopy[index].question_options === null) {
            stateCopy[index].question_options = [option as QuestionOption]
        } else {
            option.option_index = stateCopy[index].question_options!.length + 1
            stateCopy[index].question_options = [...stateCopy[index].question_options!, option as QuestionOption]
        } 

        setQuestions(stateCopy)

        const { data, error } = await createOption(option.option_id, option.option_content, question_id, option.option_index, id)

        if (error !== null) {
            toast.error(error.message)
            errorHandler(error.status)
        }

    }

    const handleUpdateOption = async (question_id: string, option_id: string, new_content: string) => {

        const index = questions!.findIndex(question => question.question_id == question_id)

        const stateCopy = [...questions!]

        const options = stateCopy[index].question_options

        const optionIndex = options!.findIndex(option => option.option_id == option_id)

        options![optionIndex].option_content = new_content 

        stateCopy[index].question_options = options 

        setQuestions(stateCopy)

        const { data, error } = await editOption(new_content, option_id)

        if (error !== null) {
            toast.error(error.message)
            errorHandler(error.status)
        }

    }

    const handleDeleteOption = async (question_id: string, option_id: string) => {

        const index = questions!.findIndex(question => question.question_id == question_id)

        const stateCopy = [...questions!]

        const options = stateCopy[index].question_options

        const updatedOptions = options!.filter(option => option.option_id !== option_id)

        stateCopy[index].question_options = updatedOptions

        setQuestions(stateCopy)

        const { data, error } = await deleteOption(option_id)

        if (error !== null) {
            toast.error(error.message)
            errorHandler(error.status)
        }

    }

    const handleCommentCreate = async (comment: CommentType) => {

        const stateCopy = [...comments, comment]

        setComments(stateCopy)

        const { data, error } = await addComment(comment.comment_id, comment.comment_content, comment.comment_research_id, comment.comment_timestamp)

        if (error !== null) {
            toast.error(error.message)
            errorHandler(error.status)
        }

    }
    const handleCommentEdit = async (comment_id: string, content: string) => {

        const index = comments.findIndex(comment => comment.comment_id === comment_id)

        const stateCopy = [...comments]

        stateCopy[index].comment_content = content 

        setComments(stateCopy)

        const { data, error } = await editComment(content, comment_id)

        if (error !== null) {
            toast.error(error.message)
            errorHandler(error.status)
        }

    }
    const handleCommentDelete = async (comment_id: string) => {

        const filteredComments = comments.filter(comment => comment.comment_id !== comment_id)

        setComments(filteredComments)

        const { data, error } = await deleteComment(comment_id)

        if (error !== null) {
            toast.error(error.message)
            errorHandler(error.status)
        }

    }

    const handleIntroEdit = async (column: string, value: string | boolean) => {

        const { data, error } = await editResearch(column, value, id)

        if (error !== null) {
            toast.error(error.message)
            errorHandler(error.status)
        }

    }

    if (isLoading) {
        return <LoadingResearch />
    }

    if (data?.error !== null && !isLoading) {

        toast.error(data?.error.message)
        errorHandler(data?.error.status)

        return (
            <LoadingResearch />
        )
    }

    return (
        <>
        <Head>
            <title>View your research | emble</title>
        </Head>
        <div className="h-auto w-screen flex overflow-hidden items-center justify-start flex-col bg-offWhite">
            <ResearchHeader heading="" type="view" status={status} setStatus={setStatus} prototype={prototype} setPrototype={setPrototype} researchType={type} setResearchType={setType} handleEdit={handleEdit} research_id={id} />
            <ResearchParentContainer>

                <ResearchMainContainer>
                    <ResearchTitle state={title} setState={setTitle} handleEdit={handleEdit} research_id={id} />
                    <ResearchDescription state={description} setState={setDescription} handleEdit={handleEdit} research_id={id} />
                    <ResearchDivider />
                    <ResearchQuestions research_id={id} intro={intro} setIntro={setIntro} introTitle={introTitle} setIntroTitle={setIntroTitle} introDescription={introDescription} setIntroDescription={setIntroDescription} handleIntroChange={handleIntroEdit} questions={questions} handleOrderChange={handleOrderChange} handleCreateQuestion={handleCreateQuestion} handleQuestionDelete={handleQuestionDelete} handleQuestionTitleUpdate={handleQuestionTitleUpdate} handleQuestionTypeUpdate={handleQuestionTypeUpdate} handleAddOption={handleAddOption} handleUpdateOption={handleUpdateOption} handleDeleteOption={handleDeleteOption} />
                    <ResearchDivider />
                    <ResearchComments comments={comments} name={name} research_id={id} handleCreate={handleCommentCreate} handleEdit={handleCommentEdit} handleDelete={handleCommentDelete} />
                </ResearchMainContainer>

            </ResearchParentContainer>
        </div>
        </>
    )
}

export default ViewResearch