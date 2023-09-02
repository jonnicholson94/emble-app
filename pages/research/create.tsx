
import { useState, useEffect } from "react"
import Router from "next/router"

import { createResearch } from "@/network/research"

import { ActiveTypes } from "@/types/researchTypes"

import ResearchParentContainer from "@/components/Containers/ResearchParentContainer"
import ResearchMainContainer from "@/components/Containers/ResearchMainContainer"
import ResearchSecondaryContainer from "@/components/Containers/ResearchSecondaryContainer"

import { NewQuestionType } from "@/types/questionTypes"
import CreateHeader from "@/components/CreateResearch/CreateHeader"
import CreateInput from "@/components/CreateResearch/CreateInput"
import CreateTextarea from "@/components/CreateResearch/CreateTextarea"
import CreateDivider from "@/components/CreateResearch/CreateDivider"
import CreateQuestions from "@/components/CreateResearch/CreateQuestions"
import CreateStatus from "@/components/CreateResearch/CreateStatus"
import CreateTarget from "@/components/CreateResearch/CreateTarget"
import CreatePrototypeUrl from "@/components/CreateResearch/CreatePrototypeUrl"

const CreateResearch = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState<ActiveTypes>("Backlog")
    const [target, setTarget] = useState(50)
    const [prototype, setPrototype] = useState("")
    const [questions, setQuestions] = useState<NewQuestionType[] | []>([])
    const [intro, setIntro] = useState(false)
    const [outro, setOutro] = useState(false)

    const handleCreate = async () => {
        
        const { data, error } = await createResearch(title, description, status, target, prototype, questions)

        console.log(data)

        if (error != null) {
            console.log(error)
        } else {
            Router.push("/dashboard")
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
            <CreateHeader heading="New research" handleSubmit={() => handleCreate()} />
            <ResearchParentContainer>

                <ResearchMainContainer>
                    <CreateInput state={title} setState={setTitle} />
                    <CreateTextarea state={description} setState={setDescription} />
                    <CreateDivider />
                    <CreateQuestions questions={questions} setQuestions={setQuestions} intro={intro} setIntro={setIntro} outro={outro} setOutro={setOutro} />
                </ResearchMainContainer>

                <ResearchSecondaryContainer>
                    <div className="h-auto w-full border-b border-paleGrey flex flex-col items-center justify-center">
                        <CreateStatus state={status} setState={setStatus} />
                        <CreateTarget state={target} setState={setTarget} />
                    </div>
                    <div className="h-auto w-full border-b border-paleGrey flex flex-col items-center justify-center">
                        <CreatePrototypeUrl state={prototype} setState={setPrototype} />
                    </div>
                </ResearchSecondaryContainer>
            </ResearchParentContainer>
        </div>
    )
}

export default CreateResearch