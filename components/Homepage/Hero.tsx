
import { useState } from "react"

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
            <h1 className="h-auto text-4xl text-center font-bold mt-[100px]">Get user feedback on <strong>anything</strong></h1>
            <p className="h-auto xxs:w-[100%] md:w-[80%] text-center mt-[30px] mb-[50px] text-xl">Send prototypes to your users in beautiful forms. Get high-quality responses in minutes from users you trust.</p>

            <div className="h-auto xxs:w-[90%] md:w-[60%] flex items-center justify-center flex-col mb-[50px] bg-white border border-paleGrey shadow">
                <h2 className="w-[90%] text-center my-[15px] font-bold text-xl">Join the beta and get early access</h2>
                <input placeholder="Enter your email address" className="h-[40px] w-[90%] border border-paleGrey rounded-sm px-[10px] my-[10px] text-sm" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <PendingButton pending={pending} content="Join the beta" height="h-[40px]" width="w-[90%]" marginSide="mx-[15px]" text="text-lg" handleClick={handleSubmit} />
            </div>

            {/* <Link className="h-[45px] w-[200px] bg-black text-white flex items-center justify-center font-bold text-lg rounded-sm mb-[50px]" href="/auth/sign-in">Get started</Link> */}
            <img className="rounded-sm w-[100%]" src="/homepage/hero.svg" alt="The main hero image on the homepage" />
        </section>
    )
}

export default Hero