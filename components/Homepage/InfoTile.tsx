
type Props = {
    icon: "/in-progress.svg" | "/notification-message.svg" | "/person-icon.svg"
    heading: string 
    content: string
}

const InfoTile = ({ icon, heading, content }: Props) => {
    return (
        <div className="h-auto xxs:w-[100%] md:w-[450px] bg-background border border-border rounded-sm mx-[20px] my-[20px] p-[20px] hover:shadow">
            <img className="h-[30px] w-[30px] my-[15px]" src={`/homepage/${icon}`} />
            <h4 className="h-auto w-full mb-[10px] text-white opacity-80 text-xl font-bold">{heading}</h4>
            <p className="h-auto w-full mb-[15px] text-white opacity-80">{content}</p>
        </div>
    )
}

export default InfoTile