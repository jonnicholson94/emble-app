
import { StandardError } from "@/types/errorTypes"
import { SavedAnswer, SurveyAnswer } from "@/types/surveyTypes"

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

    const data: SavedAnswer[] = []

    answers.map(answer => {
        console.log(answer)
        const newAnswer = {
            "answer_id": answer.answer_id,
            "answer_answer": answer.answer_answer.toString(),
            "answer_question_id": answer.question_id,
            "answer_question_type": answer.question_type,
            "answer_research_id": answer.answer_research_id
        }

        data.push(newAnswer)
    })

    console.log(data)

    try {

        const response = await fetch(`http://localhost:8080/create-response`, {
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