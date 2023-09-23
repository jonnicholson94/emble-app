
type Props = {
    firstName: string 
    setFirstName: React.Dispatch<React.SetStateAction<string>>
    lastName: string 
    setLastName: React.Dispatch<React.SetStateAction<string>>
}

const AuthNameInput = ({ firstName, setFirstName, lastName, setLastName }: Props) => {
    return (
        <div className="h-auto w-full flex justify-around xxs:flex-col sm:flex-row">
            <input 
                className="border border-border h-[50px] xxs:w-full sm:w-[48%] rounded-sm px-[15px] placeholder:text-border my-[10px] sm:mr-[10px]"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text" />
            <input 
                className="border border-border h-[50px] xxs:w-full sm:w-[48%] rounded-sm px-[15px] placeholder:text-border my-[10px] sm:ml-[10px]"
                placeholder="Enter your surname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text" />
        </div>

    )
}

export default AuthNameInput