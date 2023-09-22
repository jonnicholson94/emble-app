
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const ResponsesSecondaryContainer = ({ children }: Props) => {
    return (
        <div className="h-auto w-[60%] flex items-center justify-start flex-col my-[50px]">
            { children }
        </div>
    )
}

export default ResponsesSecondaryContainer