
type Props = {
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
    handleEdit: () => void
}

const ResearchDescription = ({ state, setState, handleEdit }: Props) => {

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

export default ResearchDescription