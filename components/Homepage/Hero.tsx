import BetaList from "./BetaList"



const Hero = () => {

    return (
        <section className="h-auto w-[90%] flex items-center justify-center flex-col">
            
            <h1 className="h-auto xxs:text-6xl sm:text-7xl md:text-8xl text-center font-bold xxs:mt-[50px] md:mt-[100px] hero-gradient animate-pulse fade-in">Your new favourite user research platform.</h1>
            
            <p className="h-auto xxs:w-[90%] md:w-[70%] text-center mt-[30px] mb-[50px] xxs:text-md sm:text-lg md:text-2xl text-white fade-in-slow">Set up tests, and get instant feedback from your users. Run prototype tests, send surveys and more. All in one platform.</p>

            <BetaList />

            {/* <Link className="h-[50px] w-[300px] bg-black text-white font-bold flex items-center justify-center rounded-md text-lg mb-[50px]" href="/auth/register">Get started</Link> */}

            {/* <Link className="h-[45px] w-[200px] bg-black text-white flex items-center justify-center font-bold text-lg rounded-sm mb-[50px]" href="/auth/sign-in">Get started</Link> */}
            {/* <iframe className="xxs:h-[500px] md:h-[800px] rounded-md border border-paleGrey shadow w-[100%]" src="https://www.loom.com/embed/89dcd27c66064f479917b71494bf55a5?sid=9a717cdf-9946-4aa5-b099-c9905a816d6d" allowFullScreen></iframe> */}
            {/* <img className="rounded-sm w-[100%]" src="/homepage/hero.svg" alt="The main hero image on the homepage" /> */}
        </section>
    )
}

export default Hero