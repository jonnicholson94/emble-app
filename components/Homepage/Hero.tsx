
import { useState } from "react"
import { joinBeta } from "@/network/general"
import { toast } from "sonner"
import errorHandler from "@/lib/errorHandler"
import { validateEmail } from "@/lib/inputValidation"
import Link from "next/link"
import ErrorText from "../UI/ErrorText"

const Hero = () => {

    const [email, setEmail] = useState("")
    const [pending, setPending] = useState(false)
    const [error, setError] = useState("")
    const [disabled, setDisabled] = useState(true)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setError(() => validateEmail(e.target.value))

        if (error) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }

        setEmail(e.target.value)

    }

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault()

        setDisabled(true)
        setPending(true)

        const code = Math.floor(100000 + Math.random() * 900000)

        const { data, error } = await joinBeta(email, code)

        if (error !== null) {
            setPending(false)
            toast.error(error.message)
            errorHandler(error.status)
            setDisabled(false)
        } else {
            setPending(false)
            toast.success("Thanks for signing up. We're sending you a confirmation email now.")
            setDisabled(false)
        }

    }

    return (
        <section className="h-auto xxs:w-[90%] lg:w-[60%] flex items-center justify-center flex-col">
            
            <h1 className="h-auto xxs:text-5xl sm:text-6xl md:text-7xl text-center font-bold xxs:mt-[50px] md:mt-[100px] hero-gradient animate-pulse">Your new favourite user research platform.</h1>
            
            <p className="h-auto xxs:w-[90%] md:w-[70%] text-center mt-[30px] mb-[50px] xxs:text-md sm:text-lg md:text-2xl text-white">Set up tests, and get instant feedback from your users. Run prototype tests, send surveys and more. All in one platform.</p>

            <form className="h-auto xxs:w-[100%] md:w-[60%] bg-altBackground border border-border mt-[30px] mb-[50px] px-[20px] rounded-sm" onSubmit={(e) => handleSubmit(e)}>
                <h2 className="h-auto xxs:text-xl md:text-2xl mt-[30px] text-white opacity-80 font-bold">Join our beta</h2>
                <p className="h-auto mt-[10px] mb-[20px] text-white opacity-80">Get early access to our beta, and shape the future of user research</p>
                <div className="h-auto w-full flex items-center justify-center mt-[15px] mb-[30px]">
                    <input className={`h-[50px] w-full bg-altBackground border ${error ? "border-warning" : "border-altBorder"} px-[15px] placeholder:text-altBorder rounded-sm text-white opacity-80`} placeholder="Enter your email..." value={email} onChange={(e) => handleChange(e)} />
                    <button className="h-[50px] px-[30px] bg-white text-black font-bold flex items-center justify-center rounded-sm ml-[20px]" disabled={disabled} type="submit">
                        { pending ? <img className="animate-spin" src="/loader.svg" alt="A loading icon when the network request is pending" /> : 
                        <>
                            Join 
                        </> }
                    </button>
                </div>
                
            </form>

            {/* <Link className="h-[50px] w-[300px] bg-black text-white font-bold flex items-center justify-center rounded-md text-lg mb-[50px]" href="/auth/register">Get started</Link> */}

            {/* <Link className="h-[45px] w-[200px] bg-black text-white flex items-center justify-center font-bold text-lg rounded-sm mb-[50px]" href="/auth/sign-in">Get started</Link> */}
            {/* <iframe className="xxs:h-[500px] md:h-[800px] rounded-md border border-paleGrey shadow w-[100%]" src="https://www.loom.com/embed/89dcd27c66064f479917b71494bf55a5?sid=9a717cdf-9946-4aa5-b099-c9905a816d6d" allowFullScreen></iframe> */}
            {/* <img className="rounded-sm w-[100%]" src="/homepage/hero.svg" alt="The main hero image on the homepage" /> */}
        </section>
    )
}

export default Hero