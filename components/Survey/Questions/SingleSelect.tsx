import Toggle from "@/components/UI/Toggle"
import { QuestionOption } from "@/types/questionTypes"

type Props = {
    value: string 
    options: QuestionOption[] | null 
    handleClick: (value: string) => void
}

const SingleSelect = ({ value, options, handleClick }: Props) => {

    console.log(value)

    return (
        <>
            { options?.map((option: QuestionOption) => {
                return <div key={option.option_id} className="h-[40px] w-[90%] flex items-center justify-start border border-paleGrey rounded-sm my-[5px]" onClick={() => handleClick(option.option_content)}>
                    <Toggle toggled={value == option.option_content} />
                    <p className="text-sm">{option.option_content}</p>
                </div>
            })}
        </>
    )
}

export default SingleSelect