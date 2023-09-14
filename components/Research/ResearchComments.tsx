
import { useState } from "react"

import { CommentType } from "@/types/commentTypes"

import CommentInput from "../Comments/CommentInput"
import Comment from "../Comments/Comment"

type Props = {
    comments: CommentType[]
    setComments: React.Dispatch<React.SetStateAction<CommentType[]>>
    name: string
    research_id: string | string[] | undefined
    handleCreate: () => void
    handleEdit: () => void
    handleDelete: () => void
}

const ResearchComments = ({ comments, setComments, name,  handleCreate, handleDelete, handleEdit }: Props) => {

    const [newContent, setNewContent] = useState("")

    return (
        <div className="h-auto w-[95%]">
            <h2 className="font-bold mb-[30px]">Comments</h2>
            { comments.map(comment => {
                return <Comment key={comment.comment_id} content={comment.comment_content} name={name} timestamp={comment.comment_timestamp} comment_id={comment.comment_id} handleEdit={handleEdit} handleDelete={handleDelete} />
            })}
            <CommentInput state={newContent} setState={setNewContent} handleCreate={handleCreate} />
        </div>
    )
}

export default ResearchComments