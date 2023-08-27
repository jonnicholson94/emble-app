
import Link from "next/link"

type Props = {
    status: "Backlog" | "Active" | "Completed"
    title: string
    id: string
}

const DashboardResearch = ({ status, title, id }: Props) => {
    return (
        <Link className="h-[50px] w-[95%] flex items-center justify-center bg-white border border-paleGrey rounded-sm" href={`/research/${id}`}>
            <img className="h-[20px] w-[20px] ml-[20px] mr-[10px]" src={`${status}.svg`} />
            <p className="h-auto flex-grow">{title}</p>
            <p className="h-[30px] px-5 border border-paleGrey mr-[20px] ml-[10px] text-sm flex items-center justify-center rounded-sm">Prototype</p>
        </Link>
    )
}

export default DashboardResearch