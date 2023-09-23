
type Props = {
    content: string
}

const SettingsLabel = ({ content }: Props) => {
    return (
        <label className="mt-[20px] text-sm text-border md:mx-[15px]">{content}</label>
    )
}

export default SettingsLabel