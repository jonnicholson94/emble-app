import { QuestionType, QuestionTypeOptions } from "@/types/questionTypes"
import ResearchAddQuestion from "./ResearchAddQuestion"

type QuestionProps = {
    content: string 
    type: QuestionTypeOptions
    index: number 
    length: number
}

type ResearchProps = {
    questions: QuestionType[]
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

const ResearchQuestions = ({ questions }: ResearchProps) => {
    return (
        <div className="h-auto w-[95%]">
            <h2 className="font-bold mb-[30px]">Survey</h2>

            { questions.map((question, index) => {
                return <Question content={question.title} type={question.type} index={index} length={questions.length - 1} />
            })}

            <ResearchAddQuestion />

        </div>
    )
}

export default ResearchQuestions