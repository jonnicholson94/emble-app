
type Props = {
    value: string 
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const LongText = ({ value, handleChange }: Props) => {
    return (
        <>
            <textarea
                className="h-[100px] w-[90%] border-b border-paleGrey mb-[20px] placeholder:text-border outline-none my-[10px]"
                placeholder="Enter an answer"
                value={value}
                onChange={handleChange}
            />
        </>
    )
}

export default LongText