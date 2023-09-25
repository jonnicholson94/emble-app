import MenuSelect from "../UI/MenuSelect"

import { ActiveTypes, ResearchOptions } from "@/types/researchTypes"
import { QuestionTypeOptions } from "@/types/questionTypes"

type Props = {
    state: ResearchOptions
    setState: React.Dispatch<React.SetStateAction<ResearchOptions>>
    research_id: string | string[] | undefined
    handleTypeUpdate: (value: ActiveTypes | QuestionTypeOptions | ResearchOptions) => void
}

const ResearchType = ({ state, setState, research_id, handleTypeUpdate}: Props) => {
    return (
        <MenuSelect array={["Prototype", "Survey"]} state={state} handleClick={handleTypeUpdate}>
            <div className="h-[35px] xxs:px-[10px] md:px-[10px] border border-paleGrey hover:border-paleGrey flex items-center justify-center rounded-sm cursor-pointer mx-[10px]">
                <img className="xxs:h-[20px] md:h-[15px] xxs:h-[20px] md:w-[15px] md:mr-[10px]" src={`/type.svg`} alt="The current type of the research" />
                <p className="text-sm xxs:hidden md:flex">{state}</p>
            </div>
        </MenuSelect>
    )
}

export default ResearchType