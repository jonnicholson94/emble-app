
import { useState } from "react"
import Link from "next/link"

import PendingButton from "../UI/PendingButton"
import { joinBeta } from "@/network/general"
import { toast } from "sonner"
import errorHandler from "@/lib/errorHandler"

const Hero = () => {

    const [email, setEmail] = useState("")
    const [pending, setPending] = useState(false)

    const handleSubmit = async () => {

        setPending(true)

        const { data, error } = await joinBeta(email)

        if (error !== null) {
            setPending(false)
            toast.error(error.message)
            errorHandler(error.status)
        } else {
            setPending(false)
            toast.success("Thanks for signing up. We're sending you a confirmation email now.")
        }

    }

    return (
        <section className="h-auto xxs:w-[90%] lg:w-[60%] flex items-center justify-center flex-col">
            <h1 className="h-auto xxs:w-[100%] md:w-[70%] text-6xl text-center font-bold mt-[100px]">Your new favourite user research platform.</h1>
            <p className="h-auto xxs:w-[100%] md:w-[70%] text-center mt-[30px] mb-[50px] text-2xl">Get feedback on prototypes and designs. Send surveys to users, and surface new product insights.</p>

            <Link className="h-[50px] w-[300px] bg-black text-white font-bold flex items-center justify-center rounded-md text-lg mb-[50px]" href="/auth/register">Get started</Link>

            {/* <Link className="h-[45px] w-[200px] bg-black text-white flex items-center justify-center font-bold text-lg rounded-sm mb-[50px]" href="/auth/sign-in">Get started</Link> */}
            <img className="rounded-sm w-[100%]" src="/homepage/hero.svg" alt="The main hero image on the homepage" />
        </section>
    )
}

export default Hero