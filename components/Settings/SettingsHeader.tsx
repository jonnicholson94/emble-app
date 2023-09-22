
import Link from "next/link"

const SettingsHeader = () => {
    return (
        <header className="h-[60px] w-full flex items-center justify-center bg-white border-b border-paleGrey">
                <Link href="/dashboard">
                    <img className="mx-[15px]" src="/close.svg" alt="A close icon to indicate going back" />
                </Link>
                <p className="flex-grow font-bold">Settings</p>
            </header>
    )
}

export default SettingsHeader