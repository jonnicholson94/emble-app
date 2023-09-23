
import { useState, useEffect } from "react"
import { useQuery } from "react-query"

import SettingsParentContainer from "@/components/Containers/SettingsParentContainer"
import SettingsHeader from "@/components/Settings/SettingsHeader"
import SettingsInput from "@/components/Settings/SettingsInput"
import SettingsLabel from "@/components/Settings/SettingsLabel"
import PendingButton from "@/components/UI/PendingButton"
import Head from "next/head"
import AlertDialog from "@/components/UI/AlertDialog"
import { getUser, requestReset, updateUser } from "@/network/auth"
import { toast } from "sonner"
import errorHandler from "@/lib/errorHandler"
import { useRouter } from "next/router"

const Settings = () => {

    const router = useRouter()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const [pending, setPending] = useState(false)

    const { data, isLoading } = useQuery("user", getUser)

    const handleSave = async () => {

        setPending(true)

        const { data, error } = await updateUser(firstName, lastName)

        if (error !== null) {
            setPending(false)
            toast.error(error.message)
            errorHandler(error.status)
        } else {
            setPending(false)
            toast.success("Successfully saved your changes")
        }

    }

    const handleReset = async () => {

        const { data, error } = await requestReset(email)

        if (error !== null) {
            toast.error(error.message)
            errorHandler(error.status)
        } else {
            toast.success("We've sent you a password reset")
        }

    }

    const handleLogout = () => {

        localStorage.removeItem("token")

        router.push("/")

    }

    useEffect(() => {
        if (data) {
            console.log(data.data)
            setFirstName(data.data.first_name)
            setLastName(data.data.last_name)
            setEmail(data.data.email)
        }
    }, [data])

    if (isLoading) {
        return <div className="h-screen w-full bg-paleGrey"></div>
    }

    return (

        <>

        <Head>
            <title>Settings | emble</title>
        </Head>

        <SettingsParentContainer>

            <SettingsHeader />

            <div className="h-auto xxs:w-[90%] md:w-[60%] lg:w-[40%] flex items-start justify-center flex-col mt-[30px]">

                <SettingsLabel content="First name" />
                <SettingsInput placeholder="Enter your first name" state={firstName} setState={setFirstName} type="text"  />

                <SettingsLabel content="Last name" />
                <SettingsInput placeholder="Enter your last name" state={lastName} setState={setLastName} type="text" />

                <PendingButton pending={pending} content="Save changes" height="h-[40px]" width="w-full" text="text-sm" marginSide="mx-[0px]" handleClick={() => handleSave()}  />

                <button className="mt-[30px] md:mx-[15px] underline" onClick={() => handleReset()}>Need a password reset?</button>

                <AlertDialog title="Are you sure you want to sign out?" description="You'll have to sign back in to your emble account afterwards." handleDelete={handleLogout}>
                    <button className="h-[40px] w-full md:mx-[15px] bg-delete mt-[50px] text-sm text-white font-bold rounded-sm">Sign out</button>
                </AlertDialog>
                

            </div>

            

        </SettingsParentContainer>

        </>

    )
}

export default Settings