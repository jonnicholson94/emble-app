import { QuestionType, QuestionTypeOptions } from "@/types/questionTypes"
import ResearchAddQuestion from "./ResearchAddQuestion"
import Intro from "./QuestionTypes/Intro"
import Outro from "./QuestionTypes/Outro"

type QuestionProps = {
    content: string 
    type: QuestionTypeOptions
    index: number 
    length: number
}

type ResearchProps = {
    questions: QuestionType[]
    intro: boolean
    setIntro: React.Dispatch<React.SetStateAction<boolean>>
    outro: boolean 
    setOutro: React.Dispatch<React.SetStateAction<boolean>>
    research_id: string | string[] | undefined
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

const ResearchQuestions = ({ questions, intro, setIntro, outro, setOutro, research_id }: ResearchProps) => {
    return (
        <div className="h-auto w-[95%]">
            <h2 className="font-bold mb-[30px]">Survey</h2>

            <Intro intro={intro} setIntro={setIntro} />

            { questions.map((question, index) => {
                return <Question content={question.question_title} type={question.question_type} index={question.question_index} length={questions.length - 1} />
            })}

            <Outro outro={outro} setOutro={setOutro} />

            <ResearchAddQuestion research_id={research_id} index={questions.length + 1} />

        </div>
    )
}

export default ResearchQuestions