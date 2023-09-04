
import { useState } from "react"

import { addComment } from "@/network/comments"
import { toast } from "sonner"

type CommentsProps = {
    research_id: string | string[] | undefined
}

type CommentsInputProps = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
    handleCreate: () => void
}

const Comment = () => {
    return (
        <div className="h-auto w-full flex items-start justify-center">
            {/* <span className="h-[30px] w-[30px] bg-paleGrey border border-border rounded-rnd text-xs flex items-center justify-center mr-[10px]">JN</span> */}
            <div className="h-auto flex-grow bg-white border border-paleGrey rounded-sm">
                <div className="h-auto w-full flex items-center justify-start my-[15px] mx-[15px]">
                    <p className="font-bold mr-[20px] text-sm">Jon Nicholson</p>
                    <p className="text-border text-sm">Today, 8:39am</p>
                </div>
                <p className="h-auto w-full mx-[15px] mb-[15px] text-sm">An example comment here to be reviewed and shown in the design file</p>
            </div>
        </div>
    )
}

const CommentInput = ({ state, setState, handleCreate }: CommentsInputProps) => {
    return (
        <div className="h-auto w-full flex items-end justify-end flex-col">
            <textarea className="h-[75px] w-full border border-paleGrey my-[15px] placeholder:text-border p-[15px] rounded-sm text-sm" placeholder="Enter a comment..." value={state} onChange={(e) => setState(e.target.value)} />
            <button className="h-[35px] px-[15px] bg-black text-white font-bold rounded-sm mb-[15px]" onClick={handleCreate}>Save</button>
        </div>
    )
}

const ResearchComments = ({ research_id }: CommentsProps) => {

    const [newContent, setNewContent] = useState("Example text")

    const handleCreate = async () => {

        const timestamp = Date.now()

        const { data, error } = await addComment(newContent, research_id, timestamp)

        if (error != null) {
            console.log(error)
            toast.error("Failed to add your comment")
        } else {
            toast.success("Successfully added your comment")
            setNewContent("")
        }

    }

    return (
        <div className="h-auto w-[95%]">
            <h2 className="font-bold mb-[30px]">Comments</h2>
            <Comment />
            <CommentInput state={newContent} setState={setNewContent} handleCreate={() => handleCreate()} />
        </div>
    )
}

export default ResearchComments