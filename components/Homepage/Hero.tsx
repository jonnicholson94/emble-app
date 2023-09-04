import Link from "next/link"

const Hero = () => {
    return (
        <section className="h-auto w-full flex items-center justify-center flex-col bg-offWhite">
            <h1 className="h-auto text-4xl font-bold mt-[100px]">Get user feedback on <strong>anything</strong></h1>
            <p className="h-auto w-[50%] text-center mt-[30px] mb-[50px] text-xl">Send prototypes to your users in beautiful forms. Get high-quality responses in minutes from users you trust.</p>
            <Link className="h-[45px] w-[200px] bg-black text-white flex items-center justify-center font-bold text-lg rounded-sm mb-[50px]" href="/auth/sign-in">Get started</Link>
            <img src="/homepage/hero.svg" />
            <img className="absolute top-[50%] right-[10%]" src="/homepage/Cursor-3.svg" />
            <img className="absolute top-[30%] left-[8%]" src="/homepage/Cursor-1.svg" />
            <img className="absolute top-[80%] left-[5%]" src="/homepage/Cursor-2.svg" />
        </section>
    )
}

export default Hero