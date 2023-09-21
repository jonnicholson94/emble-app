
import { useState } from "react"
import { toast } from "sonner"

import errorHandler from "@/lib/errorHandler"

import AuthContainer from "@/components/Auth/AuthContainer"
import AuthInput from "@/components/Auth/AuthInput"
import AuthLogo from "@/components/Auth/AuthLogo"
import AuthTitle from "@/components/Auth/AuthTitle"
import AuthLink from "@/components/Auth/AuthLink"
import PendingButton from "@/components/UI/PendingButton"
import { requestReset } from "@/network/auth"

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [pending, setPending] = useState(false)

    const handleResetRequest = async () => {

        setPending(true)

        const { data, error } = await requestReset(email)

        if (error !== null) {
            setPending(false)
            toast.error(error.message)
            errorHandler(error.status)
        } else {
            setPending(false)
            toast.success("Successfully sent you a password reset")
        }

    }

    return (
        <AuthContainer>
            <AuthLogo />
            <AuthTitle content="Request a password reset" />
            <AuthInput placeholder="Enter your email" value={email} setValue={setEmail} type="email" />
            <PendingButton text="text-lg" pending={pending} content="Request reset" height="h-[50px]" width="w-full" handleClick={() => handleResetRequest()} />
            <AuthLink text="Back to sign in" href="/auth/sign-in" />
        </AuthContainer>
    )
}

export default ForgotPassword