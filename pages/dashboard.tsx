
import { useQuery } from "react-query"
import { fetchResearch } from "@/network/research"

import { ResearchType } from "@/types/researchTypes"

import DashboardHeader from "@/components/Dashboard/DashboardHeader"
import EmptyDashboard from "@/components/Dashboard/EmptyDashboard"
import DashboardToggle from "@/components/Dashboard/DashboardToggle"
import DashboardResearch from "@/components/Dashboard/DashboardResearch"


const Dashboard = () => {

    const { data, error, isLoading } = useQuery('research', fetchResearch)

    if (isLoading) {
        return <div></div>
    }

    console.log(data)

    return (
        <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
            <DashboardHeader />

            { data?.data == null ? <EmptyDashboard /> : <DashboardToggle /> }

            { data?.data?.map((research: ResearchType) => {
                return (
                    <DashboardResearch status={research.status} title={research.title} />
                )
            })}
            
        </div>
    )
}

export default Dashboard