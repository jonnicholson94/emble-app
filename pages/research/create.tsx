
import { useState } from "react"
import Router from "next/router"
import { toast } from "sonner"
import { v4 as uuidv4 } from "uuid"
import Head from "next/head"

import { createResearch } from "@/network/research"

import { ActiveTypes, ResearchOptions } from "@/types/researchTypes"
import { QuestionType, QuestionTypeOptions } from "@/types/questionTypes"

import useAuth from "@/lib/hooks/useAuth"

import ResearchParentContainer from "@/components/Containers/ResearchParentContainer"
import ResearchMainContainer from "@/components/Containers/ResearchMainContainer"

import ResearchHeader from "@/components/Research/ResearchHeader"
import ResearchTitle from "@/components/Research/ResearchTitle"
import ResearchDescription from "@/components/Research/ResearchDescription"
import ResearchDivider from "@/components/Research/ResearchDivider"
import ResearchQuestions from "@/components/Research/ResearchQuestions"
import errorHandler from "@/lib/errorHandler"

const CreateResearch = () => {

    useAuth()

    const research_id = uuidv4()

    const [pending, setPending] = useState(false)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState<ActiveTypes>("Backlog")
    const [target, setTarget] = useState(50)
    const [prototype, setPrototype] = useState("")
    const [type, setType] = useState<ResearchOptions>("Prototype")
    const [questions, setQuestions] = useState<QuestionType[] | []>([])
    const [intro, setIntro] = useState(false)
    const [introTitle, setIntroTitle] = useState("")
    const [introDescription, setIntroDescription] = useState("")

    const handleCreate = async () => {

        if (title.length === 0) {
            toast.error("Enter a research title before creating your research")
            return
        }

        setPending(true)
        
        const { data, error } = await createResearch(research_id, title, description, status, target, prototype, type, intro, introTitle, introDescription, questions)

        if (error != null) {
            toast.error(error.message)
            errorHandler(error.status)
        } else {
            Router.push("/dashboard")
            toast.success("Successfully created your research")
        }
    }

    const handleEdit = (column: string, value: string | number) => {}

    const handleQuestionOrderChange = (index: number, change: 1 | -1) => {

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

    }
    const handleIntroChange = () => {}
    const handleCreateQuestion = (question: QuestionType) => {

        const stateCopy = [...questions, question]

        setQuestions(stateCopy)

    }
    const handleQuestionDelete = (question_id: string) => {

        const stateCopy = [...questions]

        const filteredState = stateCopy.filter(question => question.question_id !== question_id)

        setQuestions(filteredState)

    }
    const handleQuestionTitleUpdate = (question_id: string, new_title: string) => {

        const index = questions.findIndex(question => question.question_id == question_id)

        const stateCopy = [...questions]

        stateCopy[index].question_title = new_title

        setQuestions(stateCopy)

    }

    const handleQuestionTypeUpdate = (question_id: string, new_type: QuestionTypeOptions) => {

        const index = questions.findIndex(question => question.question_id == question_id)

        const stateCopy = [...questions]

        stateCopy[index].question_type = new_type

        setQuestions(stateCopy)

    }
    const handleAddOption = (question_id: string, new_option: string) => {

        const index = questions.findIndex(question => question.question_id == question_id)

        const stateCopy = [...questions]

        const option = {
            option_id: uuidv4(),
            option_content: new_option,
            option_index: 1,
            option_question_id: question_id,
            option_research_id: research_id
        }

        if (stateCopy[index].question_options === null) {
            stateCopy[index].question_options = [option]
        } else {
            option.option_index = stateCopy[index].question_options!.length + 1
            stateCopy[index].question_options = [...stateCopy[index].question_options!, option]
        } 

        setQuestions(stateCopy)

    }

    const handleUpdateOption = (question_id: string, option_id: string, new_content: string) => {

        const index = questions.findIndex(question => question.question_id == question_id)

        const stateCopy = [...questions]

        const options = stateCopy[index].question_options

        const optionIndex = options!.findIndex(option => option.option_id == option_id)

        options![optionIndex].option_content = new_content 

        stateCopy[index].question_options = options 

        setQuestions(stateCopy)

    }

    const handleDeleteOption = (question_id: string, option_id: string) => {

        const index = questions.findIndex(question => question.question_id == question_id)

        const stateCopy = [...questions]

        const options = stateCopy[index].question_options

        const updatedOptions = options!.filter(option => option.option_id !== option_id)

        stateCopy[index].question_options = updatedOptions

        setQuestions(stateCopy)

    }

    return (
        <>
        <Head>
            <title>Create new research | emble</title>
        </Head>
        <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
            <ResearchHeader type="create" pending={pending} handleSubmit={() => handleCreate()} heading="" status={status} setStatus={setStatus} prototype={prototype} setPrototype={setPrototype} researchType={type} setResearchType={setType} handleEdit={handleEdit} research_id={research_id} />
            <ResearchParentContainer>

                <ResearchMainContainer>
                    <ResearchTitle state={title} setState={setTitle} handleEdit={handleEdit} research_id={research_id} />
                    <ResearchDescription state={description} setState={setDescription} handleEdit={handleEdit} research_id={research_id} />
                    <ResearchDivider />
                    <ResearchQuestions research_id={research_id} questions={questions} intro={intro} setIntro={setIntro} introTitle={introTitle} setIntroTitle={setIntroTitle} introDescription={introDescription} setIntroDescription={setIntroDescription} handleIntroChange={handleIntroChange} handleOrderChange={handleQuestionOrderChange} handleCreateQuestion={handleCreateQuestion} handleQuestionDelete={handleQuestionDelete} handleQuestionTitleUpdate={handleQuestionTitleUpdate} handleQuestionTypeUpdate={handleQuestionTypeUpdate} handleAddOption={handleAddOption} handleUpdateOption={handleUpdateOption} handleDeleteOption={handleDeleteOption} />
                </ResearchMainContainer>

            </ResearchParentContainer>
        </div>
        </>
    )
}

export default CreateResearch