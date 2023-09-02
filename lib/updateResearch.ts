
import { QuestionType } from "@/types/questionTypes";

export const handleOrderChange = async (questions: QuestionType[], setQuestions: React.Dispatch<React.SetStateAction<QuestionType>>, index: number, change: 1 | -1) => {
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