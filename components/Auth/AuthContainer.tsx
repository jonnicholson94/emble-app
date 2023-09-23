import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const AuthContainer = ({ children }: Props) => {
    return (
        <div className="h-screen flex items-center justify-center flex-col bg-homepage-pattern">
            <div className="h-screen flex items-center justify-center flex-col
            xs:w-[90%]
            md:w-[60%]
            lg:w-[40%]">
                { children }
            </div>
        </div>
    )
}

export default AuthContainer