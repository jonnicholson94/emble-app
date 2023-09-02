
import { editResearch } from "@/network/research"

type Props = {
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
    research_id: string | string[] | undefined
}

const ResearchTextarea = ({ state, setState, research_id }: Props) => {

    const handleEdit = async () => {

        const { data, error } = await editResearch("description", state, research_id)

        if (error != null) {
            console.log(error)
        } else {
            console.log("Successfully updated")
        }

    }

    return (
        <textarea
            className="h-[100px] w-[95%] border border-paleGrey rounded-sm placeholder:text-border placeholder-font-bold px-[15px] py-[10px] text-md mt-[20px]"
            placeholder="Enter a research description"
            value={state}
            onChange={(e) => setState(e.target.value)}
            onBlur={() => handleEdit()}
        />
    )
}

export default ResearchTextarea