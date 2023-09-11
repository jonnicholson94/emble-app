
type Props = {
    image: string
    heading: string 
    content: string 
}

const InfoSection = ({ image, heading, content }: Props) => {
    return (
        <section className="h-auto xxs:w-[90%] md:w-[60%] bg-white border border-paleGrey rounded-sm px-[20px] py-[20px] my-[20px]">
            <img className="h-[30px] w-[30px] my-[10px]" src={image} />
            <h2 className="h-auto text-lg font-bold">{heading}</h2>
            <p className="text-sm my-[10px]">{content}</p>
        </section>
    )
}

export default InfoSection