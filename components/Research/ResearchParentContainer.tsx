
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const ResearchParentContainer = ({ children }: Props) => {
    return (
        <div className="h-full w-screen flex items-center justify-center">
            { children }
        </div>
    )
}

export default ResearchParentContainer