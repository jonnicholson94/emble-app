
const LoadingDashboard = () => {
    return (
        <div className="h-[50px] w-[95%] flex items-center justify-center bg-paleGrey border border-border rounded-sm my-[10px] animate-pulse">
            <span className="h-[20px] w-[20px] ml-[20px] mr-[10px] rounded-rnd bg-border"></span>
            <span className="h-[20px] flex-grow bg-border animate-pulse rounded-md mr-[20px]"></span>
        </div>
    )
}

export default LoadingDashboard