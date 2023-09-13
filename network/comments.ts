
import { StandardError } from "@/types/errorTypes"

export const addComment = async (content: string, research_id: string | string[] | undefined, timestamp: number) => {

    if (!research_id) {
        throw {
            message: "No research ID",
            status: 400
        }
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
        throw {
            message: "No token provided",
            status: 400
        }
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

        const json = await response.json()

        if (!response.ok) {

            throw {
                message: json.message,
                status: json.status 
            };
        }

        return { data: response, error: null }

    } catch (err) {

        return { data: null, error: err as StandardError }
        
    }

}

export const editComment = async (content: string, comment_id: string) => {
    const data = {
        "content": content
    }

    const token = localStorage.getItem("token")

    if (!token) {
        throw {
            message: "No token provided",
            status: 400
        }
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

        const json = await response.json()

        if (!response.ok) {

            throw {
                message: json.message,
                status: json.status 
            };
        }

        return { data: response, error: null }
    } catch (err) {

        return { data: null, error: err as StandardError }
    }
}

export const deleteComment = async (comment_id: string) => {
    const token = localStorage.getItem("token")

    if (!token) {
        throw {
            message: "No token provided",
            status: 400
        }
    }

    try {

        const queryParam = new URLSearchParams({
            id: comment_id
        })

        const response = await fetch(`http://localhost:8080/delete-comment?${queryParam}`, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
        })

        const json = await response.json()

        if (!response.ok) {

            throw {
                message: json.message,
                status: json.status 
            };
        }

        return { data: json, error: null }
    } catch (err) {
        return { data: null, error: err as StandardError }
    }
}