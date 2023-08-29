
import { useState } from "react"
import { useQueryClient } from "react-query"
import MenuSelect from "../UI/MenuSelect"
import { QuestionTypeOptions } from "@/types/questionTypes"
import { createQuestion } from "@/network/questions"

type Props = {
    research_id: string | string[] | undefined
    index: number
}

const ResearchAddQuestion = ({ research_id, index }: Props) => {

    const queryClient = useQueryClient()

    const [active, setActive] = useState(false)
    const [newTitle, setNewTitle] = useState("")
    const [newType, setNewType] = useState<QuestionTypeOptions>("Short text") 

    const options: QuestionTypeOptions[] = ["Short text", "Long text", "Single select", "Multi select", "Rating", "Scale"]

    const cancel = () => {
        setActive(false)
        setNewTitle("")
        setNewType("Short text")
    }

    const handleSubmit = async () => {

        const { data, error } = await createQuestion(newTitle, newType, research_id, index) 

        if (error != null) {
            console.log(error)
        } else {
            setActive(false)
            setNewTitle("")
            setNewType("Single select")
            queryClient.invalidateQueries({ queryKey: `research-${research_id}` })
            console.log("Successfully created the question")
        }

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
                <MenuSelect array={options} state={newType} setState={setNewType}>
                    <p className="px-[10px] py-[5px] border border-paleGrey text-sm cursor-pointer rounded-sm">{newType}</p>
                </MenuSelect>
            </div>
            <div className="h-auto w-full flex items-center justify-end">
                <button className="h-[35px] w-[75px] border border-paleGrey text-sm rounded-sm font-bold" onClick={() => cancel()}>Cancel</button>
                <button className="h-[35px] w-[75px] bg-black text-sm rounded-sm font-bold text-white ml-[10px]" onClick={() => handleSubmit()}>Add</button>
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