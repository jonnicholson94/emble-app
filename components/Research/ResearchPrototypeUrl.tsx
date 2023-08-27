
type Props = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
}

const ResearchPrototypeUrl = ({ state, setState }: Props) => {
    return (
        <>
            <h2 className="h-auto w-[80%] mt-[20px] font-bold">Your Figma link</h2>
            <p className="h-auto w-[80%] mt-[10px] text-xs">Paste the link to your Figma prototype</p>
            <input
                className="h-[40px] w-[80%] border border-paleGrey px-[10px] my-[30px] rounded-sm placeholder:text-paleGrey text-sm"
                value={state}
                placeholder="https://figma.com/prototype/your-url"
                onChange={(e) => setState(e.target.value)} 
                type="text" />
        </>
    )
}

export default ResearchPrototypeUrl