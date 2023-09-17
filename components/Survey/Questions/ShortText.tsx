
type Props = {
    state: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ShortText = ({ state, handleChange }: Props) => {
    return (
        <>
            <input
                className="h-auto w-[90%] border-b border-paleGrey mb-[20px] placeholder:text-border outline-none"
                placeholder="Enter an answer"
                value={state}
                onChange={handleChange}
            />
        </>
    )
}

export default ShortText