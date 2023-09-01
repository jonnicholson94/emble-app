
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useRouter } from "next/router"
import { toast } from "sonner"
import { useQueryClient } from "react-query"

import { deleteResearch, fetchSingleResearch } from "@/network/research"

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
import AlertDialog from "@/components/UI/AlertDialog"

const ViewResearch = () => {

    const router = useRouter()
    const queryClient = useQueryClient()

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
            setQuestions(sortQuestions(data.data.questions))
        }
    }, [data])

    const sortQuestions = (array: QuestionType[] | []) => {
        if (array == null) {
            return []
        } else if (array.length > 0) {
            return [...array].sort((a, b) => a.question_index - b.question_index)
        } else {
            return []
        }
    }

    const handleDelete = async () => {

        const { data, error } = await deleteResearch(id)

        console.log(data)
        console.log(error)

        if (error != null) {
            console.log(error)
        } else {
            router.push("/dashboard")
            queryClient.invalidateQueries("research")
            toast.success("Successfully deleted your research")
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
                    <div className="h-[60px] w-full border-b border-paleGrey flex items-center justify-start px-[20px]">
                        <AlertDialog 
                            title="Would you like to delete this research?" 
                            description="Deleting the research will also delete all of the questions and responses you've had so far. The survey will no longer be available for customers to access."
                            handleDelete={() => handleDelete()}>
                            <img className="h-[25px] w-[25px] mx-[10px]" src="/trash.svg" />
                        </AlertDialog>
                    </div>
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