import { QuestionType, QuestionTypeOptions } from "@/types/questionTypes"
import ResearchAddQuestion from "./ResearchAddQuestion"
import Intro from "./QuestionTypes/Intro"
import Outro from "./QuestionTypes/Outro"
import { editQuestionOrder } from "@/network/questions"

type QuestionProps = {
    content: string 
    type: QuestionTypeOptions
    index: number 
    length: number
    changeOrder: (index: number, change: 1 | -1 ) => void
}

type ResearchProps = {
    questions: QuestionType[]
    setQuestions: React.Dispatch<React.SetStateAction<QuestionType[] | []>>
    intro: boolean
    setIntro: React.Dispatch<React.SetStateAction<boolean>>
    outro: boolean 
    setOutro: React.Dispatch<React.SetStateAction<boolean>>
    research_id: string | string[] | undefined
}

const Question = ({ content, type, index, length, changeOrder }: QuestionProps) => {
    return (
        <div className="h-[50px] w-[full] px-[20px] flex items-center justify-start bg-white border border-paleGrey rounded-sm mb-[10px]">
            <p className="flex-grow">{content}</p>
            { type !== "Intro" && type !== "Outro" ? 
                <>
                    <p className="h-[30px] px-[10px] mr-[20px] border border-paleGrey rounded-sm text-sm flex items-center justify-center">{type}</p>
                    <img className="mx-[10px]" src={index - 1 === 0 ? "/arrow-up-grey.svg" : "/arrow-up-black.svg"} onClick={() => changeOrder(index, -1)} />
                    <img className="mx-[10px]" src={index + 1 > length ? "/arrow-down-grey.svg" : "/arrow-down-black.svg"} onClick={() => changeOrder(index, 1)} />
                </> : null
            }
        </div>
    )
}

const ResearchQuestions = ({ questions, setQuestions, intro, setIntro, outro, setOutro, research_id }: ResearchProps) => {

    const handleOrderChange = async (index: number, change: 1 | -1) => {
        if (index + change > questions.length || index + change <= 0) {
            return;
        }
    
        // Identify the clicked target
        const clickedTarget = questions[index - 1];
    
        // Identify the change target
        const changeTarget = questions[index - 1 + change];
    
        // Swap the question_index values
        const tempIndex = clickedTarget.question_index;
        clickedTarget.question_index = changeTarget.question_index;
        changeTarget.question_index = tempIndex;
    
        // Update the state array with the new order
        const updatedQuestions = [...questions];
        updatedQuestions[index - 1] = changeTarget;
        updatedQuestions[index - 1 + change] = clickedTarget;
    
        // Now you can set the state with the updatedQuestions array
        // For example, if you're using React and managing state with useState:
        // setQuestions(updatedQuestions);

        setQuestions(updatedQuestions)

        const { data, error } = await editQuestionOrder(updatedQuestions[index - 1], updatedQuestions[index - 1 + change])

        if (error) {
            console.log(error)
        } else {
            console.log("Successfully updated question order")
        }
    };


    return (
        <div className="h-auto w-[95%]">
            <h2 className="font-bold mb-[30px]">Survey</h2>

            <Intro intro={intro} setIntro={setIntro} />

            { questions.map((question, index) => {
                return <Question key={question.question_id} content={question.question_title} type={question.question_type} index={question.question_index} length={questions.length} changeOrder={handleOrderChange} />
            })}

            <Outro outro={outro} setOutro={setOutro} />

            <ResearchAddQuestion research_id={research_id} index={questions.length + 1} />

        </div>
    )
}

export default ResearchQuestions