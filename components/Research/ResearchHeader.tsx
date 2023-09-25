
import Link from "next/link"

import { ActiveTypes, ResearchOptions } from "@/types/researchTypes"

import ResearchStatus from "./ResearchStatus"
import ResearchPrototypeUrl from "./ResearchPrototypeUrl"
import ResearchShare from "./ResearchShare"
import PendingButton from "../UI/PendingButton"

import { QuestionTypeOptions } from "@/types/questionTypes"
import ResearchType from "./ResearchType"

type Props = {
    type: "create" | "view"
    pending?: boolean
    handleSubmit?: (() => Promise<void>) | undefined
    heading: string
    status: ActiveTypes
    setStatus: React.Dispatch<React.SetStateAction<ActiveTypes>>
    prototype: string 
    setPrototype: React.Dispatch<React.SetStateAction<string>>
    researchType: ResearchOptions
    setResearchType: React.Dispatch<React.SetStateAction<ResearchOptions>>
    handleEdit: (column: string, value: string | number, research_id: string | string[] | undefined) => void
    research_id: string | string[] | undefined
}

const ResearchHeader = ({ type, pending, handleSubmit, heading, status, setStatus, prototype, setPrototype, researchType, setResearchType, handleEdit, research_id }: Props) => {

    const handleStatusUpdate = (value: ActiveTypes | QuestionTypeOptions | ResearchOptions) => {

        setStatus(value as ActiveTypes)
        handleEdit("research_status", value, research_id)
        
    }

    const handlePrototypeEdit = () => {

        handleEdit("research_prototype_url", prototype, research_id)

    }

    const handleTypeUpdate = (value: ActiveTypes | QuestionTypeOptions | ResearchOptions) => {

        setResearchType(value as ResearchOptions)

        handleEdit("research_type", value, research_id)

    }


    return (
        <div className="h-[60px] w-full bg-white flex items-center justify-center border-b border-paleGrey">
            <div className="h-full xxs:flex-grow md:grow-0 xxs:mx-[10px] md:w-[48%] flex items-center justify-start">
                <Link className="mr-[10px]" href="/dashboard">
                    <img src="/close.svg" alt="A button to close the page" />
                </Link>
                <h1 className="font-bold">{heading}</h1>
            </div>
            <div className="h-full xxs:flex-grow xxs:mx-[10px] md:mx-[0px] md:grow-0 md:w-[48%] flex items-center justify-end">
                <ResearchStatus state={status} setState={setStatus} research_id={research_id} handleStatusUpdate={handleStatusUpdate} />
                <ResearchType state={researchType} setState={setResearchType} research_id={research_id} handleTypeUpdate={handleTypeUpdate} />
                { researchType === "Prototype" && <ResearchPrototypeUrl type={type} state={prototype} setState={setPrototype} research_id={research_id} handleEdit={handlePrototypeEdit} /> }
                { type === "view" && <ResearchShare research_id={research_id} /> }
                { type === "create" && <PendingButton pending={pending} content="Save" height="h-[35px]" marginSide="mx-[15px]" width="px-[15px]" text="text-sm" handleClick={handleSubmit} /> }
                { type === "view" && <Link className="h-[35px] px-[10px] bg-black text-white font-bold rounded-sm text-sm flex items-center justify-center ml-[10px]" href={`/responses/${research_id}`}>
                        <img className="xs:h-[20px] md:h-[15px] xs:h-[20px] md:w-[15px] md:mr-[10px]" src="/responses.svg" alt="A clipboard indicating a response" />
                        <p className="text-sm xxs:hidden md:flex">Responses</p>
                    </Link> }
            </div>
        </div>
    )
}

export default ResearchHeader