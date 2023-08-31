
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

    return (
            <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
                <DashboardHeader />

                { data?.data == null ? <EmptyDashboard /> : <DashboardToggle /> }

                { data?.data?.map((research: ResearchType) => {
                    return (
                        <DashboardResearch key={research.id} status={research.status} title={research.title} id={research.id} />
                    )
                })}
                
            </div>
        )
    }

export default Dashboard