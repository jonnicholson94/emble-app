import { StandardError } from "./errorTypes"

export interface SignInResponse {
    data: string | null
    error: StandardError | null
}