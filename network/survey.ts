
import { StandardError } from "@/types/errorTypes"
import { SurveyAnswer } from "@/types/surveyTypes"

export const fetchSurveyDetails = async (research_id: string | string[] | undefined) => {

    if (!research_id) {
        throw {
            message: "No research ID",
            status: 400
        }
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

export const saveSurvey = async (answers: SurveyAnswer[]) => {

    console.log(answers)

    return { data: null, error: null }

}