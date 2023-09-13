
import Router from "next/router"

const errorHandler = (status: number | undefined) => {

    if (status == undefined) {
        return
    }

    if (status === 401) {
        console.log("Running...")
        localStorage.removeItem("token")
        Router.push("/auth/sign-in")
    } else if (status == 400) {
        
    }
}

export default errorHandler