
type Props = {
    state: string 
    setState: React.Dispatch<React.SetStateAction<string>>
    handleCreate: () => void
}

const CommentInput = ({ state, setState, handleCreate }: Props) => {
    return (
        <div className="h-auto w-full flex items-end justify-end flex-col my-[15px]">
            <textarea className="h-[75px] w-full border border-paleGrey placeholder:text-border p-[15px] rounded-sm text-sm" placeholder="Enter a comment..." value={state} onChange={(e) => setState(e.target.value)} />
            <button className="h-[35px] w-[75px] rounded-sm bg-black text-white font-bold text-sm my-[15px] flex items-center justify-center" onClick={handleCreate}>
                Save
            </button>
        </div>
    )
}

export default CommentInput