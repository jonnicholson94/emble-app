import { Response } from "@/types/responseTypes"

type Props = {
    title: string 
    type: "Short text" | "Long text"
    responses: Response[]
}

const TextResponse = ({ title, type, responses }: Props) => {
    return (
        <div className="h-auto w-full bg-white border border-paleGrey rounded-md my-[20px]">
            <div className="h-auto w-full p-[20px]">
                <h2 className="text-xl">{title}</h2>
                <p className="text-sm text-border">{type}</p>
            </div>
            <div className="h-auto w-full flex items-center justify-center flex-col">
                { responses.map((item, index) => {
                    return (
                        <div className="h-auto w-full border-t border-paleGrey" key={index}>
                            <p className="px-[20px] text-border mt-[20px] text-sm mb-[5px]">Response #{index + 1}</p>
                            <p className="px-[20px] mb-[20px]">{item.response_answer}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TextResponse