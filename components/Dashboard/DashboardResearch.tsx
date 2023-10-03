
import { ActiveTypes, ResearchOptions } from "@/types/researchTypes"
import Link from "next/link"

type Props = {
    status: ActiveTypes
    title: string
    type: ResearchOptions
    id: string
}

const DashboardResearch = ({ status, title, type, id }: Props) => {
    return (
        <Link className="h-[50px] w-[95%] flex items-center justify-center bg-altBackground border border-altBorder rounded-sm my-[10px]" href={`/research/${id}`}>
            <img className="h-[20px] w-[20px] ml-[20px] mr-[10px]" src={`${status}.svg`} alt="The current status of the research" />
            <p className="h-auto flex-grow text-white truncate xxs:mr-[20px]">{title}</p>
            <p className="h-[30px] px-5 border border-altBorder text-white mr-[20px] ml-[10px] text-sm xxs:hidden sm:flex items-center justify-center rounded-sm">{type}</p>
        </Link>
    )
}

export default DashboardResearch