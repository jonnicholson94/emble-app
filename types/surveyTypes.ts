import { QuestionTypeOptions } from "./questionTypes"
import { ActiveTypes } from "./researchTypes"

export interface SurveyQuestion {
    id: string 
    title: string 
    type: QuestionTypeOptions
    index: number
}

export interface SurveyAnswer extends SurveyQuestion {
    response: string
}

export interface FetchedSurvey {
    id: string 
    status: ActiveTypes
    prototype_url: string 
    questions: SurveyQuestion[]
}