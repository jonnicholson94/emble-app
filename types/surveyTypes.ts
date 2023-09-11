import { QuestionOption, QuestionTypeOptions } from "./questionTypes"
import { ActiveTypes } from "./researchTypes"

export interface SurveyQuestion {
    question_id: string 
    question_title: string 
    question_type: QuestionTypeOptions
    question_index: number
    question_options: QuestionOption[] | null
}

export interface SurveyAnswer extends SurveyQuestion {
    question_answer: string
}

export interface FetchedSurvey {
    survey_id: string 
    survey_status: ActiveTypes
    survey_prototype_url: string 
    survey_questions: SurveyQuestion[]
}