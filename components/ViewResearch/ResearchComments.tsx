
import { useState } from "react"
import moment from "moment"

import { addComment } from "@/network/comments"
import { toast } from "sonner"
import { CommentType } from "@/types/commentTypes"

type CommentsProps = {
    comments: CommentType[]
    setComments: React.Dispatch<React.SetStateAction<CommentType[]>>
    name: string
    research_id: string | string[] | undefined
}

type CommentsInputProps = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
    handleCreate: () => void
}

type SingleCommentProps = {
    content: string
    name: string 
    timestamp: number
}

const Comment = ({ content, name, timestamp }: SingleCommentProps) => {

    return (
        <div className="h-auto w-full flex items-start justify-center my-[15px]">
            {/* <span className="h-[30px] w-[30px] bg-paleGrey border border-border rounded-rnd text-xs flex items-center justify-center mr-[10px]">JN</span> */}
            <div className="h-auto flex-grow bg-white border border-paleGrey rounded-sm">
                <div className="h-auto w-full flex items-center justify-start my-[15px] mx-[15px]">
                    <p className="font-bold mr-[20px] text-sm">{name}</p>
                    <p className="text-border text-sm">{moment(timestamp).format("DD MMM, HH:MM")}</p>
                </div>
                <p className="h-auto w-full mx-[15px] mb-[15px] text-sm">{content}</p>
            </div>
        </div>
    )
}

const CommentInput = ({ state, setState, handleCreate }: CommentsInputProps) => {
    return (
        <div className="h-auto w-full flex items-end justify-end flex-col my-[15px]">
            <textarea className="h-[75px] w-full border border-paleGrey placeholder:text-border p-[15px] rounded-sm text-sm" placeholder="Enter a comment..." value={state} onChange={(e) => setState(e.target.value)} />
            <button className="h-[35px] px-[30px] text-sm bg-black text-white font-bold rounded-sm mt-[15px] mb-[50px]" onClick={handleCreate}>Save</button>
        </div>
    )
}

const ResearchComments = ({ comments, setComments, name, research_id }: CommentsProps) => {

    const [newContent, setNewContent] = useState("")

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
            { comments.map(comment => {
                return <Comment content={comment.comment_content} name={name} timestamp={comment.comment_timestamp} />
            })}
            <CommentInput state={newContent} setState={setNewContent} handleCreate={() => handleCreate()} />
        </div>
    )
}

export default ResearchComments