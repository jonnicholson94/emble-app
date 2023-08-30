
import { editResearch } from "@/network/research"

type Props = {
    state: number 
    setState: React.Dispatch<React.SetStateAction<number>>
    research_id: string | string[] | undefined
}

const ResearchTarget = ({ state, setState, research_id }: Props) => {

    const handleEdit = async () => {

        const { data, error } = await editResearch("limit", state, research_id)

        if (error != null) {
            console.log(error)
        } else {
            console.log("Successfully updated")
        }

    }

    return (
        <div className="h-[60px] w-[80%] flex items-center justify-center">
            <h2 className="font-bold mr-[20px] flex-grow">Target</h2>
            <input 
                className="w-[100px] py-[5px] px-[10px] flex items-center justify-center outline-none hover:border-paleGrey focus:border-paleGrey border border-white rounded-sm"
                value={state} 
                onChange={(e) => setState(parseInt(e.target.value))} 
                onBlur={() => handleEdit()}
                type="number" />
        </div>
    )
}

export default ResearchTarget