
type Props = {
    firstName: string 
    setFirstName: React.Dispatch<React.SetStateAction<string>>
    lastName: string 
    setLastName: React.Dispatch<React.SetStateAction<string>>
}

const AuthNameInput = ({ firstName, setFirstName, lastName, setLastName }: Props) => {
    return (
        <div className="h-auto w-[90%] flex">
            <input 
                className="border border-border h-[50px] flex-grow rounded-sm px-[15px] placeholder:text-border my-[10px] mr-[10px]"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text" />
            <input 
                className="border border-border h-[50px] flex-grow rounded-sm px-[15px] placeholder:text-border my-[10px] ml-[10px]"
                placeholder="Enter your surname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text" />
        </div>

    )
}

export default AuthNameInput