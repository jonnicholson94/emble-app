
import { ReactNode } from "react"

type Props = {
    tagline: string
    heading: string
    children: ReactNode
}

const InfoSection = ({ tagline, heading, children }: Props) => {

    return (
        <section className={`h-auto xxs:w-[100%] md:w-[90%] flex items-center justify-center flex-col xxs:my-[25px] md:my-[75px]`}>
            <p className="text-link uppercase font-bold text-lg my-[20px]">{tagline}</p>
            <h2 className="h-auto xxs:w-[90%] lg:w-[900px] font-bold xxs:text-5xl sm:text-6xl md:text-7xl  text-center">{heading}</h2>
            <div className="h-auto w-[full] my-[50px] flex flex-wrap items-center justify-center">
                { children }
            </div>
        </section>
    )
}

export default InfoSection