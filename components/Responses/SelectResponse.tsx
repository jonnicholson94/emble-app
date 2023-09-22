
import { Response } from "@/types/responseTypes"

type Props = {
    title: string 
    type: "Single select" | "Multi select" | "Rating" | "Scale"
    responses: Response[]
}

const SelectResponse = ({ title, type, responses }: Props) => {

    // Create a function, which checks the content of the item being mapped through
    // If it doesn't exist, append it to array and set the count to 1
    // If it does, add 1 to count

    let updatedResponses: { response_answer: string, count: number }[] = []

    responses.map(response => {

                if (type === "Multi select") {

                    const split = response.response_answer.split(",")

                    split.map(item => {

                        const exists = updatedResponses.find(response => response.response_answer === item)
        
                        if (exists) {
                            const index = updatedResponses.findIndex(response => response.response_answer === item)
                            updatedResponses[index].count += 1
                        } else {
                            updatedResponses.push({ response_answer: item, count: 1 })
                        }
                
                        return updatedResponses

                    })

                } else {

                    const exists = updatedResponses.find(item => item.response_answer === response.response_answer)
        
                    if (exists) {
                        const index = updatedResponses.findIndex(item => item.response_answer === response.response_answer)
                        updatedResponses[index].count += 1
                    } else {
                        updatedResponses.push({ response_answer: response.response_answer, count: 1 })
                    }
            
                    return updatedResponses

                }
        
    })

    return (
        <div className="h-auto w-full bg-white border border-paleGrey rounded-md my-[20px]">
            <div className="h-auto w-full p-[20px]">
                <h2 className="text-xl">{title}</h2>
                <p className="text-sm text-border">{type}</p>
            </div>
            <div className="h-auto w-full flex items-center justify-center flex-col">
                <div className="h-auto w-full border-t border-paleGrey">

                    { updatedResponses.map((response, index) => {

                        const totalResponsesCount = updatedResponses.reduce((total, response) => total + response.count, 0);

                        const percentage = Math.floor((response.count / totalResponsesCount) * 100)
                        console.log(`Response: ${response.response_answer}, Count: ${response.count}, Total: ${totalResponsesCount}, Percentage: ${percentage}`);

                        return (
                            <div className="h-auto w-full border-t border-paleGrey" key={index}>
                                <div className="h-auto w-full flex items-center justify-center mt-[20px] px-[20px]">
                                    <p className="h-auto flex-grow text-sm">{response.response_answer}</p>
                                    <p className="text-sm text-border">{response.count} {response.count === 1 ? "selection" : "selections"}</p>
                                </div>
                                <div className="h-[30px] border border-paleGrey rounded-sm mt-[10px] mb-[20px] mx-[20px] flex items-center justify-start">
                                    <span style={{ width: `${percentage}%` }} className={`h-[30px] bg-black rounded-sm`}></span>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default SelectResponse