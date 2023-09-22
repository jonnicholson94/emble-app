
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const SettingsParentContainer = ({ children }: Props) => {
    return (
        <div className="h-auto min-h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
            { children }
        </div>
    )
}

export default SettingsParentContainer