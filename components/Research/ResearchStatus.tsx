
import React from "react"
import MenuSelect from "../UI/MenuSelect"
import { ActiveTypes } from "@/types/researchTypes"
import { QuestionTypeOptions } from "@/types/questionTypes"
import { editResearch } from "@/network/research"

type Props = {
    state: "Backlog" | "Active" | "Completed"
    setState: React.Dispatch<React.SetStateAction<"Backlog" | "Active" | "Completed">>
    research_id: string | string[] | undefined
}

const ResearchStatus = ({ state, setState, research_id }: Props) => {

    const handleClick = async (value: ActiveTypes | QuestionTypeOptions) => {
        setState(value as ActiveTypes)

        const { data, error } = await editResearch("status", value, research_id)

        if (error != null) {
            console.log(error)
        } else {
            console.log("Successfully updated status")
        }

    }

    return (
        <div className="h-[60px] w-[80%] flex items-center justify-center">
            <h2 className="font-bold mr-[20px] flex-grow">Status</h2>
            <MenuSelect array={["Backlog", "Active", "Completed"]} state={state} handleClick={handleClick}>
                <div className="py-[5px] px-[10px] border border-white hover:border-paleGrey flex items-center justify-center rounded-sm cursor-pointer">
                    <img className="h-[15px] w-[15px] mr-[10px]" src={`/${state}.svg`} />
                    <p>{state}</p>
                </div>
            </MenuSelect>
        </div>
    )
}

export default ResearchStatus