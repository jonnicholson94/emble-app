import SurveyMainContainer from "../Containers/SurveyMainContainer"
import SurveyParentContainer from "../Containers/SurveyParentContainer"
import SurveySecondaryContainer from "../Containers/SurveySecondaryContainer"
import EmbleLink from "../Survey/EmbleLink"

const LoadingSurvey = () => {
    return (
        <SurveyParentContainer>
            <SurveyMainContainer>
                <div className="h-[90%] w-[90%] bg-paleGrey rounded-sm animate-pulse"></div>
            </SurveyMainContainer>
            <SurveySecondaryContainer>
                <div className="h-[40px] w-[90%] bg-paleGrey rounded-sm animate-pulse my-[15px]"></div>
                <div className="h-[80px] w-[90%] bg-paleGrey rounded-sm animate-pulse mb-[50px]"></div>
                <div className="h-[50px] w-[90%] bg-paleGrey rounded-sm animate-pulse my-[5px]"></div>
                <div className="h-[50px] w-[90%] bg-paleGrey rounded-sm animate-pulse my-[5px]"></div>
                <div className="h-[50px] w-[90%] bg-paleGrey rounded-sm animate-pulse my-[5px]"></div>
                <EmbleLink />
            </SurveySecondaryContainer>
        </SurveyParentContainer>
    )
}

export default LoadingSurvey