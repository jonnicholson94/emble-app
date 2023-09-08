
import { useState } from "react"

import { updateQuestion } from "@/network/questions"

import MenuSelect from "@/components/UI/MenuSelect"

import { QuestionOption, QuestionTypeOptions } from "@/types/questionTypes"
import { ActiveTypes } from "@/types/researchTypes"
import { createOption } from "@/network/options"
import SelectOption from "./SelectOption"

type QuestionProps = {
    content: string 
    type: QuestionTypeOptions
    index: number 
    length: number
    changeOrder: (index: number, change: 1 | -1 ) => void
    id: string
    research_id: string | string[] | undefined
    options: QuestionOption[] | null
}

const SingleSelect = ({ content, type, index, length, changeOrder, id, research_id, options }: QuestionProps) => {

    const [question, setQuestion] = useState(content)
    const [questionType, setQuestionType] = useState<QuestionTypeOptions>(type)
    const [questionOptions, setQuestionOptions] = useState<QuestionOption[] | null>(options)
    const [newOption, setNewOption] = useState("")

    const handleBlur = async () => {
        const { data, error } = await updateQuestion("title", question, id)
    }

    const handleClick = async (value: QuestionTypeOptions | ActiveTypes) => {

        const { data, error } = await updateQuestion("type", value, id)

        setQuestionType(value as QuestionTypeOptions)
    }

    const addOption = async (e: React.KeyboardEvent) => {  

        index = 1

        if (questionOptions !== null) {
            index = questionOptions.length + 1
        }
        
        if (e.key == "Enter") {
            const { data, error } = await createOption(newOption, id, index, research_id)
            setNewOption("")
        }
        
    }

    const handleDelete = async () => {}

    const questionTypes: QuestionTypeOptions[] = ["Short text", "Long text", "Single select", "Multi select", "Rating", "Scale"]

    return (
        <div className="h-auto w-[full] px-[20px] flex flex-col items-center justify-start bg-white border border-paleGrey rounded-sm mb-[10px]">
            <div className="h-[50px] w-full flex items-center justify-center mb-[5px]">
                <input 
                    className="h-[35px] placeholder:text-paleGrey outline-none flex-grow"
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)} 
                    placeholder="Enter a question"
                    onBlur={() => handleBlur()}
                />
                <MenuSelect array={questionTypes} state={questionType} handleClick={handleClick}>
                    <p className="h-[30px] px-[10px] mr-[20px] border border-paleGrey rounded-sm text-sm flex items-center justify-center cursor-pointer">{questionType}</p>
                </MenuSelect>
                <img className="mx-[10px]" src={index - 1 === 0 ? "/arrow-up-grey.svg" : "/arrow-up-black.svg"} onClick={() => changeOrder(index, -1)} />
                <img className="mx-[10px]" src={index + 1 > length ? "/arrow-down-grey.svg" : "/arrow-down-black.svg"} onClick={() => changeOrder(index, 1)} />
            </div>
            { questionOptions?.map((item, index) => {
                return <SelectOption key={item.option_id} id={item.option_id} index={item.option_index} options={questionOptions} setOptions={setQuestionOptions} />
            })}
            <div className="h-[35px] w-[98%] px-[10px] border border-paleGrey rounded-sm text-sm flex items-center justify-center cursor-pointer mb-[10px]">
                <input className="flex-grow outline-none" placeholder="Enter an option" value={newOption} onChange={(e) => setNewOption(e.target.value)} onKeyDown={(e) => addOption(e)}  />
                <p className="h-auto px-[10px] flex items-center justify-center text-[10px] border border-paleGrey rounded-md">
                    <img className="h-[10px] w-[10px] mr-[5px]" src="/enter.svg" />
                    Add option
                </p>
            </div>
        </div>
    )
}

export default SingleSelect