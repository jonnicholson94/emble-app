
import Link from "next/link"
import { useRouter } from "next/router"

type ToggleProps = {
    content: "All" | "Active" | "Completed"
    active: boolean
    href: "/dashboard" | "/dashboard?filter=active" | "/dashboard?filter=completed"
}

const DashboardToggle = () => {

    const router = useRouter()

    const { filter } = router.query

    return (
        <div className="h-[60px] w-full flex items-center justify-start px-[20px]">
            <Toggle content="All" active={filter === undefined ? true : false} href="/dashboard" />
            <Toggle content="Active" active={filter === "active" ? true : false} href="/dashboard?filter=active" />
            <Toggle content="Completed" active={filter === "completed" ? true : false} href="/dashboard?filter=completed" />
        </div>
    )
}

const Toggle = ({ content, active, href }: ToggleProps) => {
    return (
        <Link className={`h-[30px] px-5 rounded-md flex items-center justify-center text-sm text-white cursor-pointer ${active === true ? "bg-altBackground border border-altBorder" : ""}`} href={href}>
            { content }
        </Link>
    )
}

export default DashboardToggle