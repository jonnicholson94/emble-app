
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import { CommentType } from "@/types/commentTypes"

import CommentInput from "../Comments/CommentInput"
import Comment from "../Comments/Comment"
import ErrorText from "../UI/ErrorText"

type Props = {
    comments: CommentType[] | []
    name: string
    research_id: string | string[] | undefined
    handleCreate: (comment: CommentType) => void
    handleEdit: (comment_id: string, content: string) => void
    handleDelete: (comment_id: string) => void
}

const ResearchComments = ({ comments, name, research_id, handleCreate, handleDelete, handleEdit }: Props) => {

    const [newContent, setNewContent] = useState("")

    const handleCommentCreate = () => {

        if (newContent.length === 0) {
            return
        }

        const timestamp = Date.now()

        const comment = {
            comment_content: newContent,
            comment_id: uuidv4(),
            comment_user_id: "",
            comment_research_id: research_id,
            comment_timestamp: timestamp,
        }

        setNewContent("")

        handleCreate(comment)

    }

    return (
        <div className="h-auto w-[95%]">
            <h2 className="font-bold mb-[30px]">Comments</h2>
            { comments.length > 0 && comments.map(comment => {
                return <Comment key={comment.comment_id} id={comment.comment_id} content={comment.comment_content} name={name} timestamp={comment.comment_timestamp} comment_id={comment.comment_id} handleEdit={handleEdit} handleDelete={() => handleDelete(comment.comment_id)} />
            })}
            <CommentInput state={newContent} setState={setNewContent} handleCreate={handleCommentCreate} />
        </div>
    )
}

export default ResearchComments