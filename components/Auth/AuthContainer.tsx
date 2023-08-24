import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const AuthContainer = ({ children }: Props) => {
    return (
        <div className="
            h-screen flex items-center justify-center flex-col
            xs:w-[90%] xs:ml-[5%]
            md:w-[50%] md:ml-[25%]
            lg:w-[40%] lg:ml-[30%]
            ">
            { children }
        </div>
    )
}

export default AuthContainer