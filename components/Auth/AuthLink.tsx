
import Link from "next/link"

type Props = {
    text: "Already got an account?" | "Not got an account?" | "Back to sign in" | "Forgot your password?"
    href: "/auth/register" | "/auth/sign-in" | "/auth/forgot-password"
}

const AuthLink = ({ text, href }: Props) => {
    return (
        <Link className="my-[50px] underline" href={href}>{text}</Link>
    )
}

export default AuthLink