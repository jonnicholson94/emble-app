
import { StandardError } from "@/types/errorTypes"
import { baseUrl } from "@/lib/env"

export const fetchResponses = async (research_id: string | string[] | undefined) => {

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

        const response = await fetch(`${baseUrl}/responses?${queryParam}`, {
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