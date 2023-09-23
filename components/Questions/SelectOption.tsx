
import { useState } from "react"

type Props = {
    question_id: string
    id: string 
    text: string
    handleUpdate: (question_id: string, option_id: string, new_content: string) => void
    handleDelete: (question_id: string, option_id: string) => void
}

const SelectOption = ({ question_id, id, text, handleUpdate, handleDelete }: Props) => {

    // Create the local state for the option 
    const [content, setContent] = useState(text)

    return (
        <div className="h-[35px] xxs:w-[100%] md:w-[98%] px-[10px] border border-paleGrey rounded-sm text-sm flex items-center justify-center cursor-pointer mb-[10px]">
            <input className="flex-grow outline-none" value={content} onChange={(e) => setContent(e.target.value)} onBlur={() => handleUpdate(question_id, id, content)} /> 
            <img className="h-[15px] w-[15px]" src="/close.svg" alt="A close icon to indicate a delete can occur" onClick={() => handleDelete(question_id, id)} />
        </div>
    )
}

export default SelectOption