
import Link from "next/link"

import { uiUrl } from "@/lib/env"

const GoogleAuth = () => {

    const baseUrl = "https://accounts.google.com/o/oauth2/auth?"
    const client = `client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&`
    const redirect = `redirect_uri=${uiUrl}/auth/callback&`
    const response_type = "response_type=code&"
    const access_type = "access_type=offline&"
    const scope = "scope=email+profile"
    const url = baseUrl + client + redirect + response_type + access_type + scope

    return (
        <Link className="border bg-white flex items-center justify-center border-border h-[50px] w-full rounded-sm px-[15px] placeholder:text-border my-[10px]" href={url}>
            <img className="h-[25px] w-[25px] mr-[20px]" src="/google-logo.svg" />
            <p className="">Continue with Google</p>
        </Link>
    )
}

export default GoogleAuth