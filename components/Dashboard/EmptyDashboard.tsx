

import Link from "next/link"

const EmptyDashboard = () => {
    return (
        <div className="h-full xs:w-[90%] md:w-[40%] flex items-start justify-center flex-col">
            <img src="/empty-dashboard.svg" />
            <h1 className="text-2xl font-bold mt-[30px] mb-[10px]">Your research</h1>
            <p className="my-[10px]">When you create research, it’ll show in a list here.</p>
            <p>You can view each research’s status, details and more. Clicking on them takes you to an individual research page.</p>
            <Link className="h-[40px] px-5 bg-black text-white font-bold rounded-md flex items-center justify-center my-[20px]" href="/research/create">Create research</Link>
        </div>
    )
}

export default EmptyDashboard