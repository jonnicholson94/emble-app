
import { useState } from "react"
import { joinBeta } from "@/network/general"
import { toast } from "sonner"
import errorHandler from "@/lib/errorHandler"
import { validateEmail } from "@/lib/inputValidation"
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

        setPending(true)

        const code = Math.floor(100000 + Math.random() * 900000)

        const { data, error } = await joinBeta(email, code)

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
            <h1 className="h-auto xxs:w-[100%] md:w-[70%] xxs:text-5xl md:text-6xl text-center font-bold xxs:mt-[50px] md:mt-[100px]">Your new favourite user research platform.</h1>
            <p className="h-auto xxs:w-[100%] md:w-[70%] text-center mt-[30px] mb-[50px] text-2xl">Set up tests, and get instant feedback from your users. Run prototype tests, send surveys and more. All in one platform.</p>

            <form className="h-auto xxs:w-[100%] md:w-[60%] bg-white border border-paleGrey mt-[30px] mb-[50px] px-[20px] rounded-sm shadow" onSubmit={(e) => handleSubmit(e)}>
                <h2 className="h-auto xxs:text-xl md:text-2xl mt-[30px] font-bold">Join our beta</h2>
                <p className="h-auto mt-[10px] mb-[20px]">Get early access to our beta, and shape the future of user research</p>
                <input className={`h-[50px] w-full border ${error ? "border-warning" : "border-paleGrey"} px-[15px] placeholder:text-border rounded-sm`} placeholder="Enter your email" value={email} onChange={(e) => handleChange(e)} />
                { error && <ErrorText error={error} paddingX="px-[15px]" width="w-full" marginTop="mt-[10px]" marginBottom="mb-[10px]" />}
                <button className="h-[50px] w-full bg-black text-white font-bold mt-[15px] mb-[30px] flex items-center justify-center rounded-sm" disabled={disabled} type="submit">
                    { pending ? <img className="animate-spin" src="/loader.svg" /> : "Join" }
                </button>
            </form>

            {/* <Link className="h-[50px] w-[300px] bg-black text-white font-bold flex items-center justify-center rounded-md text-lg mb-[50px]" href="/auth/register">Get started</Link> */}

            {/* <Link className="h-[45px] w-[200px] bg-black text-white flex items-center justify-center font-bold text-lg rounded-sm mb-[50px]" href="/auth/sign-in">Get started</Link> */}
            <img className="rounded-sm w-[100%]" src="/homepage/hero.svg" alt="The main hero image on the homepage" />
        </section>
    )
}

export default Hero