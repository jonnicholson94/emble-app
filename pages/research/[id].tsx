
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useRouter } from "next/router"

import { fetchSingleResearch } from "@/network/research"

import { QuestionType } from "@/types/questionTypes"

import ResearchParentContainer from "@/components/Research/ResearchParentContainer"
import ResearchMainContainer from "@/components/Research/ResearchMainContainer"
import ResearchSecondaryContainer from "@/components/Research/ResearchSecondaryContainer"
import ResearchHeader from "@/components/Research/ResearchHeader"
import ResearchInput from "@/components/Research/ResearchInput"
import ResearchTextarea from "@/components/Research/ResearchTextarea"
import ResearchDivider from "@/components/Research/ResearchDivider"
import ResearchStatus from "@/components/Research/ResearchStatus"
import ResearchTarget from "@/components/Research/ResearchTarget"
import ResearchPrototypeUrl from "@/components/Research/ResearchPrototypeUrl"
import ResearchQuestions from "@/components/Research/ResearchQuestions"

const ViewResearch = () => {

    const router = useRouter()

    const { id } = router.query

    const { data, error, isLoading } = useQuery(`research-${id}`, () => fetchSingleResearch(id))

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [intro, setIntro] = useState(false)
    const [outro, setOutro] = useState(false)
    const [status, setStatus] = useState<"Backlog" | "Active" | "Completed">("Backlog")
    const [limit, setLimit] = useState<number>(50)
    const [prototype, setPrototype] = useState("")
    const [questions, setQuestions] = useState<QuestionType[] | []>([])

    useEffect(() => {
        if (data?.data) {
            console.log(data.data)
            setTitle(data.data.title)
            setDescription(data.data.description)
            setStatus(data.data.status)
            setLimit(data.data.limit)
            setPrototype(data.data.prototype_url)
            setQuestions(data.data.questions)
            const sortedList = sortQuestions(questions)
            setQuestions(sortedList)
        }
    }, [data])

    const sortQuestions = (array: QuestionType[] | []) => {
        if (array.length === 0) {
            return []
        } else {
            return array.sort((a, b) => a.question_index - b.question_index)
        }
    }

    if (isLoading) {
        return <div></div>
    }

    return (
        <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
            <ResearchHeader heading="" handleSubmit={() => console.log("Running...")} />
            <ResearchParentContainer>

                <ResearchMainContainer>
                    <ResearchInput state={title} setState={setTitle} research_id={id} />
                    <ResearchTextarea state={description} setState={setDescription} research_id={id} />
                    <ResearchDivider />
                    <ResearchQuestions questions={questions} setQuestions={setQuestions} intro={intro} setIntro={setIntro} outro={outro} setOutro={setOutro} research_id={id} />
                    <ResearchDivider />
                </ResearchMainContainer>

                <ResearchSecondaryContainer>
                    <div className="h-[60px] w-full border-b border-paleGrey"></div>
                    <div className="h-auto w-full border-b border-paleGrey flex flex-col items-center justify-center">
                        <ResearchStatus state={status} setState={setStatus} research_id={id} />
                        <ResearchTarget state={limit} setState={setLimit} research_id={id} />
                    </div>
                    <div className="h-auto w-full border-b border-paleGrey flex flex-col items-center justify-center">
                        <ResearchPrototypeUrl state={prototype} setState={setPrototype} research_id={id} />
                    </div>
                </ResearchSecondaryContainer>
            </ResearchParentContainer>
        </div>
    )
}

export default ViewResearch