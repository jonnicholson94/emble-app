
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const ResearchSecondaryContainer = ({ children }: Props) => {
    return (
        <div className="h-max w-[400px] flex items-center justify-start flex-col bg-white border-l border-paleGrey">
            { children }
        </div>
    )
}

export default ResearchSecondaryContainer