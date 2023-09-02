
type Props = {
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
}

const CreateTextarea = ({ state, setState }: Props) => {

    return (
        <textarea
            className="h-[100px] w-[95%] border border-paleGrey rounded-sm placeholder:text-border placeholder-font-bold px-[15px] py-[10px] text-md mt-[20px]"
            placeholder="Enter a research description"
            value={state}
            onChange={(e) => setState(e.target.value)}
        />
    )
}

export default CreateTextarea