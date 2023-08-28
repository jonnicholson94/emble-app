
export interface QuestionType {
    id: number 
    title: string 
    type: QuestionTypeOptions
    
}

export type QuestionTypeOptions = "Intro" | "Outro" | "Single select" | "Multi select" | "Short text" | "Long text" | "Rating" | "Scale"