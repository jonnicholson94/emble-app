
type QuestionProps = {
    content: string 
    type: "Intro" | "Outro" | "Single select"
    index: number 
    length: number
}

const Question = ({ content, type, index, length }: QuestionProps) => {
    return (
        <div className="h-[50px] w-[full] px-[20px] flex items-center justify-start bg-white border border-paleGrey rounded-sm mb-[10px]">
            <p className="flex-grow">{content}</p>
            { type !== "Intro" && type !== "Outro" ? 
                <>
                    <p className="h-[30px] px-[10px] mr-[20px] border border-paleGrey rounded-sm text-sm flex items-center justify-center">{type}</p>
                    <img className="mx-[10px]" src={index - 1 === 0 ? "/arrow-up-grey.svg" : "/arrow-up-black.svg"} />
                    <img className="mx-[10px]" src={index + 1 === length ? "/arrow-down-grey.svg" : "/arrow-down-black.svg"} />
                </> : null
            }
        </div>
    )
}

const ResearchQuestions = () => {
    return (
        <div className="h-auto w-[95%]">
            <h2 className="font-bold mb-[30px]">Survey</h2>
            <Question content="Intro" type="Intro" index={0} length={3} />
            <Question content="Example question, wow!" type="Single select" index={1} length={3} />
            <Question content="Example question, wow!" type="Single select" index={2} length={3} />
            <Question content="Thank you" type="Outro" index={2} length={3} />
        </div>
    )
}

export default ResearchQuestions