
type Props = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
    handleEdit: () => void
}

const ResearchTitle = ({ state, setState, handleEdit }: Props) => {

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

export default ResearchTitle