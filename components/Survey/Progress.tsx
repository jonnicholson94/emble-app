import { SurveyAnswer } from "@/types/surveyTypes"

type Props = {
    active: number
    setActive: React.Dispatch<React.SetStateAction<number>>
    answers: SurveyAnswer[]
}

const Progress = ({ active, setActive, answers }: Props) => {
    return (
        <div className="h-auto mx-[15px] flex items-center justify-end flex-grow">
            { answers.map((answer: SurveyAnswer, index: number) => {
                return <span 
                            key={index} 
                            onClick={() => setActive(index)}
                            className={`h-[15px] w-[15px] rounded-rnd mx-[5px] ${active !== index ? "bg-white border border-paleGrey" : "bg-black"}`}></span>
            })}
        </div>
    )
}

export default Progress