import AlertDialog from "./AlertDialog"

type Props = {
    title: string 
    description: string 
    height: "h-[20px]"
    width: "w-[20px]"
    handleDelete: () => void
}

const CloseAlert = ({ title, description, height, width, handleDelete }: Props) => {
    return (
        <AlertDialog title={title} description={description} handleDelete={handleDelete}>
            <img className={`${height} ${width}`} src="/close.svg" alt="A close button for the dialog" />
        </AlertDialog>
    )
}

export default CloseAlert