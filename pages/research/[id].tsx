
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useRouter } from "next/router"
import { toast } from "sonner"
import { useQueryClient } from "react-query"

import { deleteResearch, fetchSingleResearch } from "@/network/research"

import { QuestionType } from "@/types/questionTypes"

import ResearchParentContainer from "@/components/Containers/ResearchParentContainer"
import ResearchMainContainer from "@/components/Containers/ResearchMainContainer"
import ResearchSecondaryContainer from "@/components/Containers/ResearchSecondaryContainer"
import ResearchHeader from "@/components/ViewResearch/ResearchHeader"
import ResearchInput from "@/components/ViewResearch/ResearchInput"
import ResearchTextarea from "@/components/ViewResearch/ResearchTextarea"
import ResearchDivider from "@/components/ViewResearch/ResearchDivider"
import ResearchStatus from "@/components/ViewResearch/ResearchStatus"
import ResearchTarget from "@/components/ViewResearch/ResearchTarget"
import ResearchPrototypeUrl from "@/components/ViewResearch/ResearchPrototypeUrl"
import ResearchQuestions from "@/components/ViewResearch/ResearchQuestions"
import AlertDialog from "@/components/UI/AlertDialog"
import Tooltip from "@/components/UI/Tooltip"

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
            toast.success("Failed to delete your research, please try again")
        } else {
            router.push("/dashboard")
            queryClient.invalidateQueries("research")
            toast.success("Successfully deleted your research")
        }
    }

    const handleClipboardCopy = () => {
        navigator.clipboard.writeText(`http://localhost:3000/survey/${id}`)
        toast("Successfully copied survey link to your clipboard")
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
                                <img className="h-[25px] w-[25px] mx-[10px] cursor-pointer" src="/trash.svg" />
                        </AlertDialog>
                        <Tooltip content="Copy survey link">
                            <img className="h-[25px] w-[25px] mx-[10px] cursor-pointer" onClick={() => handleClipboardCopy()} src="/link.svg" />
                        </Tooltip>
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