
import { useState, useEffect } from "react"

import { QuestionOption } from "@/types/questionTypes"
import { deleteOption } from "@/network/options"

type Props = {
    id: string 
    index: number
    options: QuestionOption[]
    setOptions: React.Dispatch<React.SetStateAction<QuestionOption[] | null>>
}

const SelectOption = ({ id, index, options, setOptions }: Props) => {

    // Create the local state for the option 
    const [content, setContent] = useState("")

    useEffect(() => {

        const foundItem = options.find(element => element.option_id === id)

        setContent(foundItem!.option_content)

        
    }, [options])

    const removeOption = async () => {

        const { data, error } = await deleteOption(id)

    }

    return (
        <div className="h-[35px] w-[98%] px-[10px] border border-paleGrey rounded-sm text-sm flex items-center justify-center cursor-pointer mb-[10px]">
            <input className="flex-grow outline-none" value={content} /> 
            <img className="h-[15px] w-[15px]" src="/close.svg" onClick={() => removeOption()} />
        </div>
    )
}

export default SelectOption