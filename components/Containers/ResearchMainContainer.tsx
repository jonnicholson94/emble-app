import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const ResearchMainContainer = ({ children }: Props) => {
    return (
        <div className="h-full w-full flex-grow flex items-center justify-start flex-col mt-[50px]">
            { children }
        </div>
    )
}

export default ResearchMainContainer