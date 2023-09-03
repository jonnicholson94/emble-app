
import { toast } from "sonner"

import { editResearch } from "@/network/research"

type Props = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
    research_id: string | string[] | undefined
}

const ResearchInput = ({ state, setState, research_id }: Props) => {

    const handleEdit = async () => {

        const { data, error } = await editResearch("title", state, research_id)

        if (error != null) {
            toast.error("Failed to save changes")
        } else {
            toast.success("Saved changes")
        }

    }

    return (
        <input
            className="h-[60px] w-[95%] border border-paleGrey rounded-sm placeholder:text-border placeholder-font-bold px-[15px] text-lg"
            placeholder="Enter a research title"
            value={state}
            onChange={(e) => setState(e.target.value)}
            onBlur={() => handleEdit()}
            type="text"
        />
    )
}

export default ResearchInput