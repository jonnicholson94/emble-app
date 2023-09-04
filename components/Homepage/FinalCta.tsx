import Link from "next/link"

const FinalCta = () => {
    return (
        <section className="h-auto w-full bg-black flex items-center justify-center flex-col">
            <h2 className="h-auto w-[40%] text-white text-center mt-[150px] text-4xl font-bold">Sound good?</h2>
            <p className="h-auto w-[40%] text-white text-center mt-[30px] text-2xl">Get user feedback and take your product to the next level. In minutes, not weeks.</p>
            <Link className="h-[45px] w-[250px] bg-pinkCta flex items-center justify-center font-bold text-white rounded-sm mt-[30px] mb-[150px]" href="/auth/sign-in">Get started</Link>
        </section>
    )
}

export default FinalCta