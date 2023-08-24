
type Props = {
    placeholder: string 
    value: string 
    setValue: React.Dispatch<React.SetStateAction<string>>
    type: "email" | "password"
}

const AuthInput = ({ placeholder, value, setValue, type }: Props) => {
    return (
        <input 
            className="border border-border h-[50px] w-[90%] rounded-sm px-[15px] placeholder:text-border my-[10px]"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type={type}
        />
    )
}

export default AuthInput