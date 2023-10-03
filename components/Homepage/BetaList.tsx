
import { useState } from "react"
import { joinBeta } from "@/network/general"
import { toast } from "sonner"
import errorHandler from "@/lib/errorHandler"
import { validateEmail } from "@/lib/inputValidation"

const BetaList = () => {

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
        <form className="h-auto xxs:w-[100%] md:w-[70%] bg-altBackground border border-border mt-[30px] mb-[50px] px-[20px] rounded-sm" onSubmit={(e) => handleSubmit(e)}>
            <h2 className="h-auto xxs:text-xl md:text-2xl mt-[30px] text-text font-bold">Join our beta</h2>
            <p className="h-auto mt-[10px] mb-[20px] text-text">Get early access to our beta, and shape the future of user research</p>
            <div className="h-auto w-full flex items-center justify-center mt-[15px] mb-[30px]">
                <input className={`h-[50px] w-full bg-background border ${error ? "border-warning" : "border-border"} px-[15px] placeholder:text-placeholder rounded-sm text-text opacity-80`} placeholder="Enter your email..." value={email} onChange={(e) => handleChange(e)} />
                <button className="h-[50px] px-[30px] bg-cta text-ctaText font-bold flex items-center justify-center rounded-sm ml-[20px]" disabled={disabled} type="submit">
                    { pending ? <img className="animate-spin" src="/loader.svg" alt="A loading icon when the network request is pending" /> : 
                    <>
                        Join 
                    </> }
                </button>
            </div>                
        </form>
    )
}

export default BetaList