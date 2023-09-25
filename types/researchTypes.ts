
export interface ResearchType {
    research_id: string
    research_title: string 
    research_description: string 
    research_limit: string 
    research_status: ActiveTypes
    research_prototype_url: string 
    research_user_id: number
    research_intro: boolean 
    research_intro_title: string 
    research_intro_description: string
    research_type: ResearchOptions
}

export type ActiveTypes = "Backlog" | "Active" | "Completed"
export type ResearchOptions = "Prototype" | "Survey"