
import { baseUrl } from "@/lib/env"

import { StandardError } from "@/types/errorTypes"

export const exchangeToken = async (authuser: string | string[] | undefined, code: string | string[] | undefined, prompt: string | string[] | undefined, scope: string | string[] | undefined) => {

    if (!authuser || !code || !prompt || !scope) {
        throw {
            message: "Missing details",
            status: 400
        }
    }

    const data = {
        "authuser": authuser,
        "code": code,
        "prompt": prompt,
        "scope": scope
    }

    try {

        const response = await fetch(`${baseUrl}/exchange-code`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()

        console.log(json)

        if (!response.ok) {
            throw {
                message: json.message,
                status: json.status 
            }
        }

        return { data: json, error: null }
        
    } catch (err) {

        return { data: null, error: err as StandardError }

    }

}