
import { useState } from "react"
import moment from "moment"

import AlertDialog from "../UI/AlertDialog"
import PendingButton from "../UI/PendingButton"

type Props = {
    id: string
    content: string
    name: string 
    timestamp: number
    comment_id: string
    handleEdit: (comment_id: string, content: string) => void
    handleDelete: () => void 
}

const Comment = ({ id, content, name, timestamp, handleEdit, handleDelete }: Props) => {

    const [edit, setEdit] = useState(false)
    const [newContent, setNewContent] = useState(content)
    const [pending, setPending] = useState(false)

    const handleCommentEdit = () => {
        setEdit(false)
        setNewContent(content)
        handleEdit(id, newContent)
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
                                <img className="h-[15px] w-[15px] cursor-pointer" src="/edit.svg" onClick={() => setEdit(true)} alt="An edit icon to show the user they can edit a comment" />
                                <AlertDialog title="Are you sure you want to delete this comment?" description="When you do, you won't be able to see it again." handleDelete={() => handleDelete()}>
                                    <img className="h-[15px] w-[15px] cursor-pointer ml-[15px]" src="/trash.svg" alt="A trash icon to indicate to the user they can delete a comment" />
                                </AlertDialog>
                            </>
                        }
                    </div>
                </div>
                
                { edit ? 
                    <div className="h-auto w-[full] flex items-center justify-center flex-col mx-[15px] mb-[15px]">
                        <input className="h-auto w-full outline-none placeholder:text-border text-sm" value={newContent} placeholder="Enter a comment..." onChange={(e) => setNewContent(e.target.value)}  />
                        <div className="h-auto w-full flex items-center justify-end">
                            <button className="h-[35px] w-[75px] border border-paleGrey rounded-sm text-sm" onClick={() => setEdit(false)}>Cancel</button>
                            <PendingButton pending={pending} content="Save" height="h-[35px]" width="w-[75px]" text="text-sm" handleClick={handleCommentEdit} />
                        </div>
                    </div> : <p className="h-auto w-full mx-[15px] mb-[15px] text-sm">{content}</p>
                }
            </div>
        </div>
    )
}

export default Comment