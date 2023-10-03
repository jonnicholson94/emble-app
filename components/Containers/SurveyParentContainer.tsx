import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const SurveyParentContainer = ({ children }: Props) => {
    return (
        <div className="xxs:h-auto md:h-screen w-screen flex items-center bg-altBackground justify-center xxs:flex-col md:flex-row">
            { children }
        </div> 
    )
}

export default SurveyParentContainer