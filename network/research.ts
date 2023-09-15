import { QuestionType } from "@/types/questionTypes"
import { StandardError } from "@/types/errorTypes"

export const fetchSingleResearch = async (research_id: string | string[] | undefined) => {

    if (!research_id) {
        throw {
            message: "No research ID",
            status: 400
        }
    }

    if (Array.isArray(research_id)) {
        research_id = research_id[0]
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

export const fetchResearch = async () => {

    const token = localStorage.getItem("token")

    if (!token) {
        throw {
            message: "No token provided",
            status: 400
        }
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

export const createResearch = async (research_id: string, title: string, description: string, status: string, limit: number, prototype_url: string, questions: QuestionType[] | []) => {

    const data = {
        "research_id": research_id,
        "research_title": title,
        "research_description": description,
        "research_status": status,
        "research_limit": limit,
        "research_prototype_url": prototype_url,
        "research_questions": questions
    }

    const token = localStorage.getItem("token")

    if (!token) {
        throw {
            message: "No token provided",
            status: 400
        }
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
        throw {
            message: "No token provided",
            status: 400
        }
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

        const json = await response.json()

        if (!response.ok) {

            throw {
                message: json.message,
                status: json.status 
            };
        }

    } catch (err) {

        return { data: null, error: err as StandardError }

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
        throw {
            message: "No token provided",
            status: 400
        }
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

        const json = await response.json()

        if (!response.ok) {

            throw {
                message: json.message,
                status: json.status 
            };
        }

    } catch (err) {

        return { data: null, error: err as StandardError }
    }

}