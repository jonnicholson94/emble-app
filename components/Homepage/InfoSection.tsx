
type Props = {
    heading: string 
    content: string 
    image: string
}

const InfoSection = ({ heading, content, image }: Props) => {
    return (
        <section className="h-auto w-full flex items-center justify-around bg-offWhite">
            <div className="h-full w-[40%] mt-[100px]">
                <h2 className="text-2xl font-bold mb-[15px]">{heading}</h2>
                <p className="text-lg">{content}</p>
            </div>
            <img className="h-auto w-[40%] mt-[100px]" src={image} />
        </section>
    )
}

export default InfoSection