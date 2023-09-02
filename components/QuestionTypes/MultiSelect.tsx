
import { useState } from "react"

import { updateQuestion } from "@/network/questions"

import MenuSelect from "@/components/UI/MenuSelect"

import { QuestionTypeOptions } from "@/types/questionTypes"
import { ActiveTypes } from "@/types/researchTypes"

type QuestionProps = {
    content: string 
    type: QuestionTypeOptions
    index: number 
    length: number
    changeOrder: (index: number, change: 1 | -1 ) => void
    id: string | string[] | undefined
}

const MultiSelect = ({ content, type, index, changeOrder, id }: QuestionProps) => {

    const [question, setQuestion] = useState(content)
    const [questionType, setQuestionType] = useState<QuestionTypeOptions>(type)
    const [selectOptions, setSelectOptions] = useState<string[] | []>(["Example"])
    const [newOption, setNewOption] = useState("")

    const handleBlur = async () => {
        const { data, error } = await updateQuestion("title", question, id)
    }

    const handleClick = async (value: QuestionTypeOptions | ActiveTypes) => {

        const { data, error } = await updateQuestion("type", value, id)

        setQuestionType(value as QuestionTypeOptions)
    }

    const addOption = (e: React.KeyboardEvent) => {

        const stateCopy: string[] | [] = [...selectOptions]

        if (e.key === "Enter") {
            setSelectOptions([...stateCopy, newOption])
            setNewOption("")
        }        

    }

    const removeOption = (index: number) => {

        const stateCopy: string[] = [...selectOptions]

        stateCopy.splice(index, 1)

        setSelectOptions(stateCopy)

    }

    const options: QuestionTypeOptions[] = ["Short text", "Long text", "Single select", "Multi select", "Rating", "Scale"]

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
                <MenuSelect array={options} state={questionType} handleClick={handleClick}>
                    <p className="h-[30px] px-[10px] mr-[20px] border border-paleGrey rounded-sm text-sm flex items-center justify-center cursor-pointer">{questionType}</p>
                </MenuSelect>
                <img className="mx-[10px]" src={index - 1 === 0 ? "/arrow-up-grey.svg" : "/arrow-up-black.svg"} onClick={() => changeOrder(index, -1)} />
                <img className="mx-[10px]" src={index + 1 > length ? "/arrow-down-grey.svg" : "/arrow-down-black.svg"} onClick={() => changeOrder(index, 1)} />
            </div>
            { selectOptions.map((item, index) => {
                return <div className="h-[35px] w-[98%] px-[10px] border border-paleGrey rounded-sm text-sm flex items-center justify-center cursor-pointer mb-[10px]">
                            <input className="flex-grow outline-none" value={item} /> 
                            <img className="h-[15px] w-[15px]" src="/close.svg" onClick={() => removeOption(index)} />
                        </div>
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

export default MultiSelect