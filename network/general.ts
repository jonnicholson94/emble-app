
import { baseUrl } from "@/lib/env"

import { StandardError } from "@/types/errorTypes"

export const joinBeta = async (email: string) => {

    const data = {
        "email": email
    }

    console.log(process.env.NODE_ENV)

    try {

        const response = await fetch(`${baseUrl}/join-beta`, {
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