
import { useState } from "react"

import MenuSelect from "@/components/UI/MenuSelect"

import { QuestionTypeOptions } from "@/types/questionTypes"
import { ActiveTypes } from "@/types/researchTypes"

type QuestionProps = {
    content: string 
    type: QuestionTypeOptions
    index: number 
    length: number
    changeOrder: (index: number, change: 1 | -1 ) => void
    handleDelete: (index: number) => void
}

const Rating = ({ content, type, index, length, changeOrder, handleDelete }: QuestionProps) => {

    const [question, setQuestion] = useState(content)
    const [questionType, setQuestionType] = useState<QuestionTypeOptions>(type)

    const options: QuestionTypeOptions[] = ["Short text", "Long text", "Single select", "Multi select", "Rating", "Scale"]

    const handleClick = async (value: QuestionTypeOptions | ActiveTypes) => {

        setQuestionType(value as QuestionTypeOptions)
    }

    return (
        <div className="h-auto w-[full] px-[20px] flex flex-col items-start justify-start bg-white border border-paleGrey rounded-sm mb-[10px]">
            <div className="h-[50px] w-full flex items-center justify-center mb-[5px]">
                <input 
                    className="h-[35px] placeholder:text-paleGrey outline-none flex-grow"
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)} 
                    placeholder="Enter a question"
                />
                <MenuSelect array={options} state={questionType} handleClick={handleClick}>
                    <p className="h-[30px] px-[10px] mr-[20px] border border-paleGrey rounded-sm text-sm flex items-center justify-center cursor-pointer">{questionType}</p>
                </MenuSelect>
                <img className="mx-[10px]" src={index - 1 === 0 ? "/arrow-up-grey.svg" : "/arrow-up-black.svg"} onClick={() => changeOrder(index, -1)} />
                <img className="mx-[10px]" src={index + 1 > length ? "/arrow-down-grey.svg" : "/arrow-down-black.svg"} onClick={() => changeOrder(index, 1)} />
                <img className="mx-[10px]" onClick={() => handleDelete(index)} src="/close.svg" />
            </div>
            <div className="h-auto w-auto flex items-center justify-start px-[10px] py-[5px] mb-[20px] border border-paleGrey rounded-sm">
                <img className="h-[15px] w-[15px] mr-[10px]" src="/alert-circle.svg" />
                <p className="text-xs">Your user will pick from 1 to 5, with 1 being bad and 5 being great</p>
            </div>
        </div>
    )
}

export default Rating