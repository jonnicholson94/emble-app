import Link from "next/link"

const Hero = () => {
    return (
        <section className="h-auto xxs:w-[90%] md:w-[60%] flex items-center justify-center flex-col">
            <h1 className="h-auto text-4xl text-center font-bold mt-[100px]">Get user feedback on <strong>anything</strong></h1>
            <p className="h-auto xxs:w-[100%] md:w-[80%] text-center mt-[30px] mb-[50px] text-xl">Send prototypes to your users in beautiful forms. Get high-quality responses in minutes from users you trust.</p>
            <Link className="h-[45px] w-[200px] bg-black text-white flex items-center justify-center font-bold text-lg rounded-sm mb-[50px]" href="/auth/sign-in">Get started</Link>
            <img className="rounded-sm w-[100%]" src="/homepage/hero.svg" />
        </section>
    )
}

export default Hero