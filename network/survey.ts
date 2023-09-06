
export const fetchSurveyDetails = async (research_id: string | string[] | undefined) => {

    if (!research_id) {
        return { data: null, error: "No research ID provided" }
    }

    if (Array.isArray(research_id)) {
        research_id = research_id[0]
    }

    try {

        const queryParam = new URLSearchParams({
            id: research_id
        })

        const response = await fetch(`http://localhost:8080/survey?${queryParam}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json()

        console.log(json)

        return { data: json, error: null }

    } catch (error) {

        return { data: null, error: error }

    }

}