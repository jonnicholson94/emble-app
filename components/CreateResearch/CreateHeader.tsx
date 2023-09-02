
import Link from "next/link"

type Props = {
    heading: string
    handleSubmit: () => void
}

const CreateHeader = ({ heading, handleSubmit }: Props) => {
    return (
        <div className="h-[60px] w-full bg-white flex items-center justify-center border-b border-paleGrey">
            <div className="h-full w-[48%] flex items-center justify-start">
                <Link className="mr-[10px]" href="/dashboard">
                    <img src="/close.svg" />
                </Link>
                <h1 className="font-bold">{heading}</h1>
            </div>
            <div className="h-full w-[48%] flex items-center justify-end">
                <button className="h-[35px] px-5 bg-black text-white font-bold rounded-md text-sm" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default CreateHeader