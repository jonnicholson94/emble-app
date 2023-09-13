
import { StandardError } from "@/types/errorTypes"
import { SignInResponse } from "@/types/networkTypes"

export const register = async (first_name: string, last_name: string, email: string, password: string) => {

    const data = {
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password": password
    }

    try {

        const response = await fetch("http://localhost:8080/create-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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

        return { 
            data: json, 
            error: null
        }


    } catch (err) {

        return { data: null, error: err as StandardError }

    }
}

export const signIn = async (email: string, password: string): Promise<SignInResponse> => {

    const data = {
        "email": email,
        "password": password
    }

    try {

        const response = await fetch("http://localhost:8080/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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