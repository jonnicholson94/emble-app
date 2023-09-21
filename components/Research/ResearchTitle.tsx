
import { useState } from "react"
import ErrorText from "../UI/ErrorText"

type Props = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
    handleEdit: () => void
}

const ResearchTitle = ({ state, setState, handleEdit }: Props) => {

    const [error, setError] = useState("")

    const handleBlur = () => {

        if (state.length === 0) {
            setError("You must enter a title for your research")
            return 
        }

        setError("")

        handleEdit()
    }


    return (
        <>
            <input
                className={`h-[60px] w-[95%] border ${ error ? "border-warning" : "border-paleGrey" } rounded-sm placeholder:text-border placeholder-font-bold px-[15px] text-lg`}
                placeholder="Enter a research title"
                value={state}
                onChange={(e) => setState(e.target.value)}
                onBlur={() => handleBlur()}
                type="text"
            />
            { error && <ErrorText width="w-[95%]" paddingX="px-[15px]" marginTop="mt-[10px]" marginBottom="mb-[0px]" error={error} /> }
        </>
    )
}

export default ResearchTitle