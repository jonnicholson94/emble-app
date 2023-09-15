
import { useState } from "react"
import { useQueryClient } from "react-query"
import { toast } from "sonner"
import { v4 as uuidv4 } from "uuid"
import MenuSelect from "../UI/MenuSelect"
import { QuestionType, QuestionTypeOptions } from "@/types/questionTypes"
import { createQuestion } from "@/network/questions"
import { ActiveTypes } from "@/types/researchTypes"
import PendingButton from "../UI/PendingButton"
import errorHandler from "@/lib/errorHandler"

type Props = {
    research_id: string | string[] | undefined
    index: number
    handleCreateQuestion: ((question: QuestionType) => Promise<void>) | ((question: QuestionType) => void)
}

const ResearchAddQuestion = ({ research_id, index, handleCreateQuestion }: Props) => {

    const question_id = uuidv4()

    const [active, setActive] = useState(false)
    const [newTitle, setNewTitle] = useState("")
    const [newType, setNewType] = useState<QuestionTypeOptions>("Short text") 
    const [pending, setPending] = useState(false)

    const options: QuestionTypeOptions[] = ["Short text", "Long text", "Single select", "Multi select", "Rating", "Scale"]

    const cancel = () => {
        setActive(false)
        setNewTitle("")
        setNewType("Short text")
    }

    const handleCreate = () => {
        handleCreateQuestion({ question_id, question_title: newTitle, question_type: newType, question_research_id: research_id, question_index: index, question_options: null })
        setNewTitle("")
        setNewType("Short text")
    }

    const handleClick = (value: QuestionTypeOptions | ActiveTypes) => {
        setNewType(value as QuestionTypeOptions)
    }

    return (
        <>
            { active ? 
            <>
            <div className="h-[50px] w-[full] px-[20px] flex items-center justify-start bg-white border border-paleGrey rounded-sm mb-[10px]">
                <input 
                    className="h-full flex-grow outline-none placeholder:text-border"
                    placeholder="Enter a question title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)} />
                <MenuSelect array={options} state={newType} handleClick={handleClick}>
                    <p className="px-[10px] py-[5px] border border-paleGrey text-sm cursor-pointer rounded-sm">{newType}</p>
                </MenuSelect>
            </div>
            <div className="h-auto w-full flex items-center justify-end">
                <button className="h-[35px] w-[75px] border border-paleGrey text-sm rounded-sm font-bold mr-[10px]" onClick={() => cancel()}>Cancel</button>
                <PendingButton pending={pending} content="Add" height="h-[35px]" width="w-[75px]" text="text-sm" handleClick={() => handleCreate()}/>
            </div>
            </> :

            <button className="h-auto px-[5px] flex items-center justify-start cursor-pointer my-[20px]" onClick={() => setActive(true)}>
                <img className="h-[15px] w-[15px] mr-[10px]" src="/add-grey.svg" />
                <p className="text-border">Add question</p>
            </button>

            }
        </>
    )
}

export default ResearchAddQuestion