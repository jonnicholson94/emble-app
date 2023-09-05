
export const addComment = async (content: string, research_id: string | string[] | undefined, timestamp: number) => {

    if (!research_id) {
        return { data: null, error: "No research ID provided" }
    }

    if (Array.isArray(research_id)) {
        research_id = research_id[0]
    }

    const data = {
        "content": content,
        "research_id": research_id,
        "timestamp": timestamp,
    }

    const token = localStorage.getItem("token")

    if (!token) {
        return { data: null, error: "No token provided" }
    }

    try {

        const response = await fetch("http://localhost:8080/create-comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data)
        })

        return { data: response, error: null }

    } catch (error) {

        console.log(error)

        return { data: null, error: error }
        
    }

}

export const editComment = async (content: string, comment_id: string) => {
    const data = {
        "content": content
    }

    const token = localStorage.getItem("token")

    if (!token) {
        return { data: null, error: "No token provided" }
    }

    try {

        const queryParam = new URLSearchParams({
            id: comment_id
        })

        const response = await fetch(`http://localhost:8080/edit-comment?${queryParam}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data)
        })

        return { data: response, error: null }
    } catch (error) {
        console.log(error)
        return { data: null, error: error }
    }
}