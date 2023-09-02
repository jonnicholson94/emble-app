import { useState } from "react"

type Props = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
}

const CreatePrototypeUrl = ({ state, setState }: Props) => {

    const [valid, setValid] = useState(true)

    const handleValidation = (value: string) => {

        if (value.length == 0) {
            setValid(true)
            return
        }

        const regex = /^https:\/\/www\.figma\.com\/proto\//;
        const isValid = regex.test(value)

        setValid(isValid)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value 

        handleValidation(value)

        setState(value)
        
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
                    type="text" />
                    { !valid && <p className="h-auto w-[80%] text-[12px] text-warning mt-[10px]">Enter a valid Figma prototype link</p>}
            </div>
        </>
    )
}

export default CreatePrototypeUrl