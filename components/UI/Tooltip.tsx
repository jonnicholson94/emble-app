
import * as Tip from "@radix-ui/react-tooltip"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
    content: string
}

const Tooltip = ({ children, content }: Props) => {
    return (
        <Tip.Provider>
            <Tip.Root>
                <Tip.Trigger asChild>
                    {children}
                </Tip.Trigger>
                <Tip.Portal>
                    <Tip.Content sticky="always" side="bottom" sideOffset={5} className="py-[5px] px-[10px] bg-white border border-paleGrey rounded-sm text-sm">{content}</Tip.Content>
                </Tip.Portal>
            </Tip.Root>
        </Tip.Provider>
    )
}

export default Tooltip