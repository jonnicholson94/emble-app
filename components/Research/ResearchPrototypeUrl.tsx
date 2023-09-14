
import { useState } from "react"
import * as Popover from "@radix-ui/react-popover"

type Props = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
    research_id: string | string[] | undefined
    handleEdit: () => void
}

const ResearchPrototypeUrl = ({ state, setState, research_id, handleEdit }: Props) => {

    const [valid, setValid] = useState(true)

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
            <Popover.Root>
            <Popover.Trigger>
                <div className="py-[5px] px-[10px] border border-paleGrey hover:border-paleGrey flex items-center justify-center rounded-sm cursor-pointer mx-[10px]">
                    <img className="h-[15px] w-[15px] mr-[10px]" src="/figma.svg" />
                    <p>Prototype</p>
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
                        onBlur={() => handleEdit()}
                        type="text" />
                        { !valid && <p className="h-auto w-[80%] text-[12px] text-warning mt-[10px]">Enter a valid Figma prototype link</p>}
                </div>
            </Popover.Content>
        </Popover.Root>
        </>
    )
}

export default ResearchPrototypeUrl