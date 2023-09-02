import { QuestionType, QuestionTypeOptions } from "@/types/questionTypes"
import ResearchAddQuestion from "./ResearchAddQuestion"
import Intro from "../QuestionTypes/Intro"
import Outro from "../QuestionTypes/Outro"
import { editQuestionOrder } from "@/network/questions"
import ShortText from "../QuestionTypes/ShortText"
import LongText from "../QuestionTypes/LongText"
import SingleSelect from "../QuestionTypes/SingleSelect"
import Rating from "../QuestionTypes/Rating"
import MultiSelect from "../QuestionTypes/MultiSelect"
import Scale from "../QuestionTypes/Scale"

type ResearchProps = {
    questions: QuestionType[]
    setQuestions: React.Dispatch<React.SetStateAction<QuestionType[] | []>>
    intro: boolean
    setIntro: React.Dispatch<React.SetStateAction<boolean>>
    outro: boolean 
    setOutro: React.Dispatch<React.SetStateAction<boolean>>
    research_id: string | string[] | undefined
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

            { questions.map((question) => {

                switch (question.question_type) {
                    case "Short text":
                        return <ShortText content={question.question_title} type={question.question_type} index={question.question_index} length={questions.length} changeOrder={handleOrderChange} id={question.question_id} />
                    case "Long text":
                        return <LongText content={question.question_title} type={question.question_type} index={question.question_index} length={questions.length} changeOrder={handleOrderChange} id={question.question_id} />
                    case "Single select":
                        return <SingleSelect content={question.question_title} type={question.question_type} index={question.question_index} length={questions.length} changeOrder={handleOrderChange} id={question.question_id} />
                    case "Multi select":
                        return <MultiSelect content={question.question_title} type={question.question_type} index={question.question_index} length={questions.length} changeOrder={handleOrderChange} id={question.question_id} />
                    case "Rating":
                        return <Rating content={question.question_title} type={question.question_type} index={question.question_index} length={questions.length} changeOrder={handleOrderChange} id={question.question_id} />
                    case "Scale":
                        return <Scale content={question.question_title} type={question.question_type} index={question.question_index} length={questions.length} changeOrder={handleOrderChange} id={question.question_id} />
                }

            })}

            <Outro outro={outro} setOutro={setOutro} />

            <ResearchAddQuestion research_id={research_id} index={questions.length + 1} />

        </div>
    )
}

export default ResearchQuestions