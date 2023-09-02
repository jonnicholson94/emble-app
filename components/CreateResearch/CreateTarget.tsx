
import { editResearch } from "@/network/research"

type Props = {
    state: number 
    setState: React.Dispatch<React.SetStateAction<number>>
}

const CreateTarget = ({ state, setState }: Props) => {

    return (
        <div className="h-[60px] w-[80%] flex items-center justify-center">
            <h2 className="font-bold mr-[20px] flex-grow">Target</h2>
            <input 
                className="w-[100px] py-[5px] px-[10px] flex items-center justify-center outline-none hover:border-paleGrey focus:border-paleGrey border border-white rounded-sm"
                value={state} 
                onChange={(e) => setState(parseInt(e.target.value))} 
                min={0}
                type="number" />
        </div>
    )
}

export default CreateTarget