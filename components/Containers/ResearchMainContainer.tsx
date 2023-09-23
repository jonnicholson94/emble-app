import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const ResearchMainContainer = ({ children }: Props) => {
    return (
        <div className="xxs:w-[95%] md:w-full overflow overflow-scroll flex items-center justify-start flex-col mt-[50px]">
            { children }
        </div>
    )
}

export default ResearchMainContainer