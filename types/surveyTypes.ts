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
    answer_id: string 
    answer_research_id: string
    answer_answer: string[]
}

export interface SavedAnswer {
    answer_id: string 
    answer_answer: string 
    answer_question_id: string
    answer_question_type: QuestionTypeOptions
    answer_research_id: string
}

export interface FetchedSurvey {
    survey_id: string 
    survey_status: ActiveTypes
    survey_prototype_url: string 
    survey_questions: SurveyQuestion[]
}