
import { useState } from "react"

import { validateEmail, validatePassword } from "@/lib/inputValidation"

import ErrorText from "../UI/ErrorText"

type Props = {
    placeholder: string 
    value: string 
    setValue: React.Dispatch<React.SetStateAction<string>>
    type: "email" | "password"
}

const AuthInput = ({ placeholder, value, setValue, type }: Props) => {

    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setValue(e.target.value)

        if (e.target.type === "email") {
            setError(() => validateEmail(e.target.value))
        } else if (e.target.type === "password") {
            setError(() => validatePassword(e.target.value))
        }

    }

    return (
        <>
            <input 
                className={`border ${ error ? "border-warning" : "border-border" } h-[50px] w-full rounded-sm px-[15px] placeholder:text-border my-[10px]`}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleChange(e)}
                type={type}
            />
            { error && <ErrorText error={error} width="w-full" paddingX="px-[15px]" marginTop="mt-[10px]" marginBottom="mb-[10px]" /> }
        </>
    )
}

export default AuthInput