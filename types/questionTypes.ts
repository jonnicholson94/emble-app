
export interface QuestionType {
    question_id: string 
    question_title: string 
    question_type: QuestionTypeOptions
    question_research_id: string
    question_index: number
    question_options: QuestionOption[] | null
}

export interface QuestionOption {
    option_content: string 
    option_id: string 
    option_index: number 
    option_question_id: string 
    option_research_id: string
}

export interface NewQuestionType {
    title: string 
    type: QuestionTypeOptions 
    index: number
}

export type QuestionTypeOptions = "Intro" | "Outro" | "Single select" | "Multi select" | "Short text" | "Long text" | "Rating" | "Scale"