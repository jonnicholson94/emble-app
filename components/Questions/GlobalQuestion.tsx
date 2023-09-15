
import { useState } from "react";

import MenuSelect from "../UI/MenuSelect";
import CloseAlert from "../UI/CloseAlert";
import SelectOption from "./SelectOption";

import { QuestionTypeOptions, QuestionOption } from "@/types/questionTypes";
import { ActiveTypes } from "@/types/researchTypes";

type QuestionProps = {
    question_id: string
    content: string
    type: QuestionTypeOptions
    index: number
    options: QuestionOption[] | null
    handleQuestionTitleUpdate: (question_id: string, new_title: string) => void
    handleQuestionTypeUpdate: (question_id: string, new_type: QuestionTypeOptions) => void
    handleDelete: () => void
    changeOrder: (index: number, change: number) => void
    handleAddOption: (question_id: string, new_option: string) => void
    handleUpdateOption: (question_id: string, option_id: string, new_content: string) => void
    handleDeleteOption: (question_id: string, option_id: string) => void
}

const GlobalQuestion = ({ question_id, content, type, index, options, handleQuestionTitleUpdate, handleQuestionTypeUpdate, handleDelete, changeOrder, handleAddOption, handleUpdateOption, handleDeleteOption }: QuestionProps) => {

    const typeOptions: QuestionTypeOptions[] = ["Short text", "Long text", "Single select", "Multi select", "Rating", "Scale"]

    const [question, setQuestion] = useState(content)
    const [questionType, setQuestionType] = useState<QuestionTypeOptions>(type)
    const [questionOptions, setQuestionOptions] = useState<QuestionOption[] | null>(options)
    const [newOption, setNewOption] = useState("")

    const handleSelectClick = (value: ActiveTypes | QuestionTypeOptions) => {
        handleQuestionTypeUpdate(question_id, value as QuestionTypeOptions)
        setQuestionType(value as QuestionTypeOptions)
    }

    const addOption = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleAddOption(question_id, newOption)
            setNewOption("")
        }
    }

    return (
        <div className="h-auto w-[full] px-[20px] flex flex-col items-center justify-start bg-white border border-paleGrey rounded-sm mb-[10px]">
            <div className="h-[50px] w-full flex items-center justify-center mb-[5px]">
                <input 
                    className="h-[35px] placeholder:text-paleGrey outline-none flex-grow"
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)} 
                    placeholder="Enter a question"
                    onBlur={() => handleQuestionTitleUpdate(question_id, question)}
                />
                <MenuSelect array={typeOptions} state={questionType} handleClick={handleSelectClick}>
                    <p className="h-[30px] px-[10px] mr-[20px] border border-paleGrey rounded-sm text-sm flex items-center justify-center cursor-pointer">{questionType}</p>
                </MenuSelect>
                <img className="mx-[10px]" src={index - 1 === 0 ? "/arrow-up-grey.svg" : "/arrow-up-black.svg"} onClick={() => changeOrder(index, -1)} />
                <img className="mx-[10px]" src={index + 1 > length ? "/arrow-down-grey.svg" : "/arrow-down-black.svg"} onClick={() => changeOrder(index, 1)} />
                <CloseAlert title="Are you sure you want to delete this question?" description="Users won't be able to answer it, and you'll not be able to see responses anymore" height="h-[20px]" width="w-[20px]" handleDelete={handleDelete} />
            </div>
            { questionType === "Multi select" || questionType === "Single select" ? 
            <>
            { options?.map((item, index) => {
                console.log(item)
                return <SelectOption key={item.option_id} question_id={question_id} id={item.option_id} text={item.option_content} handleUpdate={handleUpdateOption} handleDelete={handleDeleteOption} />
            })}
            <div className="h-[35px] w-[98%] px-[10px] border border-paleGrey rounded-sm text-sm flex items-center justify-center cursor-pointer mb-[10px]">
                <input className="flex-grow outline-none" placeholder="Enter an option" value={newOption} onChange={(e) => setNewOption(e.target.value)} onKeyDown={(e) => addOption(e)}  />
                <p className="h-auto px-[10px] flex items-center justify-center text-[10px] border border-paleGrey rounded-md">
                    <img className="h-[10px] w-[10px] mr-[5px]" src="/enter.svg" />
                    Add option
                </p>
            </div>
            </> : null }
        </div>
    )
}

export default GlobalQuestion