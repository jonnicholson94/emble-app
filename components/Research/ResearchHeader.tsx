
import Link from "next/link"
import { useRouter } from "next/router"
import { useQueryClient } from "react-query"

import { ActiveTypes } from "@/types/researchTypes"

import ResearchStatus from "./ResearchStatus"
import ResearchPrototypeUrl from "./ResearchPrototypeUrl"
import ResearchShare from "./ResearchShare"
import { QuestionTypeOptions } from "@/types/questionTypes"

type Props = {
    heading: string
    status: ActiveTypes
    setStatus: React.Dispatch<React.SetStateAction<ActiveTypes>>
    prototype: string 
    setPrototype: React.Dispatch<React.SetStateAction<string>>
    research_id: string | string[] | undefined
}

const ResearchHeader = ({ heading, status, setStatus, prototype, setPrototype, research_id }: Props) => {

    const handleStatusUpdate = (value: ActiveTypes | QuestionTypeOptions) => {
        setStatus(value as ActiveTypes)
    }
    const handlePrototypeEdit = () => {}

    return (
        <div className="h-[60px] w-full bg-white flex items-center justify-center border-b border-paleGrey">
            <div className="h-full w-[48%] flex items-center justify-start">
                <Link className="mr-[10px]" href="/dashboard">
                    <img src="/close.svg" />
                </Link>
                <h1 className="font-bold">{heading}</h1>
            </div>
            <div className="h-full w-[48%] flex items-center justify-end">
                <ResearchStatus state={status} setState={setStatus} research_id={research_id} handleStatusUpdate={handleStatusUpdate} />
                <ResearchPrototypeUrl state={prototype} setState={setPrototype} research_id={research_id} handleEdit={handlePrototypeEdit} />
                <ResearchShare research_id={research_id} />
            </div>
        </div>
    )
}

export default ResearchHeader