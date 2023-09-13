
import { StandardError } from "@/types/errorTypes"

export const createOption = async (content: string, question_id: string, index: number, research_id: string | string[] | undefined) => {
    
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
        "option_content": content,
        "option_question_id": question_id,
        "option_index": index,
        "option_research_id": research_id
    }

    const token = localStorage.getItem("token")

    if (!token) {
        throw {
            message: "No token provided",
            status: 400
        }
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

export const deleteOption = async (option_id: string) => {

    const token = localStorage.getItem("token")

    if (!token) {
        throw {
            message: "No token provided",
            status: 400
        }
    }

    try {

        const queryParam = new URLSearchParams({
            id: option_id
        })

        const response = await fetch(`http://localhost:8080/delete-option?${queryParam}`, {
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