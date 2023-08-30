import { QuestionType, QuestionTypeOptions } from "@/types/questionTypes";

export const createQuestion = async (title: string, type: QuestionTypeOptions, research_id: string | string[] | undefined, index: number) => {

    if (!research_id) {
        return { data: null, error: "No research ID provided" }
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
        return { data: null, error: "No token provided" }
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

        return { data: json, error: null }

    } catch (err) {

        return { data: null, error: err }

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
        return { data: null, error: "No token provided" }
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

        return { data: json, error: null }

    } catch (error) {

        return { data: null, error: error }
    }

}