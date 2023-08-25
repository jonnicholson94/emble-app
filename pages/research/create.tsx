
import { useState } from "react"
import Router from "next/router"

import ResearchHeader from "@/components/Research/ResearchHeader"
import ResearchInput from "@/components/Research/ResearchInput"
import ResearchTextarea from "@/components/Research/ResearchTextarea"
import ResearchDivider from "@/components/Research/ResearchDivider"
import { createResearch } from "@/network/research"

const CreateResearch = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleCreate = async () => {
        
        const { data, error } = await createResearch(title, description, "In progress", 50, "")

        if (error != null) {
            console.log(error)
        } else {
            Router.push("/dashboard")
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
            <ResearchHeader handleSubmit={handleCreate} />
            <div className="h-full w-full flex-grow flex items-center justify-start flex-col mt-[50px]">
                <ResearchInput state={title} setState={setTitle} />
                <ResearchTextarea state={description} setState={setDescription} />
                <ResearchDivider />
            </div>
        </div>
    )
}

export default CreateResearch