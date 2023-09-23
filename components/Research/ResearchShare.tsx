
import * as Popover from "@radix-ui/react-popover"
import { toast } from "sonner"

type Props = {
    research_id: string | string[] | undefined
}

const ResearchShare = ({ research_id }: Props) => {

    const handleClipboardCopy = () => {
        navigator.clipboard.writeText(`http://localhost:3000/survey/${research_id}`)
        toast("Successfully copied survey link to your clipboard")
    }

    return (
        <>
            <Popover.Root>
            <Popover.Trigger>
                <button className="h-[35px] xxs:px-[10px] md:px-[10px] border border-paleGrey hover:border-paleGrey flex items-center justify-center rounded-sm cursor-pointer mx-[10px]">
                    <img className="xs:h-[20px] md:h-[15px] xs:h-[20px] md:w-[15px] md:mr-[10px]" src="/link.svg" alt="A link icon to indicate the share option" />
                    <p className="text-sm xxs:hidden md:flex">Share</p>
                </button>
            </Popover.Trigger>
            <Popover.Content sideOffset={15} className="h-auto w-[350px] bg-white flex items-center justify-center flex-col border border-paleGrey rounded-sm shadow mr-[15px]">
                <h2 className="h-auto w-[80%] mt-[20px] font-bold">Your survey link</h2>
                <p className="h-auto w-[80%] mt-[10px] text-xs">Send this survey link to your users. They&apos;ll see your Figma prototype, and questions you&apos;ve added to the survey to fill in.</p>
                <button className="h-[40px] w-[80%] bg-black text-white text-sm font-bold rounded-sm mt-[10px] mb-[30px]" onClick={() => handleClipboardCopy()}>Copy shareable link</button>
            </Popover.Content>
        </Popover.Root>
        </>
    )
}

export default ResearchShare