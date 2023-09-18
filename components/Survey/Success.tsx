
import { useState } from "react"

import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion"

import EmbleLink from "./EmbleLink"

const largeProps: ConfettiProps = {
    force: 0.8,
    duration: 3000,
    particleCount: 300,
    width: 1600,
    colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
  };

const Success = () => {

    const [isExploding, setIsExploding] = useState(true)

    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col">
            { isExploding && <ConfettiExplosion { ...largeProps } /> }
            <img className="h-[40px] w-[40px]" src="/success-check.svg" alt="A success check" />
            <h1 className="text-2xl font-bold my-[30px]">Your response has been submitted</h1>
            <EmbleLink />
        </div>
    )
}

export default Success