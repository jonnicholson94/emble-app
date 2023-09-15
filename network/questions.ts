import { QuestionType, QuestionTypeOptions } from "@/types/questionTypes";
import { StandardError } from "@/types/errorTypes";

export const createQuestion = async (question_id: string, question_title: string, question_type: QuestionTypeOptions, question_research_id: string | string[] | undefined, question_index: number) => {

    if (!question_research_id) {
        throw {
            message: "No research ID",
            status: 400
        }
    }

    if (Array.isArray(question_research_id)) {
        question_research_id = question_research_id[0]
    }

    const data = {
        "question_id": question_id,
        "question_title": question_title,
        "question_type": question_type,
        "question_research_id": question_research_id,
        "question_index": question_index
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

    console.log(data)

    if (!research_id) {
        throw {
            message: "No research ID",
            status: 400
        }
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

export const deleteQuestion = async (question_id: string) => {

    const token = localStorage.getItem("token")

    if (!token) {
        throw {
            message: "No token provided",
            status: 400
        }
    }

    if (!question_id) {
        throw {
            message: "No question ID",
            status: 400
        }
    }

    try {

        const queryParam = new URLSearchParams({
            id: question_id
        })

        const response = await fetch(`http://localhost:8080/delete-question?${queryParam}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
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