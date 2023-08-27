
import { ReactNode } from "react"

import * as Select from "@radix-ui/react-select"

type Props = {
    children: ReactNode
    array: string[]
    state: "Backlog" | "Active" | "Completed" 
    setState: React.Dispatch<React.SetStateAction<"Backlog" | "Active" | "Completed">>
}

const MenuSelect = ({ children, array, state, setState }: Props) => {

    return (
        <Select.Root value={state} onValueChange={(value: "Backlog" | "Active" | "Completed") => setState(value)}>
            <Select.Trigger asChild>
                { children }
            </Select.Trigger>
            <Select.Portal >
                <Select.Content position="popper" className="py-[10px] px-[10px] bg-white border border-paleGrey rounded-sm">
                    <Select.Viewport>
                        { array.map(item => {
                            return (
                                <Select.Item 
                                    value={item}
                                    className="h-[30px] mx-[5px] px-[10px] cursor-pointer flex items-center border border-white focus:border-border"
                                    >{item}</Select.Item>
                            )
                        })}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}

export default MenuSelect