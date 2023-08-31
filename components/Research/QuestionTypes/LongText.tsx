
import { useState } from "react"
import { toast } from "sonner"

import MenuSelect from "@/components/UI/MenuSelect"

import { QuestionTypeOptions } from "@/types/questionTypes"
import { ActiveTypes } from "@/types/researchTypes"
import { updateQuestion } from "@/network/questions"

type QuestionProps = {
    content: string 
    type: QuestionTypeOptions
    index: number 
    length: number
    changeOrder: (index: number, change: 1 | -1 ) => void
    id: string 
}

const LongText = ({ content, type, index, changeOrder, id }: QuestionProps) => {

    const [question, setQuestion] = useState(content)
    const [questionType, setQuestionType] = useState<QuestionTypeOptions>(type)

    const handleBlur = async () => {
        const { data, error } = await updateQuestion("title", question, id)

        if (error !== null) {
            toast("There's been an issue updating your question")
        } else {
            toast("Updated your question title successfully")
        }
    }

    const handleClick = async (value: QuestionTypeOptions | ActiveTypes) => {

        const { data, error } = await updateQuestion("type", value, id)

        if (error !== null) {
            toast("There's been an issue updating your question")
        } else {
            toast("Successfully updated your question")
        }

        setQuestionType(value as QuestionTypeOptions)
    }

    const options: QuestionTypeOptions[] = ["Short text", "Long text", "Single select", "Multi select", "Rating", "Scale"]

    return (
        <div className="h-[50px] w-[full] px-[20px] flex items-center justify-start bg-white border border-paleGrey rounded-sm mb-[10px]">
            <input 
                className="h-[35px] placeholder:text-paleGrey outline-none flex-grow"
                value={question} 
                onChange={(e) => setQuestion(e.target.value)} 
                placeholder="Enter a question"
                onBlur={() => handleBlur()}
            />
            <MenuSelect array={options} state={questionType} handleClick={handleClick}>
                <p className="h-[30px] px-[10px] mr-[20px] border border-paleGrey rounded-sm text-sm flex items-center justify-center cursor-pointer">{questionType}</p>
            </MenuSelect>
            <img className="mx-[10px]" src={index - 1 === 0 ? "/arrow-up-grey.svg" : "/arrow-up-black.svg"} onClick={() => changeOrder(index, -1)} />
            <img className="mx-[10px]" src={index + 1 > length ? "/arrow-down-grey.svg" : "/arrow-down-black.svg"} onClick={() => changeOrder(index, 1)} />
        </div>
    )
}

export default LongText