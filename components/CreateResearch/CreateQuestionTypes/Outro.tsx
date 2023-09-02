import ToggleSwitch from "@/components/UI/Switch"

type Props = {
    outro: boolean 
    setOutro: React.Dispatch<React.SetStateAction<boolean>>
}

const Outro = ({ outro, setOutro }: Props) => {
    return (
        <div className={`h-[50px] w-[full] px-[20px] flex items-center justify-start ${outro ? "bg-white" : "bg-paleGrey"} border border-paleGrey rounded-sm mb-[10px]`}>
            <p className={`flex-grow ${outro ? "text-black" : "text-border"}`}>Thank you</p>
            <ToggleSwitch active={outro} setActive={setOutro} />
        </div>
    )
}

export default Outro