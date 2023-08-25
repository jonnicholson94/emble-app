
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

        return { 
            json, 
            error: null 
        }


    } catch (err) {

        return {
            json: null,
            error: err
        }

    }
}

export const signIn = async (email: string, password: string) => {

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

        return { data: json, error: null }
    } catch (err) {
        return { data: null, error: err }
    }
    
}