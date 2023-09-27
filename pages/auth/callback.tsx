
import { useEffect } from "react"

import { useRouter } from "next/router"
import { exchangeToken } from "@/network/oauth"
import { toast } from "sonner"

const Callback = () => {

    const router = useRouter()

    const { query } = router

    useEffect(() => {

        const sendRequest = async () => {
            const { data, error } = await exchangeToken(query.authuser, query.code, query.prompt, query.scope)

            if (error !== null) {
                toast.error(error.message)
                router.push("/auth/sign-in")
            } else {
                localStorage.setItem("token", data)
                toast.success("Successfully signed in")
                console.log(data)
                router.push("/dashboard")
            }

        }

        sendRequest()

    }, [query])

    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col">
            <h3 className="font-bold text-lg mb-[30px]">Just finishing up</h3>
            <img className="animate-spin" src="/loader-black.svg" alt="" />
        </div>
    )
}

export default Callback