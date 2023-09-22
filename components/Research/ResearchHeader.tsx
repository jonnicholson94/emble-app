
import Link from "next/link"

import { ActiveTypes } from "@/types/researchTypes"

import ResearchStatus from "./ResearchStatus"
import ResearchPrototypeUrl from "./ResearchPrototypeUrl"
import ResearchShare from "./ResearchShare"
import PendingButton from "../UI/PendingButton"

import { QuestionTypeOptions } from "@/types/questionTypes"

type Props = {
    type: "create" | "view"
    pending?: boolean
    handleSubmit?: (() => Promise<void>) | undefined
    heading: string
    status: ActiveTypes
    setStatus: React.Dispatch<React.SetStateAction<ActiveTypes>>
    prototype: string 
    setPrototype: React.Dispatch<React.SetStateAction<string>>
    handleEdit: (column: string, value: string | number, research_id: string | string[] | undefined) => void
    research_id: string | string[] | undefined
}

const ResearchHeader = ({ type, pending, handleSubmit, heading, status, setStatus, prototype, setPrototype, handleEdit, research_id }: Props) => {

    const handleStatusUpdate = (value: ActiveTypes | QuestionTypeOptions) => {
        setStatus(value as ActiveTypes)
    }
    const handlePrototypeEdit = () => {

        handleEdit("research_prototype_url", prototype, research_id)

    }

    return (
        <div className="h-[60px] w-full bg-white flex items-center justify-center border-b border-paleGrey">
            <div className="h-full w-[48%] flex items-center justify-start">
                <Link className="mr-[10px]" href="/dashboard">
                    <img src="/close.svg" alt="A button to close the page" />
                </Link>
                <h1 className="font-bold">{heading}</h1>
            </div>
            <div className="h-full w-[48%] flex items-center justify-end">
                <ResearchStatus state={status} setState={setStatus} research_id={research_id} handleStatusUpdate={handleStatusUpdate} />
                <ResearchPrototypeUrl type={type} state={prototype} setState={setPrototype} research_id={research_id} handleEdit={handlePrototypeEdit} />
                { type === "view" && <ResearchShare research_id={research_id} /> }
                { type === "create" && <PendingButton pending={pending} content="Save" height="h-[35px]" width="px-[15px]" text="text-sm" handleClick={handleSubmit} /> }
                { type === "view" && <Link className="h-[35px] px-[10px] bg-black text-white font-bold rounded-sm text-sm flex items-center justify-center ml-[20px]" href={`/responses/${research_id}`}>View responses</Link> }
            </div>
        </div>
    )
}

export default ResearchHeader