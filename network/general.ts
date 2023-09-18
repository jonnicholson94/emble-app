
import { StandardError } from "@/types/errorTypes"

export const joinBeta = async (email: string) => {

    const data = {
        "email": email
    }

    try {

        const response = await fetch("http://localhost:8080/join-beta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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