
type Props = {
    value: string 
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ShortText = ({ value, handleChange }: Props) => {
    return (
        <>
            <input
                className="h-auto w-[90%] border-b border-paleGrey mb-[20px] placeholder:text-border outline-none"
                placeholder="Enter an answer"
                value={value}
                onChange={handleChange}
            />
        </>
    )
}

export default ShortText