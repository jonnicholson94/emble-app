
import { useRef } from "react"
import Head from "next/head"

import EmbleLink from "./EmbleLink"

type Props = {
    setIntro: React.Dispatch<React.SetStateAction<boolean>>
    introTitle: string 
    introDescription: string
}

const SurveyIntro = ({ setIntro, introTitle, introDescription }: Props) => {

    const introRef = useRef(null)

    const handleKeyDown = (e: React.KeyboardEvent) => {

        if (e.key === "Enter") {
            setIntro(false)
        }

    }

    return (
        <>
        <Head>
            <title>{introTitle} | emble</title>
        </Head>
        <div className="h-screen w-screen flex items-center justify-center flex-col" onKeyDown={(e) => handleKeyDown(e)} tabIndex={-1} ref={introRef}>
            
            <h1 className="text-2xl font-bold">{introTitle}</h1>
            <p className="my-[15px]">{introDescription}</p>
            <button className="h-[40px] px-[20px] bg-black text-white font-bold rounded-sm mt-[30px]" onClick={() => setIntro(false)}>Get started</button>
            <p className="h-auto flex items-center justify-end text-xs rounded-md mt-[10px]">
                <img className="h-[10px] w-[10px] mr-[5px]" src="/enter.svg" alt="An icon to indicate enter can be pressed" />
                Or hit enter
            </p>

            <EmbleLink />

        </div>
        </>
    )
}

export default SurveyIntro