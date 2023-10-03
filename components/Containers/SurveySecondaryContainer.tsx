import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const SurveySecondaryContainer = ({ children }: Props) => {
    return (
        <div className="xxs:h-auto md:h-screen xxs:w-full md:w-[400px] bg-altBackground border-l border-altBorder flex items-center justify-center flex-col">
            { children }
        </div>
    )
}

export default SurveySecondaryContainer