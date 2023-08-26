
export interface ResearchType {
    id: string
    title: string 
    description: string 
    limit: string 
    status: "Backlog" | "Active" | "Completed" 
    prototype_url: string 
    user_id: number
}