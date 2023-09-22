
import React from "react"
import { toast } from "sonner"
import MenuSelect from "../UI/MenuSelect"
import { ActiveTypes } from "@/types/researchTypes"
import { QuestionTypeOptions } from "@/types/questionTypes"
import { editResearch } from "@/network/research"

type Props = {
    state: "Backlog" | "Active" | "Completed"
    setState: React.Dispatch<React.SetStateAction<"Backlog" | "Active" | "Completed">>
    research_id: string | string[] | undefined
    handleStatusUpdate: (value: ActiveTypes | QuestionTypeOptions) => void
}

const ResearchStatus = ({ state, setState, handleStatusUpdate }: Props) => {

    // const handleClick = async (value: ActiveTypes | QuestionTypeOptions) => {
    //     setState(value as ActiveTypes)

    //     const { data, error } = await editResearch("status", value, research_id)

    //     if (error != null) {
    //         toast.error("Failed to save changes")
    //     } else {
    //         toast.success("Saved changes")
    //     }

    // }

    return (
            <MenuSelect array={["Backlog", "Active", "Completed"]} state={state} handleClick={handleStatusUpdate}>
                <div className="h-[35px] px-[10px] border border-paleGrey hover:border-paleGrey flex items-center justify-center rounded-sm cursor-pointer mx-[10px]">
                    <img className="h-[15px] w-[15px] mr-[10px]" src={`/${state}.svg`} alt="The current status of the research" />
                    <p className="text-sm">{state}</p>
                </div>
            </MenuSelect>
    )
}

export default ResearchStatus