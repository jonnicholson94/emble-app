
import { ReactNode } from "react"

import * as Select from "@radix-ui/react-select"
import { ActiveTypes } from "@/types/researchTypes"
import { QuestionTypeOptions } from "@/types/questionTypes"

type Props = {
    children: ReactNode
    array: string[]
    state: ActiveTypes | QuestionTypeOptions
    handleClick: (value: ActiveTypes | QuestionTypeOptions) => void
}

const MenuSelect = ({ children, array, state, handleClick }: Props) => {

    return (
        <Select.Root value={state} onValueChange={(value) => handleClick(value as ActiveTypes | QuestionTypeOptions)}>
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