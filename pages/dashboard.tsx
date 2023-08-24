
import DashboardHeader from "@/components/Dashboard/DashboardHeader"
import EmptyDashboard from "@/components/Dashboard/EmptyDashboard"

const Dashboard = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
            <DashboardHeader />
            <EmptyDashboard />
        </div>
    )
}

export default Dashboard