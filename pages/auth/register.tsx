
import { useState } from "react";
import Router from "next/router";

import { register } from "@/network/auth";

import AuthContainer from "@/components/Auth/AuthContainer";
import AuthLogo from "@/components/Auth/AuthLogo";
import AuthTitle from "@/components/Auth/AuthTitle";
import AuthInput from "@/components/Auth/AuthInput";
import AuthPolicy from "@/components/Auth/AuthPolicy";
import AuthButton from "@/components/Auth/AuthButton";
import AuthLink from "@/components/Auth/AuthLink";


const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async () => {

        const { json, error } = await register("Jon", "Nicholson", email, password)

        if (error != null) {
            console.log(error)
        } else {
            localStorage.setItem("token", json)
            Router.push("/dashboard")
        }

    }

    return (
        <AuthContainer>
            <AuthLogo />
            <AuthTitle content="Register for an account" />
            <AuthInput placeholder="Enter your email address" value={email} setValue={setEmail} type="email" />
            <AuthInput placeholder="Enter a password" value={password} setValue={setPassword} type="password" />
            <AuthPolicy />
            <AuthButton text="Register" handleClick={handleRegister} />
            <AuthLink text="Already got an account?" href="/auth/sign-in" />
        </AuthContainer>
    )
}

export default Register