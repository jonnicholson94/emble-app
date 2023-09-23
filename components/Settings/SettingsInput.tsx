
type Props = {
    placeholder: string 
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
    type: "text" | "password"
}

const SettingsInput = ({ placeholder, state, setState, type }: Props) => {
    return (
        <input 
            className="h-[40px] w-full mt-[10px] border border-paleGrey px-[15px] rounded-sm placeholder:text-grey md:mx-[15px]"
            placeholder={placeholder}
            value={state}
            onChange={(e) => setState(e.target.value)}
            type={type} />
    )
}

export default SettingsInput