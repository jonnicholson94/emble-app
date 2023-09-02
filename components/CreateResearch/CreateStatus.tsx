
import React from "react"
import MenuSelect from "../UI/MenuSelect"
import { ActiveTypes } from "@/types/researchTypes"
import { QuestionTypeOptions } from "@/types/questionTypes"
import { editResearch } from "@/network/research"

type Props = {
    state: "Backlog" | "Active" | "Completed"
    setState: React.Dispatch<React.SetStateAction<"Backlog" | "Active" | "Completed">>
}

const CreateStatus = ({ state, setState }: Props) => {

    const handleClick = async (value: ActiveTypes | QuestionTypeOptions) => {
        setState(value as ActiveTypes)
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

export default CreateStatus