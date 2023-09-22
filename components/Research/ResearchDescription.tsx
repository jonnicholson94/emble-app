
type Props = {
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
    handleEdit: (column: string, value: string | number, research_id: string | string[] | undefined) => void
    research_id: string | string[] | undefined
}

const ResearchDescription = ({ state, setState, handleEdit, research_id }: Props) => {

    const handleBlur = () => {

        handleEdit("research_title", state, research_id)

    }

    return (
        <textarea
            className="h-[100px] w-[95%] border border-paleGrey rounded-sm placeholder:text-border placeholder-font-bold px-[15px] py-[10px] text-md mt-[20px]"
            placeholder="Enter a research description"
            value={state}
            onChange={(e) => setState(e.target.value)}
            onBlur={() => handleBlur()}
        />
    )
}

export default ResearchDescription