
type Props = {
    text: "Register" | "Sign in" | "Request reset"
    handleClick?: () => void
}

const AuthButton = ({ text, handleClick }: Props) => {
    return (
        <button className="h-[50px] w-[90%] bg-black text-white font-bold text-lg rounded-sm my-[10px]"
            onClick={handleClick}
        >{text}</button>
    )
}

export default AuthButton