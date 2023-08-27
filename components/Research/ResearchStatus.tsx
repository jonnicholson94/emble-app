
import React from "react"
import MenuSelect from "../UI/MenuSelect"

type Props = {
    state: "Backlog" | "Active" | "Completed"
    setState: React.Dispatch<React.SetStateAction<"Backlog" | "Active" | "Completed">>
}

const ResearchStatus = ({ state, setState }: Props) => {
    return (
        <div className="h-[60px] w-[80%] flex items-center justify-center">
            <h2 className="font-bold mr-[20px] flex-grow">Status</h2>
            <MenuSelect array={["Backlog", "Active", "Completed"]} state={state} setState={setState}>
                <div className="py-[5px] px-[10px] border border-white hover:border-paleGrey flex items-center justify-center rounded-sm cursor-pointer">
                    <img className="h-[15px] w-[15px] mr-[10px]" src={`/${state}.svg`} />
                    <p>{state}</p>
                </div>
            </MenuSelect>
        </div>
    )
}

export default ResearchStatus