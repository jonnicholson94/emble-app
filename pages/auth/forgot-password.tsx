
import { useState } from "react"

import AuthContainer from "@/components/Auth/AuthContainer"
import AuthInput from "@/components/Auth/AuthInput"
import AuthLogo from "@/components/Auth/AuthLogo"
import AuthTitle from "@/components/Auth/AuthTitle"
import AuthButton from "@/components/Auth/AuthButton"
import AuthLink from "@/components/Auth/AuthLink"
import PendingButton from "@/components/UI/PendingButton"

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [pending, setPending] = useState(false)

    return (
        <AuthContainer>
            <AuthLogo />
            <AuthTitle content="Request a password reset" />
            <AuthInput placeholder="Enter your email" value={email} setValue={setEmail} type="email" />
            <PendingButton pending={pending} content="Request reset" height="h-[50px]" width="w-full" handleClick={() => console.log("Running...")} />
            <AuthLink text="Back to sign in" href="/auth/sign-in" />
        </AuthContainer>
    )
}

export default ForgotPassword