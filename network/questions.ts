import { QuestionType, QuestionTypeOptions } from "@/types/questionTypes";
import { StandardError } from "@/types/errorTypes";

export const createQuestion = async (title: string, type: QuestionTypeOptions, research_id: string | string[] | undefined, index: number) => {

    if (!research_id) {
        throw {
            message: "No research ID",
            status: 400
        }
    }

    if (Array.isArray(research_id)) {
        research_id = research_id[0]
    }

    const data = {
        "title": title,
        "type": type,
        "research_id": research_id,
        "index": index
    }

    const token = localStorage.getItem("token")

    if (!token) {
        throw {
            message: "No token provided",
            status: 400
        }
    }

    try {

        const response = await fetch("http://localhost:8080/create-question", {
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

        return { data: response, error: null }

    } catch (err) {

        return { data: null, error: err as StandardError }

    }

}

export const updateQuestion = async (column: string, value: string | number, research_id: string | string[] | undefined) => {

    const data = {
        [column]: value
    }

    if (!research_id) {
        return { data: null, error: "No research ID provided" }
    }

    if (Array.isArray(research_id)) {
        research_id = research_id[0]
    }

    const token = localStorage.getItem("token")

    if (!token) {
        throw {
            message: "No token provided",
            status: 400
        }
    }

    try {

        const queryParam = new URLSearchParams({
            id: research_id
        })

        const response = await fetch(`http://localhost:8080/edit-question?${queryParam}`, {
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

        return { data: response, error: null }

    } catch (err) {

        return { data: null, error: err as StandardError }

    }


}

export const editQuestionOrder = async (firstQuestion: QuestionType, secondQuestion: QuestionType) => {

    const data = [
        {
            "question_id": firstQuestion.question_id,
            "question_index": firstQuestion.question_index,
        },
        {
            "question_id": secondQuestion.question_id,
            "question_index": secondQuestion.question_index
        }
    ]

    const token = localStorage.getItem("token")

    if (!token) {
        throw {
            message: "No token provided",
            status: 400
        }
    }

    try {

        const response = await fetch("http://localhost:8080/update-question-order", {
            method: "PUT",
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

        return { data: response, error: null }

    } catch (err) {

        return { data: null, error: err as StandardError }
    }

}