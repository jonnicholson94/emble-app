
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { fetchResearch } from "@/network/research"
import { toast } from "sonner"

import { ResearchType } from "@/types/researchTypes"

import DashboardHeader from "@/components/Dashboard/DashboardHeader"
import EmptyDashboard from "@/components/Dashboard/EmptyDashboard"
import DashboardToggle from "@/components/Dashboard/DashboardToggle"
import DashboardResearch from "@/components/Dashboard/DashboardResearch"
import LoadingDashboard from "@/components/Loading/LoadingDashboardResearch"

const Dashboard = () => {

    const router = useRouter()

    const { filter } = router.query

    const { data, error, isLoading } = useQuery('research', fetchResearch)

    if (isLoading) {
        return (
            <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
                <DashboardHeader />

                <DashboardToggle />

                <LoadingDashboard />
                
            </div>
        )
    }

    if (error) {

        toast.error("Failed to fetch your data")

        return (
            <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
                <DashboardHeader />

                <DashboardToggle />

                <LoadingDashboard />
                
            </div>
        )
    }

    const filterResults = () => {

        if (!data) {
            return
        }

        if (filter === undefined) {
            return data.data
        } else if (filter === "active") {
            return data.data.filter((item: ResearchType) => item.status === "Active")
        } else if (filter === "completed") {
            return data.data.filter((item: ResearchType) => item.status === "Completed")
        }
    }

    const filteredData = filterResults()

    return (
            <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
                <DashboardHeader />

                { data?.data == null ? <EmptyDashboard /> : <DashboardToggle /> }

                { filteredData.map((research: ResearchType) => {
                    return (
                        <DashboardResearch key={research.id} status={research.status} title={research.title} id={research.id} />
                    )
                })}
                
            </div>
        )
    }

export default Dashboard