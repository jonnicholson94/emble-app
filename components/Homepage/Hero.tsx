import BetaList from "./BetaList"



const Hero = () => {

    return (
        <section className="h-auto w-[90%] flex items-center justify-center flex-col">
            
            <h1 className="h-auto xxs:text-6xl sm:text-7xl md:text-8xl text-center font-bold xxs:mt-[50px] md:mt-[100px] text-text fade-in">Your new favourite user research platform.</h1>
            
            <p className="h-auto xxs:w-[90%] md:w-[70%] text-center mt-[30px] mb-[50px] xxs:text-md sm:text-lg md:text-2xl text-text fade-in-slow">Set up tests, and get instant feedback from your users. Run prototype tests, send surveys and more. All in one platform.</p>

            <BetaList />

            {/* <Link className="h-[50px] w-[300px] bg-black text-white font-bold flex items-center justify-center rounded-md text-lg mb-[50px]" href="/auth/register">Get started</Link> */}

        </section>
    )
}

export default Hero