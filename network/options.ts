
export const createOption = async (content: string, question_id: string, index: number, research_id: string | string[] | undefined) => {
    
    if (!research_id) {
        return { data: null, error: "No research ID provided" }
    }

    if (Array.isArray(research_id)) {
        research_id = research_id[0]
    }

    const data = {
        "content": content,
        "question_id": question_id,
        "index": index,
        "research_id": research_id
    }

    const token = localStorage.getItem("token")

    if (!token) {
        return { data: null, error: "No token provided" }
    }

    try {

        const response = await fetch("http://localhost:8080/create-option", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data)
        })

        return { data: response, error: null }

    } catch (error) {

        throw error

    }

}