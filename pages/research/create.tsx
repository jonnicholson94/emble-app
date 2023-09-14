
import { useState, useEffect } from "react"
import Router from "next/router"
import { toast } from "sonner"
import { v4 as uuidv4 } from "uuid"

import { createResearch } from "@/network/research"

import { ActiveTypes } from "@/types/researchTypes"
import { QuestionType, QuestionTypeOptions } from "@/types/questionTypes"

import useAuth from "@/lib/hooks/useAuth"

import ResearchParentContainer from "@/components/Containers/ResearchParentContainer"
import ResearchMainContainer from "@/components/Containers/ResearchMainContainer"

import ResearchHeader from "@/components/Research/ResearchHeader"
import ResearchTitle from "@/components/Research/ResearchTitle"
import ResearchDescription from "@/components/Research/ResearchDescription"
import ResearchDivider from "@/components/Research/ResearchDivider"
import ResearchQuestions from "@/components/Research/ResearchQuestions"

const CreateResearch = () => {

    useAuth()

    const research_id = uuidv4()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState<ActiveTypes>("Backlog")
    const [target, setTarget] = useState(50)
    const [prototype, setPrototype] = useState("")
    const [questions, setQuestions] = useState<QuestionType[] | []>([])
    const [intro, setIntro] = useState(false)
    const [outro, setOutro] = useState(false)

    const handleCreate = async () => {
        
        const { data, error } = await createResearch(title, description, status, target, prototype, questions)

        if (error != null) {
            toast.error("Failed to create your research, please try again")
        } else {
            Router.push("/dashboard")
            toast.success("Successfully created your research")
        }
    }

    console.log(questions)

    const handleTitleEdit = () => {}
    const handleDescriptionEdit = () => {}
    const handleQuestionOrderChange = () => {}
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
            console.log("It thinks it's null...")
            stateCopy[index].question_options = [option]
        } else {
            console.log("It doesn't think it's null...")
            option.option_index = stateCopy[index].question_options!.length + 1
            stateCopy[index].question_options = [...stateCopy[index].question_options!, option]
        } 

        setQuestions(stateCopy)

    }
    const handleDeleteOption = () => {}

    return (
        <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
            <ResearchHeader heading="" status={status} setStatus={setStatus} prototype={prototype} setPrototype={setPrototype} research_id={research_id} />
            <ResearchParentContainer>

                <ResearchMainContainer>
                    <ResearchTitle state={title} setState={setTitle} handleEdit={handleTitleEdit} />
                    <ResearchDescription state={description} setState={setDescription} handleEdit={handleDescriptionEdit} />
                    <ResearchDivider />
                    <ResearchQuestions research_id={research_id} questions={questions} intro={intro} setIntro={setIntro} outro={outro} setOutro={setOutro} handleOrderChange={handleQuestionOrderChange} handleCreateQuestion={handleCreateQuestion} handleQuestionDelete={handleQuestionDelete} handleQuestionTitleUpdate={handleQuestionTitleUpdate} handleQuestionTypeUpdate={handleQuestionTypeUpdate} handleAddOption={handleAddOption} handleDeleteOption={handleDeleteOption} />
                </ResearchMainContainer>

            </ResearchParentContainer>
        </div>
    )
}

export default CreateResearch