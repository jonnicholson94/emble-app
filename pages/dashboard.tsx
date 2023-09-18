
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { fetchResearch } from "@/network/research"
import { toast } from "sonner"

import { ResearchType } from "@/types/researchTypes"
import useAuth from "@/lib/hooks/useAuth"

import DashboardHeader from "@/components/Dashboard/DashboardHeader"
import EmptyDashboard from "@/components/Dashboard/EmptyDashboard"
import DashboardToggle from "@/components/Dashboard/DashboardToggle"
import DashboardResearch from "@/components/Dashboard/DashboardResearch"
import LoadingDashboard from "@/components/Loading/LoadingDashboardResearch"
import errorHandler from "@/lib/errorHandler"

const Dashboard = () => {

    useAuth()

    const router = useRouter()

    const { filter } = router.query

    const { data, isFetching } = useQuery('research', fetchResearch)

    console.log(data)
    console.log(isFetching)

    if (isFetching) {
        return (
            <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
                <DashboardHeader />

                <DashboardToggle />

                <LoadingDashboard />
                
            </div>
        )
    }

    if (data?.error !== null && !isFetching) {

        toast.error(data?.error.message)
        errorHandler(data?.error.status)

        return (
            <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
                <DashboardHeader />

                <DashboardToggle />

                <LoadingDashboard />
                
            </div>
        )
    }

    const filterResults = () => {

        if (!data || data.data === null) {
            return
        }

        if (filter === undefined) {
            return data?.data
        } else if (filter === "active") {
            return data?.data.filter((item: ResearchType) => item.research_status === "Active")
        } else if (filter === "completed") {
            return data?.data.filter((item: ResearchType) => item.research_status === "Completed")
        }
    }

    const filteredData = filterResults()

    return (
            <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
                <DashboardHeader />

                { data?.data == null ? <EmptyDashboard /> : <DashboardToggle /> }

                { filteredData?.map((research: ResearchType) => {
                    return (
                        <DashboardResearch key={research.research_id} status={research.research_status} title={research.research_title} id={research.research_id} />
                    )
                })}
                
            </div>
        )
    }

export default Dashboard