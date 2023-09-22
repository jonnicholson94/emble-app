
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const ResponsesMainContainer = ({ children }: Props) => {
    return (
        <div className="h-auto w-screen flex items-center justify-start flex-col bg-offWhite">
            { children }
        </div>
    )
}

export default ResponsesMainContainer