
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="h-auto w-full flex items-center justify-center bg-offWhite">
            <div className="h-auto flex-grow flex items-center justify-start ml-[30px] my-[15px]">
                <Link className="text-xl font-bold" href="/">emble</Link>
            </div>
            <div className="h-auto flex-grow flex items-center justify-center">
                <Link className="px-[10px] mx-[5px]" href="/">Blog</Link>
                <Link className="px-[10px] mx-[5px]" href="/use-cases">Use cases</Link>
                <Link className="px-[10px] mx-[5px]" href="/changelog">Changelog</Link>
                <Link className="px-[10px] mx-[5px]" href="/pricing">Pricing</Link>
            </div>
            <div className="h-auto flex-grow flex items-center justify-end mr-[30px] my-[15px]">
                <Link className="h-[35px] px-[15px] bg-black text-white font-bold rounded-sm flex items-center justify-center" href="/auth/sign-in">Sign in</Link>
            </div>
        </nav>
    )
}

export default Navbar