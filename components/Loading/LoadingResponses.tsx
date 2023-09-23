import ResponsesMainContainer from "../Containers/ResponsesMainContainer"
import ResponsesSecondaryContainer from "../Containers/ResponsesSecondaryContainer"
import ResponsesHeader from "../Responses/ResponsesHeader"

const LoadingResponses = () => {
    return (
        <ResponsesMainContainer>

            <ResponsesHeader title="Responses | emble" id="" />
            <ResponsesSecondaryContainer>
                <div className="h-[100px] w-[90%] bg-paleGrey rounded-lg animate-pulse my-[15px]"></div>
            </ResponsesSecondaryContainer>

        </ResponsesMainContainer>
    )
}

export default LoadingResponses