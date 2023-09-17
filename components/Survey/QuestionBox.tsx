
import { QuestionOption, QuestionTypeOptions } from "@/types/questionTypes"
import { SurveyAnswer } from "@/types/surveyTypes"

import { saveSurvey } from "@/network/survey"

import ShortText from "./Questions/ShortText"
import LongText from "./Questions/LongText"
import SingleSelect from "./Questions/SingleSelect"
import MultiSelect from "./Questions/MultiSelect"
import Rating from "./Questions/Rating"
import Scale from "./Questions/Scale"



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
        data[index].question_answer[0] = e.target.value
        setState(data)
    }

    const handleClickChange = (value: string) => {
        let data = [...state]
        data[index].question_answer[0] = value 
        setState(data)
    }

    const handleMultiClickChange = (value: string) => {

        let data = [...state]
        console.log(data[index])

        const exists = data[index].question_answer.includes(value)

        // If element already exists, then remove it from array
        
        if (exists) {
            const filteredData = data[index].question_answer.filter(answer => answer !== value)
            data[index].question_answer = filteredData
            console.log(filteredData)
            setState(data)
        }

        // If element doesn't exist, then add it to array 

        if (!exists) {
            data[index].question_answer = [...data[index].question_answer, value]
            setState(data)
        }

    }

    const handleSubmit = async () => {

        const { data, error } = await saveSurvey(state)

    }

    let question

    switch (type) {
        case "Short text":
            question = <ShortText state={state[index].question_answer[0]} handleChange={handleTextChange}  />
            break
        case "Long text":
            question = <LongText state={state[index].question_answer[0]} handleChange={handleTextChange} />
            break
        case "Single select":
            question = <SingleSelect state={state[index].question_answer[0]} options={options} handleClick={handleClickChange}  />
            break 
        case "Multi select": 
            question = <MultiSelect state={state[index].question_answer} options={options} handleClick={handleMultiClickChange} />
            break 
        case "Rating":
            question = <Rating state={state[index].question_answer[0]} handleClick={handleClickChange} />
            break
        case "Scale":
            question = <Scale state={state[index].question_answer[0]} handleClick={handleClickChange} />
            break
    }

    return (
        <div className={`
            h-auto w-[90%] flex items-center justify-center flex-col rounded-sm my-[10px] focus:outline-none`}>
            <h3 className="w-[90%] mt-[20px] mb-[10px] text-lg font-bold mb-[30px]">{title}</h3>
            { active === index ? question : null }
            <div className="h-auto w-[90%] flex items-end justify-center mt-[50px] py-[5%] flex-col">
                { active === state.length - 1 ? <button className="h-[35px] px-[20px] bg-black text-white font-bold rounded-sm" onClick={() => handleSubmit()}>Submit</button> : <button className="h-[35px] px-[20px] bg-black text-white font-bold rounded-sm" onClick={() => setActive(active + 1)}>Continue</button> }
                <p className="h-auto flex items-center justify-end text-xs rounded-md mt-[10px]">
                    <img className="h-[10px] w-[10px] mr-[5px]" src="/enter.svg" />
                    Or hit enter
                </p>
            </div>
        </div>
    )
}

export default QuestionBox