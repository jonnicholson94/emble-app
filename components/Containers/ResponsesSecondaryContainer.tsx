
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const ResponsesSecondaryContainer = ({ children }: Props) => {
    return (
        <div className="h-auto xxs:w-[90%] md:w-[60%] flex items-center justify-start flex-col my-[50px]">
            { children }
        </div>
    )
}

export default ResponsesSecondaryContainer