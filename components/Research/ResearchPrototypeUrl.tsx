
import { editResearch } from "@/network/research"

type Props = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
    research_id: string | string[] | undefined
}

const ResearchPrototypeUrl = ({ state, setState, research_id }: Props) => {

    const handleEdit = async () => {

        const { data, error } = await editResearch("prototype_url", state, research_id)

        if (error != null) {
            console.log(error)
        } else {
            console.log("Successfully updated")
        }

    }


    return (
        <>
            <h2 className="h-auto w-[80%] mt-[20px] font-bold">Your Figma link</h2>
            <p className="h-auto w-[80%] mt-[10px] text-xs">Paste the link to your Figma prototype</p>
            <input
                className="h-[40px] w-[80%] border border-paleGrey px-[10px] my-[30px] rounded-sm placeholder:text-border text-sm"
                value={state}
                placeholder="https://figma.com/prototype/your-url"
                onChange={(e) => setState(e.target.value)} 
                onBlur={() => handleEdit()}
                type="text" />
        </>
    )
}

export default ResearchPrototypeUrl