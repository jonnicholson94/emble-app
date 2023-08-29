
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
            setTitle(data.data.title)
            setDescription(data.data.description)
            setStatus(data.data.status)
            setLimit(data.data.limit)
            setPrototype(data.data.prototype_url)
            setQuestions(data.data.questions)
        }
    }, [data])

    if (isLoading) {
        return <div></div>
    }

    return (
        <div className="h-screen w-screen flex items-center justify-start flex-col bg-offWhite">
            <ResearchHeader heading="" handleSubmit={() => console.log("Running...")} />
            <ResearchParentContainer>

                <ResearchMainContainer>
                    <ResearchInput state={title} setState={setTitle} />
                    <ResearchTextarea state={description} setState={setDescription} />
                    <ResearchDivider />
                    <ResearchQuestions questions={questions} intro={intro} setIntro={setIntro} outro={outro} setOutro={setOutro} research_id={id} />
                    <ResearchDivider />
                </ResearchMainContainer>

                <ResearchSecondaryContainer>
                    <div className="h-[60px] w-full border-b border-paleGrey"></div>
                    <div className="h-auto w-full border-b border-paleGrey flex flex-col items-center justify-center">
                        <ResearchStatus state={status} setState={setStatus} />
                        <ResearchTarget state={limit} setState={setLimit} />
                    </div>
                    <div className="h-auto w-full border-b border-paleGrey flex flex-col items-center justify-center">
                        <ResearchPrototypeUrl state={prototype} setState={setPrototype} />
                    </div>
                </ResearchSecondaryContainer>
            </ResearchParentContainer>
        </div>
    )
}

export default ViewResearch