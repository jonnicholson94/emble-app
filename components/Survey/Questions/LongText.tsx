
type Props = {
    state: string
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const LongText = ({ state, handleChange }: Props) => {
    return (
        <>
            <textarea
                className="h-[100px] w-[90%] border-b border-altBorder mb-[20px] placeholder:text-paleGrey outline-none my-[10px]"
                placeholder="Enter an answer"
                value={state}
                onChange={handleChange}
            />
        </>
    )
}

export default LongText