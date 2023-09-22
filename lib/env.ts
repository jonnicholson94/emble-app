
const environment = process.env.NODE_ENV

export let baseUrl = ""

if (environment === "development") {
    baseUrl = "http://localhost:8080"
} else {
    baseUrl = ""
}