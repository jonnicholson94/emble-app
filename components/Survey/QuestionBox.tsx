import { QuestionOption, QuestionTypeOptions } from "@/types/questionTypes"
import { SurveyAnswer } from "@/types/surveyTypes"
import ShortText from "./Questions/ShortText"
import LongText from "./Questions/LongText"
import SingleSelect from "./Questions/SingleSelect"

type Props = {
    state: SurveyAnswer[] | []
    setState: React.Dispatch<React.SetStateAction<SurveyAnswer[]>>
    active: number
    setActive: React.Dispatch<React.SetStateAction<number>>
    id: string 
    options: QuestionOption[] | null
    index: number
    title: string 
    type: QuestionTypeOptions
}

const QuestionBox = ({ state, setState, active, setActive, id, options, index, title, type }: Props) => {

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        
        let data = [...state]
        data[index].question_answer = e.target.value
        setState(data)
    }

    const handleClickChange = (value: string) => {

        let data = [...state]
        data[index].question_answer = value 
        setState(data)

    }

    let question

    switch (type) {
        case "Short text":
            question = <ShortText value={state[index].question_answer} handleChange={handleTextChange}  />
            break
        case "Long text":
            question = <LongText value={state[index].question_answer} handleChange={handleTextChange} />
            break
        case "Single select":
            question = <SingleSelect value={state[index].question_answer} options={options} handleClick={handleClickChange}  />
            
    }

    

    return (
        <div className={`
            h-auto w-[90%] flex items-center justify-center flex-col rounded-sm my-[10px]`} onClick={() => setActive(index)}>
            <h3 className="w-[90%] mt-[20px] mb-[10px] text-lg font-bold mb-[30px]">{title}</h3>
            { active === index ? question : null }
        </div>
    )
}

export default QuestionBox