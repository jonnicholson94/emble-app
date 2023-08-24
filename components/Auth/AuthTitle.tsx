
type Props = {
    content: string
}

const AuthTitle = ({ content }: Props) => {
    return (
        <h2 className="text-2xl mb-[30px]">{content}</h2>
    )
}

export default AuthTitle