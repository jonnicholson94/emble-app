
import { useState } from "react"
import moment from "moment"

import { addComment, deleteComment, editComment } from "@/network/comments"
import { toast } from "sonner"
import { CommentType } from "@/types/commentTypes"
import AlertDialog from "../UI/AlertDialog"

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
    comment_id: string
}

const Comment = ({ content, name, timestamp, comment_id }: SingleCommentProps) => {

    const [edit, setEdit] = useState(false)
    const [newContent, setNewContent] = useState(content)

    const handleEdit = async () => {
        const { data, error } = await editComment(newContent, comment_id)

        if (error != null) {
            toast.error("Failed to update your comment")
        } else {
            toast.success("Successfully updated your comment")
            setEdit(false)
        }
    }

    const handleDelete = async () => {
        const { data, error } = await deleteComment(comment_id)

        if (error != null) {
            toast.error("Failed to delete comment comment")
        } else {
            toast.success("Successfully deleted your comment")
        }
    }

    return (
        <div className="h-auto w-full flex items-start justify-center my-[15px]">
            {/* <span className="h-[30px] w-[30px] bg-paleGrey border border-border rounded-rnd text-xs flex items-center justify-center mr-[10px]">JN</span> */}
            <div className="h-auto flex-grow bg-white border border-paleGrey rounded-sm">
                <div className="h-auto w-full flex items-center justify-center">
                    <div className="h-auto flex flex-grow items-center justify-start my-[15px] mx-[15px]">
                        <p className="font-bold mr-[20px] text-sm">{name}</p>
                        <p className="text-border text-sm">{moment(timestamp).format("DD MMM, HH:MM")}</p>
                    </div>
                    <div className="h-auto flex items-center justify-end mx-[20px]">
                        { !edit && 
                            <>
                                <img className="h-[15px] w-[15px] cursor-pointer" src="/edit.svg" onClick={() => setEdit(true)} />
                                <AlertDialog title="Are you sure you want to delete this comment?" description="When you do, you won't be able to see it again." handleDelete={() => handleDelete()}>
                                    <img className="h-[15px] w-[15px] cursor-pointer ml-[15px]" src="/trash.svg" />
                                </AlertDialog>
                            </>
                        }
                    </div>
                </div>
                
                { edit ? 
                    <div className="h-auto w-[full] flex items-center justify-center flex-col mx-[15px] mb-[15px]">
                        <input className="h-auto w-full outline-none placeholder:text-border text-sm" value={newContent} placeholder="Enter a comment..." onChange={(e) => setNewContent(e.target.value)}  />
                        <div className="h-auto w-full flex items-center justify-end">
                            <button className="h-[35px] w-[70px] border border-paleGrey rounded-sm text-sm" onClick={() => setEdit(false)}>Cancel</button>
                            <button className="h-[35px] w-[70px] bg-black text-white font-bold rounded-sm text-sm ml-[10px]" onClick={() => handleEdit()}>Save</button>
                        </div>
                    </div> : <p className="h-auto w-full mx-[15px] mb-[15px] text-sm">{content}</p>
                }
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
                return <Comment key={comment.comment_id} content={comment.comment_content} name={name} timestamp={comment.comment_timestamp} comment_id={comment.comment_id} />
            })}
            <CommentInput state={newContent} setState={setNewContent} handleCreate={() => handleCreate()} />
        </div>
    )
}

export default ResearchComments