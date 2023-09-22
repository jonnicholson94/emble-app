
import { baseUrl } from "@/lib/env"

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

        const response = await fetch(`${baseUrl}/create-user`, {
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

        const response = await fetch(`${baseUrl}/sign-in`, {
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

export const requestReset = async (email: string) => {

    const data = {
        "email": email
    }

    try {

        const response = await fetch(`${baseUrl}/password-reset`, {
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
            }
        }

        return { data: json, error: null }
        
    } catch (err) {

        return { data: null, error: err as StandardError }

    }

}

export const updatePassword = async (password: string, id: string | string[] | undefined) => {

    if (!id) {
        throw {
            message: "No research ID",
            status: 400
        }
    }

    if (Array.isArray(id)) {
        id = id[0]
    }

    const data = {
        "password": password,
        "id": id
    }

    try {
        const response = await fetch(`${baseUrl}/update-password`, {
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
            }
        }

        return { data: json, error: null }

    } catch (err) {

        return { data: null, error: err as StandardError }

    }

}

export const getUser = async () => {

    const token = localStorage.getItem("token")

    if (!token) {
        throw {
            message: "No token provided",
            status: 400
        }
    }

    try {

        const response = await fetch(`${baseUrl}/get-user`, {
            method: "GET",
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

export const updateUser = async (first_name: string, last_name: string) => {

    const token = localStorage.getItem("token")

    if (!token) {
        throw {
            message: "No token provided",
            status: 400
        }
    }

    const data = {
        "first_name": first_name,
        "last_name": last_name
    }

    try {

        const response = await fetch(`${baseUrl}/update-user`, {
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