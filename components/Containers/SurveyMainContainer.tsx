import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const SurveyMainContainer = ({ children }: Props) => {
    return (
        <div className="xxs:h-auto md:h-screen xxs:w-full md:w-auto flex-grow flex items-center justify-center bg-offWhite">
            { children }
        </div>
    )
}

export default SurveyMainContainer