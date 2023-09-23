import Link from "next/link"

type Props = {
    title: string
    id: string | string[] | undefined
}

const ResponsesHeader = ({ title, id }: Props) => {
    return (
        <header className="h-[50px] w-full bg-white border-b border-paleGrey flex items-center justify-start px-[20px]">
            <Link className="mr-[20px] xxs:hidden md:flex" href={`/research/${id}`}>
                <img className="h-[15px] w-[15px]" src="/close.svg" alt="A close button to return to previous screen" />
            </Link>
            <Link className="text-sm text-light text-border truncate" href={`/research/${id}`}>{title}</Link>
            <img className="h-[12.5px] w-[12.5px] mx-[5px]" src="/slash-divider.svg" alt="A visual divider between the research title and responses" />
            <p className="text-sm text-border">Responses</p>
        </header>
    )
}

export default ResponsesHeader