
import { useState } from "react";
import Router from "next/router";
import { toast } from "sonner";

import { register } from "@/network/auth";
import errorHandler from "@/lib/errorHandler";

import AuthContainer from "@/components/Auth/AuthContainer";
import AuthLogo from "@/components/Auth/AuthLogo";
import AuthTitle from "@/components/Auth/AuthTitle";
import AuthInput from "@/components/Auth/AuthInput";
import AuthPolicy from "@/components/Auth/AuthPolicy";
import AuthButton from "@/components/Auth/AuthButton";
import AuthLink from "@/components/Auth/AuthLink";
import AuthNameInput from "@/components/Auth/AuthNameInput";
import PendingButton from "@/components/UI/PendingButton";


const Register = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pending, setPending] = useState(false)

    const handleRegister = async () => {

        setPending(true)

        const { data, error } = await register(firstName, lastName, email, password)

        if (error != null) {
            toast.error(error.message)
            errorHandler(error.status)
            setPending(false)
            return
        }
        
        if (data !== null) {
            localStorage.setItem("token", data)
            Router.push("/dashboard")
        }

    }

    return (
        <AuthContainer>
            <AuthLogo />
            <AuthTitle content="Register for an account" />
            <AuthNameInput firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} />
            <AuthInput placeholder="Enter your email address" value={email} setValue={setEmail} type="email" />
            <AuthInput placeholder="Enter a password" value={password} setValue={setPassword} type="password" />
            <AuthPolicy />
            <PendingButton text="text-lg" pending={pending} content="Register" height="h-[50px]" width="w-full" handleClick={handleRegister} />
            <AuthButton text="Register" handleClick={handleRegister} />
            <AuthLink text="Already got an account?" href="/auth/sign-in" />
        </AuthContainer>
    )
}

export default Register