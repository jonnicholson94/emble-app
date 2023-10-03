
type Props = {
    image: string 
    width: "flex-grow" | "w-[60%]" | "w-[50%]" | "w-[40%]" | "w-[30%]"
    heading: string 
    content: string
}

const InfoCard = ({ image, width, heading, content }: Props) => {
    return (
        <div className="h-auto xxs:w-full lg:w-[45%] bg-altBackground border border-border rounded-md mx-[20px] my-[20px] p-[20px] hover:border-altBorder">
            <img className="xxs:h-auto w-full rounded-sm" src={image} alt="The image used inside of the container" />
            <h4 className="xxs:text-2xl md:text-3xl font-bold text-text xxs:h-auto md:h-[50px] flex items-center my-[15px]">{heading}</h4>
            <p className="text-lg text-text xxs:h-auto md:h-[80px] flex items-center my-[10px]">{content}</p>
        </div>
    )
}

export default InfoCard