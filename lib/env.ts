
const environment = process.env.NODE_ENV

export let baseUrl = ""

if (environment === "development") {
    baseUrl = "http://localhost:8080"
} else {
    baseUrl = "https://emble-server-4b4c12a42480.herokuapp.com"
}