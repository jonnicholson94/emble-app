
export interface ResearchType {
    id: string
    title: string 
    description: string 
    limit: string 
    status: ActiveTypes
    prototype_url: string 
    user_id: number
}

export type ActiveTypes = "Backlog" | "Active" | "Completed"