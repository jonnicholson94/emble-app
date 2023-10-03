
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="h-auto w-[100%] flex items-center justify-center">
            <div className="h-auto flex-grow flex items-center justify-start ml-[30px] my-[15px]">
                <Link className="text-xl font-bold text-text" href="/">emble</Link>
            </div>
            <div className="h-auto flex-grow xxs:hidden md:flex items-center justify-center">
                {/* <Link className="px-[10px] mx-[20px] text-text opacity-70" href="/">Blog</Link>
                <Link className="px-[10px] mx-[20px] text-text opacity-70" href="/use-cases">Use cases</Link>
                <Link className="px-[10px] mx-[20px] text-text opacity-70" href="/changelog">Changelog</Link>
                <Link className="px-[10px] mx-[20px] text-text opacity-70" href="/pricing">Pricing</Link> */}
            </div>
            <div className="h-auto flex-grow flex items-center justify-end mr-[30px] my-[15px]">
                <Link className="h-[35px] px-[15px] bg-cta text-ctaText font-bold rounded-sm flex items-center justify-center font-bold" href="/auth/sign-in">Sign in</Link>
            </div>
        </nav>
    )
}

export default Navbar