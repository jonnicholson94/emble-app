
import { useState } from "react"

import { editResearch } from "@/network/research"

type Props = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
    research_id: string | string[] | undefined
}

const ResearchPrototypeUrl = ({ state, setState, research_id }: Props) => {

    const [valid, setValid] = useState(true)

    const handleEdit = async () => {

        if (!valid) {
            return
        }

        const { data, error } = await editResearch("prototype_url", state, research_id)

        if (error != null) {
            console.log(error)
        } else {
            console.log("Successfully updated")
        }

    }

    const handleValidation = (value: string) => {
        const regex = /^https:\/\/www\.figma\.com\/proto\//;
        const isValid = regex.test(value)

        setValid(isValid)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value 
        setState(value)
        handleValidation(value)
    }


    return (
        <>
            <h2 className="h-auto w-[80%] mt-[20px] font-bold">Your Figma link</h2>
            <p className="h-auto w-[80%] mt-[10px] text-xs">Paste the link to your Figma prototype</p>
            <div className="h-auto w-full flex items-center justify-center flex-col mt-[30px] mb-[30px]">
                <input
                    className={`
                        h-[40px] w-[80%] border border-paleGrey px-[10px] rounded-sm placeholder:text-border text-sm
                        ${ !valid ? "border-warning outline-warning" : "" }
                    `}
                    value={state}
                    placeholder="https://figma.com/prototype/your-url"
                    onChange={(e) => handleChange(e)} 
                    onBlur={() => handleEdit()}
                    type="text" />
                    { !valid && <p className="h-auto w-[80%] text-[12px] text-warning mt-[10px]">Enter a valid Figma prototype link</p>}
            </div>
        </>
    )
}

export default ResearchPrototypeUrl