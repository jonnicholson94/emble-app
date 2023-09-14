
type Props = {
    pending: boolean
    content: string
    height: "h-[35px]" | "h-[50px]"
    width: "w-full" | "w-[75px]" | "px-[15px]"
    text: "text-lg" | "text-sm"
    handleClick: () => void
}

const PendingButton = ({ pending, content, height, width, text, handleClick }: Props) => {
    return (
        <button className={`${height} ${width} rounded-sm bg-black text-white font-bold ${text} my-[15px] flex items-center justify-center`} onClick={handleClick}>
            { pending ? <img className="animate-spin" src="/loader.svg" alt="" /> : content }
        </button>
    )
}

export default PendingButton