
export const createResearch = async (title: string, description: string, status: string, limit: number, prototype_url: string) => {

    const data = {
        "title": title,
        "description": description,
        "status": status,
        "limit": limit,
        "prototype_url": prototype_url
    }

    const token = localStorage.getItem("token")

    if (!token) {
        return { data: null, error: "No token provided" }
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

        return { data: json, error: null }

    } catch (err) {

        return { data: null, error: err }

    }

}