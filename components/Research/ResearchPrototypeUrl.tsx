
import { useState } from "react"
import * as Popover from "@radix-ui/react-popover"

type Props = {
    type: "view" | "create"
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
    research_id: string | string[] | undefined
    handleEdit: () => void
}

const ResearchPrototypeUrl = ({ type, state, setState, research_id, handleEdit }: Props) => {

    const [valid, setValid] = useState(true)
    const [pending, setPending] = useState(false)

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

    const handleSubmit = () => {
        handleEdit()
    }


    return (
        <>
            <Popover.Root>
            <Popover.Trigger>
                <div className="h-[35px] px-[10px] border border-paleGrey hover:border-paleGrey flex items-center justify-center rounded-sm cursor-pointer mx-[10px]">
                    <img className="xs:h-[20px] md:h-[15px] xs:h-[20px] md:w-[15px] md:mr-[10px]" src="/figma.svg" alt="The Figma logo" />
                    <p className="text-sm xxs:hidden md:flex">Figma link</p>
                </div>
            </Popover.Trigger>
            <Popover.Content sideOffset={15} className="h-auto w-[350px] bg-white flex items-center justify-center flex-col border border-paleGrey rounded-sm shadow">
                <h2 className="h-auto w-[80%] mt-[20px] font-bold">Your Figma link</h2>
                <p className="h-auto w-[80%] mt-[10px] text-xs">Paste the link to your Figma prototype. This will be displayed to your users in your survey.</p>
                <div className="h-auto w-full flex items-center justify-center flex-col mt-[10px] mb-[30px]">
                    <input
                        className={`
                            h-[40px] w-[80%] border border-paleGrey px-[10px] rounded-sm placeholder:text-border text-sm
                            ${ !valid ? "border-warning outline-warning" : "" }
                        `}
                        value={state}
                        placeholder="https://figma.com/prototype/your-url"
                        onChange={(e) => handleChange(e)} 
                        type="text" />
                        { !valid && <p className="h-auto w-[80%] text-[12px] text-warning mt-[10px]">Enter a valid Figma prototype link</p>}
                        { type === "view" && <button className="h-[40px] w-[80%] bg-black mt-[15px] rounded-sm text-white font-bold" onClick={() => handleSubmit()}>Save</button> }
                </div>
            </Popover.Content>
        </Popover.Root>
        </>
    )
}

export default ResearchPrototypeUrl