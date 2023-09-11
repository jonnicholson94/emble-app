
import { useState } from "react"
import Router from "next/router"

import { signIn } from "@/network/auth"

import AuthContainer from "@/components/Auth/AuthContainer"
import AuthInput from "@/components/Auth/AuthInput"
import AuthLogo from "@/components/Auth/AuthLogo"
import AuthTitle from "@/components/Auth/AuthTitle"
import AuthLink from "@/components/Auth/AuthLink"
import AuthButton from "@/components/Auth/AuthButton"

const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignIn = async () => {
        const { data, error } = await signIn(email, password)

        if (error != null) {
            console.log(error)
        } else {
            localStorage.setItem("token", data)
            Router.push("/dashboard")
        }
    }

    return (
        <AuthContainer>
            <AuthLogo />
            <AuthTitle content="Sign in to your account" />
            <AuthInput placeholder="Enter your email address" value={email} setValue={setEmail} type="email" />
            <AuthInput placeholder="Enter your password" value={password} setValue={setPassword} type="password" />
            {/* <AuthLink text="Forgot your password?" href="/auth/forgot-password" /> */}
            <AuthButton text="Sign in" handleClick={handleSignIn} />
            {/* <AuthLink text="Not got an account?" href="/auth/register" /> */}
        </AuthContainer>
    )
}

export default SignIn