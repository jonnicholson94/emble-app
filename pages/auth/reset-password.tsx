
import { useState } from "react"
import { useRouter } from "next/router"

import AuthContainer from "@/components/Auth/AuthContainer"
import AuthLogo from "@/components/Auth/AuthLogo"
import AuthTitle from "@/components/Auth/AuthTitle"
import AuthInput from "@/components/Auth/AuthInput"
import PendingButton from "@/components/UI/PendingButton"
import { toast } from "sonner"
import { updatePassword } from "@/network/auth"
import errorHandler from "@/lib/errorHandler"
import Head from "next/head"

const ResetPassword = () => {

    const router = useRouter()

    const { id } = router.query

    const [firstPass, setFirstPass] = useState("")
    const [secondPass, setSecondPass] = useState("")
    const [pending, setPending] = useState(false)

    const handleSubmit = async () => {

        setPending(true)

        if (firstPass !== secondPass) {
            setPending(false)
            toast.error("Your passwords don't match. Please re-enter them.")
            return 
        }

        const { data, error } = await updatePassword(firstPass, id)

        if (error !== null) {
            toast.error(error.message)
            errorHandler(error.status)
        } else {
            toast.success("Successfully updated your password")
            router.push("/auth/sign-in")
        }

    }

    return (
        <>
        <Head>
            <title>Reset your password | emble</title>
        </Head>
        <AuthContainer>
            <AuthLogo />
            <AuthTitle content="Confirm your new password" />
            <AuthInput placeholder="Enter a new password" value={firstPass} setValue={setFirstPass} type="password" />
            <AuthInput placeholder="Re-enter your new password" value={secondPass} setValue={setSecondPass} type="password" />
            <PendingButton pending={pending} content="Update password" height="h-[50px]" width="w-full" text="text-lg" marginSide="mx-[15px]" handleClick={handleSubmit} />
        </AuthContainer>
        </>
    )
}

export default ResetPassword