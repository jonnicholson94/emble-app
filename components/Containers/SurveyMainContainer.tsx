import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const SurveyMainContainer = ({ children }: Props) => {
    return (
        <div className="h-screen flex-grow flex items-center justify-center bg-offWhite">
            { children }
        </div>
    )
}

export default SurveyMainContainer