
import { useState } from "react"
import Router from "next/router"

import { signIn } from "@/network/auth"

import AuthContainer from "@/components/Auth/AuthContainer"
import AuthInput from "@/components/Auth/AuthInput"
import AuthLogo from "@/components/Auth/AuthLogo"
import AuthTitle from "@/components/Auth/AuthTitle"
import AuthLink from "@/components/Auth/AuthLink"

import { toast } from "sonner"
import errorHandler from "@/lib/errorHandler"
import PendingButton from "@/components/UI/PendingButton"
import Head from "next/head"
import GoogleAuth from "@/components/Auth/GoogleAuth"
import AuthDivider from "@/components/Auth/AuthDivider"

const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pending, setPending] = useState(false)

    const handleSignIn = async () => {
        setPending(true)

        const { data, error } = await signIn(email, password)

        if (error != null) {
            setPending(false)
            toast.error(error.message)
            errorHandler(error.status)
            return
        }
        
        if (data !== null) {
            localStorage.setItem("token", data)
            Router.push("/dashboard")
        }
    }

    return (
        <>
        <Head>
            <title>Sign in to your account | emble</title>
        </Head>
        <AuthContainer>
            <AuthLogo />
            <AuthTitle content="Sign in to your account" />
            <GoogleAuth />
            <AuthDivider />
            <AuthInput placeholder="Enter your email address" value={email} setValue={setEmail} type="email" />
            <AuthInput placeholder="Enter your password" value={password} setValue={setPassword} type="password" />
            <PendingButton text="text-lg" pending={pending} height="h-[50px]" width="w-full" content="Sign in" marginSide="mx-[15px]" handleClick={handleSignIn} />
            <AuthLink text="Forgot your password?" href="/auth/forgot-password" />
            <AuthLink text="Not got an account?" href="/auth/register" />
        </AuthContainer>
        </>
    )
}

export default SignIn