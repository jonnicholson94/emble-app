
export const fetchSingleResearch = async (research_id: string | string[] | undefined) => {

    if (!research_id) {
        return { data: null, error: "No research ID provided" }
    }

    if (Array.isArray(research_id)) {
        research_id = research_id[0]
    }

    const token = localStorage.getItem("token")

    if (!token) {
        throw new Error("No token provided")
        return { data: null, error: "No token provided" }
    }

    try {

        const queryParam = new URLSearchParams({
            id: research_id
        })

        const response = await fetch(`http://localhost:8080/single-research?${queryParam}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })

        const json = await response.json()

        console.log(json)

        return { data: json, error: null }

    } catch (error) {

        return { data: null, error: error }

    }
}

export const fetchResearch = async () => {

    const token = localStorage.getItem("token")

    if (!token) {
        return { data: null, error: "No token provided" }
    }

    try {

        const response = await fetch("http://localhost:8080/research", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })

        const json = await response.json()

        return { data: json, error: null }

    } catch (error) {

        return { data: null, error: error }

    }

}

export const createResearch = async (title: string, description: string, status: string, limit: number, prototype_url: string) => {

    const data = {
        "title": title,
        "description": description,
        "status": status,
        "limit": limit,
        "prototype_url": prototype_url
    }

    const token = localStorage.getItem("token")

    if (!token) {
        return { data: null, error: "No token provided" }
    }

    try {

        const response = await fetch("http://localhost:8080/create-research", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data)
        })

        return { data: response, error: null }

    } catch (err) {

        return { data: null, error: err }

    }

}

export const editResearch = async (column: string, value: string | number, research_id: string | string[] | undefined) => {

    const data = {
        [column]: value
    }

    if (!research_id) {
        return { data: null, error: "No research ID provided" }
    }

    if (Array.isArray(research_id)) {
        research_id = research_id[0]
    }

    const token = localStorage.getItem("token")

    if (!token) {
        return { data: null, error: "No token provided" }
    }

    try {

        const queryParam = new URLSearchParams({
            id: research_id
        })

        const response = await fetch(`http://localhost:8080/edit-item?${queryParam}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data)
        })

        return { data: response, error: null }

    } catch (err) {

        return { data: null, error: err }

    }
}

export const deleteResearch = async (research_id: string | string[] | undefined) => {

    if (!research_id) {
        return { data: null, error: "No research ID provided" }
    }

    if (Array.isArray(research_id)) {
        research_id = research_id[0]
    }

    const token = localStorage.getItem("token")

    if (!token) {
        return { data: null, error: "No token provided" }
    }

    try {

        const queryParam = new URLSearchParams({
            id: research_id
        })

        const response = await fetch(`http://localhost:8080/delete-research?${queryParam}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })

        return { data: response, error: null }

    } catch (error) {
        return { data: null, error: error }
    }

}