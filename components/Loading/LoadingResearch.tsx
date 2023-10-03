
import ResearchParentContainer from "../Containers/ResearchParentContainer"
import ResearchMainContainer from "../Containers/ResearchMainContainer"
import ResearchDivider from "../Research/ResearchDivider"

const LoadingResearch = () => {
    return (
        <div className="h-screen w-screen flex overflow-hidden items-center justify-start flex-col bg-altBackground">
            <div className="h-[60px] w-full bg-white flex items-center justify-center border-b border-altBorder"></div>
            <ResearchParentContainer>

                <ResearchMainContainer>
                    <div className="h-[60px] w-[95%] bg-paleGrey rounded-sm animate-pulse my-[15px]"></div>
                    <div className="h-[100px] w-[95%] bg-paleGrey rounded-sm animate-pulse mt-[20px]"></div>
                    <ResearchDivider />
                </ResearchMainContainer>

            </ResearchParentContainer>
        </div>
    )
}

export default LoadingResearch