import { QuestionType, QuestionTypeOptions } from "@/types/questionTypes"
import { toast } from "sonner"
import ResearchAddQuestion from "./ResearchAddQuestion"
import Intro from "../Questions/Intro"
import Outro from "../Questions/Outro"
import { deleteQuestion, editQuestionOrder } from "@/network/questions"
import errorHandler from "@/lib/errorHandler"
import GlobalQuestion from "../Questions/GlobalQuestion"

type ResearchProps = {
    research_id: string | string[] | undefined
    questions: QuestionType[] | []
    intro: boolean
    setIntro: React.Dispatch<React.SetStateAction<boolean>>
    outro: boolean 
    setOutro: React.Dispatch<React.SetStateAction<boolean>>
    handleOrderChange: (index: number, change: 1 | -1) => void 
    handleCreateQuestion: (question: QuestionType) => Promise<void> | void
    handleQuestionDelete: (question_id: string) => void 
    handleQuestionTitleUpdate: (question_id: string, new_title: string) => void 
    handleQuestionTypeUpdate: (question_id: string, new_type: QuestionTypeOptions) => void 
    handleAddOption: (question_id: string, new_option: string) => void 
    handleUpdateOption: (question_id: string, option_id: string, new_content: string) => void
    handleDeleteOption: (question_id: string, option_id: string) => void 
}

const ResearchQuestions = ({ research_id, questions, intro, setIntro, outro, setOutro, handleOrderChange, handleCreateQuestion, handleQuestionDelete, handleQuestionTitleUpdate, handleQuestionTypeUpdate, handleAddOption, handleUpdateOption, handleDeleteOption }: ResearchProps) => {

    return (
        <div className="h-auto w-[95%]">
            <h2 className="font-bold mb-[30px]">Survey</h2>

            <Intro intro={intro} setIntro={setIntro} />

            { questions?.map((question) => {
                return <GlobalQuestion key={question.question_id} question_id={question.question_id} content={question.question_title} type={question.question_type} index={question.question_index} options={question.question_options} handleQuestionTitleUpdate={handleQuestionTitleUpdate} handleQuestionTypeUpdate={handleQuestionTypeUpdate} handleDelete={() => handleQuestionDelete(question.question_id)} changeOrder={() => handleOrderChange(question.question_index, 1)} handleAddOption={handleAddOption} handleUpdateOption={handleUpdateOption} handleDeleteOption={handleDeleteOption} />
            })}

            <Outro outro={outro} setOutro={setOutro} />

            <ResearchAddQuestion research_id={research_id} index={questions.length + 1} handleCreateQuestion={handleCreateQuestion} />

        </div>
    )
}

export default ResearchQuestions