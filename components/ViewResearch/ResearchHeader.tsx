
import Link from "next/link"
import { toast } from "sonner"
import { useRouter } from "next/router"
import { useQueryClient } from "react-query"

import ResearchStatus from "./ResearchStatus"
import AlertDialog from "../UI/AlertDialog"

import { deleteResearch } from "@/network/research"

import { ActiveTypes } from "@/types/researchTypes"
import ResearchPrototypeUrl from "./ResearchPrototypeUrl"
import ResearchShare from "./ResearchShare"

type Props = {
    heading: string
    status: ActiveTypes
    setStatus: React.Dispatch<React.SetStateAction<ActiveTypes>>
    prototype: string 
    setPrototype: React.Dispatch<React.SetStateAction<string>>
    research_id: string | string[] | undefined
}

const ResearchHeader = ({ heading, status, setStatus, prototype, setPrototype, research_id }: Props) => {

    const router = useRouter()
    const queryClient = useQueryClient()

    // const handleDelete = async () => {

    //     const { data, error } = await deleteResearch(research_id)

    //     if (error != null) {
    //         toast.success("Failed to delete your research, please try again")
    //     } else {
    //         router.push("/dashboard")
    //         queryClient.invalidateQueries("research")
    //         toast.success("Successfully deleted your research")
    //     }
    // }

    

    return (
        <div className="h-[60px] w-full bg-white flex items-center justify-center border-b border-paleGrey">
            <div className="h-full w-[48%] flex items-center justify-start">
                <Link className="mr-[10px]" href="/dashboard">
                    <img src="/close.svg" />
                </Link>
                <h1 className="font-bold">{heading}</h1>
            </div>
            <div className="h-full w-[48%] flex items-center justify-end">
                <ResearchStatus state={status} setState={setStatus} research_id={research_id}  />
                <ResearchPrototypeUrl state={prototype} setState={setPrototype} research_id={research_id} />
                {/* <AlertDialog 
                    title="Would you like to delete this research?" 
                    description="Deleting the research will also delete all of the questions and responses you've had so far. The survey will no longer be available for customers to access."
                    handleDelete={() => handleDelete()}>
                        <button className="h-[35px] px-5 border border-paleGrey font-bold rounded-md text-sm mx-[15px]">Delete</button>
                </AlertDialog> */}
                <ResearchShare research_id={research_id} />
            </div>
        </div>
    )
}

export default ResearchHeader