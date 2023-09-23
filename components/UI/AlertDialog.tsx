
import * as Alert from "@radix-ui/react-alert-dialog"

import { ReactNode } from "react"

type Props = {
    children: ReactNode
    title: string
    description: string
    handleDelete: () => void
}

const AlertDialog = ({ children, title, description, handleDelete }: Props) => {
    return (
        <Alert.Root>
            <Alert.Trigger asChild>
                { children }
            </Alert.Trigger>
            <Alert.Portal >
                <Alert.Overlay className="h-screen w-screen fixed top-0 left-0 bg-black opacity-70" />
                <Alert.Content className="h-auto xxs:w-[90%] md:w-[50%] bg-white flex items-center justify-start flex-col fixed top-[30%] xxs:left-[5%] md:left-[25%] py-[25px] rounded-sm border border-paleGrey">
                    <Alert.Title className="h-auto w-[90%] font-bold text-xl">{title}</Alert.Title>
                    <Alert.Description className="h-auto w-[90%] my-[15px]">{description}</Alert.Description>
                    <div className="h-auto w-[90%] flex items-center justify-end my-[10px]">
                        <Alert.Cancel className="h-[35px] px-[10px] border border-paleGrey rounded-sm font-bold">Cancel</Alert.Cancel>
                        <Alert.Action className="h-[35px] px-[10px] bg-delete rounded-sm ml-[15px] font-bold text-white" onClick={handleDelete}>Confirm</Alert.Action>
                    </div>
                    
                </Alert.Content>
            </Alert.Portal>
        </Alert.Root>
    )
}

export default AlertDialog