import { QuestionTypeOptions } from "./questionTypes"

export interface ResponseQuestion {
    question_id: string 
    question_responses: Response[] | []
    question_title: string
    question_type: QuestionTypeOptions
}

export interface Response {
    response_answer: string 
    response_question_id: string
}