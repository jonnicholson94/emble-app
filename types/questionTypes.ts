
export interface QuestionType {
    question_id: string 
    question_title: string 
    question_type: QuestionTypeOptions
    question_research_id: string
    question_index: number
}

export type QuestionTypeOptions = "Intro" | "Outro" | "Single select" | "Multi select" | "Short text" | "Long text" | "Rating" | "Scale"