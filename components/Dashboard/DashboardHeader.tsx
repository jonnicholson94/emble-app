
import Link from "next/link"

const DashboardHeader = () => {
    return (
        <div className="h-[60px] w-full flex items-center justify-center bg-white border-b border-paleGrey">
            <div className="h-full xxs:w-[45%] s:w-[47%] md:w-[48%] flex items-center justify-start">
                <h1 className="font-bold text-sm">Dashboard</h1>
            </div>
            <div className="h-auto xxs:w-[45%] s:w-[47%] md:w-[48%] flex items-center justify-end">
                <Link className="h-[35px] px-3 flex items-center justify-center border border-border rounded-md" href="/settings">
                    <img className="h-[15px] w-[15px] mx-[2.5px]" src="/settings.svg" alt="The settings icon" />
                    <p className="md:flex xs:hidden mx-2 text-sm">Settings</p>
                </Link>
                <Link className="h-[35px] px-3 bg-black text-white font-bold items-center justify-center flex rounded-md ml-[10px]" href="/research/create">
                <img className="h-[15px] w-[15px] mx-[2.5px]" src="/add-white.svg" alt="A plus icon to accompany the create research" />
                    <p className="md:flex xs:hidden mx-2 text-sm">Create research</p>
                </Link>
            </div>
        </div>
    )
}

export default DashboardHeader