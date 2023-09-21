
type Props = {
    error: string
    paddingX: "px-[10px]" | "px-[15px]" | "px-[20px]"
    width: "w-[95%]" | "w-[98%]" | "w-full"
    marginTop: "mt-[0px]" | "mt-[10px]"
    marginBottom: "mb-[0px]" | "mb-[10px]"
}

const ErrorText = ({ error, paddingX, width, marginTop, marginBottom }: Props) => {
    return (
        <p className={`h-auto ${paddingX} ${width} text-sm text-warning ${marginTop} ${marginBottom}`}>{error}</p>
    )
}

export default ErrorText