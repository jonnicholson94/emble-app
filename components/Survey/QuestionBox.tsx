import { QuestionTypeOptions } from "@/types/questionTypes"
import ShortText from "./Questions/ShortText"
import LongText from "./Questions/LongText"

type Props = {
    title: string 
    type: QuestionTypeOptions
}

const QuestionBox = ({ title, type }: Props) => {

    let question

    switch (type) {
        case "Short text":
            question = <ShortText  />
            break
        case "Long text":
            question = <LongText />
            break
            
    }

    return (
        <div className="h-auto w-[90%] border border-paleGrey flex items-center justify-center flex-col rounded-sm my-[10px]">
            <h3 className="w-[90%] mt-[20px] mb-[10px] text-lg font-bold">{title}</h3>
            { question }
        </div>
    )
}

export default QuestionBox