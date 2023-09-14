
import { useState, useEffect } from "react"

import { QuestionOption } from "@/types/questionTypes"
import { deleteOption } from "@/network/options"

type Props = {
    id: string 
    text: string
}

const SelectOption = ({ id, text }: Props) => {

    // Create the local state for the option 
    const [content, setContent] = useState(text)

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