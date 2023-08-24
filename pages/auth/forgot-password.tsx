
import { useState } from "react"

import AuthContainer from "@/components/Auth/AuthContainer"
import AuthInput from "@/components/Auth/AuthInput"
import AuthLogo from "@/components/Auth/AuthLogo"
import AuthTitle from "@/components/Auth/AuthTitle"
import AuthButton from "@/components/Auth/AuthButton"
import AuthLink from "@/components/Auth/AuthLink"

const ForgotPassword = () => {

    const [email, setEmail] = useState("")

    return (
        <AuthContainer>
            <AuthLogo />
            <AuthTitle content="Request a password reset" />
            <AuthInput placeholder="Enter your email" value={email} setValue={setEmail} type="email" />
            <AuthButton text="Request reset" />
            <AuthLink text="Back to sign in" href="/auth/sign-in" />
        </AuthContainer>
    )
}

export default ForgotPassword