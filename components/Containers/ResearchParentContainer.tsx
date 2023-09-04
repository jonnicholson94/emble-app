
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const ResearchParentContainer = ({ children }: Props) => {
    return (
        <div className="w-screen h-auto flex items-start justify-center">
            { children }
        </div>
    )
}

export default ResearchParentContainer