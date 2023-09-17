
import { QuestionOption } from "@/types/questionTypes"

type Props = {
    state: string[]
    options: QuestionOption[] | null 
    handleClick: (value: string) => void
}

const MultiSelect = ({ state, options, handleClick }: Props) => {

    return (
        <>
            { options?.map((option: QuestionOption) => {
                return <div key={option.option_id} className={`h-[40px] w-[90%] flex items-center justify-start border ${state.includes(option.option_content) ? "border-black" : "border-paleGrey"} rounded-sm my-[5px]`} onClick={() => handleClick(option.option_content)}>
                    <div className={`h-[18px] w-[18px] flex items-center justify-center rounded-rnd border ${state.includes(option.option_content) ? "border-black" : "border-paleGrey"} mx-[10px]`}>
                        { state.includes(option.option_content) && <span className="h-[12px] w-[12px] rounded-rnd bg-black"></span> }
                    </div>
                    <p className="text-sm">{option.option_content}</p>
                </div>
            })}
        </>
    )
}

export default MultiSelect