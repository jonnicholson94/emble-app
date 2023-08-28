
import { useState } from "react"
import Router from "next/router"

import { createResearch } from "@/network/research"

import { ActiveTypes } from "@/types/researchTypes"

import ResearchParentContainer from "@/components/Research/ResearchParentContainer"
import ResearchMainContainer from "@/components/Research/ResearchMainContainer"
import ResearchSecondaryContainer from "@/components/Research/ResearchSecondaryContainer"
import ResearchHeader from "@/components/Research/ResearchHeader"
import ResearchInput from "@/components/Research/ResearchInput"
import ResearchTextarea from "@/components/Research/ResearchTextarea"
import ResearchDivider from "@/components/Research/ResearchDivider"
import ResearchStatus from "@/components/Research/ResearchStatus"
import ResearchTarget from "@/components/Research/ResearchTarget"
import ResearchPrototypeUrl from "@/components/Research/ResearchPrototypeUrl"

const CreateResearch = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState<ActiveTypes>("Backlog")
    const [target, setTarget] = useState(50)
    const [prototype, setPrototype] = useState("")

    const handleCreate = async () => {
        
        const { data, error } = await createResearch(title, description, status, target, prototype)

        if (error != null) {
            console.log(error)
        } else {
            Router.push("/dashboard")
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
            <ResearchHeader heading="New research" handleSubmit={handleCreate} />
            <ResearchParentContainer>

                <ResearchMainContainer>
                    <ResearchInput state={title} setState={setTitle} />
                    <ResearchTextarea state={description} setState={setDescription} />
                    <ResearchDivider />
                    <div className="h-auto w-auto flex items-center justify-center bg-white px-[20px] py-[10px] border border-paleGrey rounded-md">
                        <img className="h-[20px] w-[20px] mr-[15px]" src="/alert-circle.svg" />
                        <p className="text-sm">You can add survey questions and comments later after creating your research</p>
                    </div>
                </ResearchMainContainer>

                <ResearchSecondaryContainer>
                    <div className="h-auto w-full border-b border-paleGrey flex flex-col items-center justify-center">
                        <ResearchStatus state={status} setState={setStatus} />
                        <ResearchTarget state={target} setState={setTarget} />
                    </div>
                    <div className="h-auto w-full border-b border-paleGrey flex flex-col items-center justify-center">
                        <ResearchPrototypeUrl state={prototype} setState={setPrototype} />
                    </div>
                </ResearchSecondaryContainer>
            </ResearchParentContainer>
        </div>
    )
}

export default CreateResearch