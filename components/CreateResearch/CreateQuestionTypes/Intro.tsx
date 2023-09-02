import ToggleSwitch from "@/components/UI/Switch"

type Props = {
    intro: boolean 
    setIntro: React.Dispatch<React.SetStateAction<boolean>>
}

const Intro = ({ intro, setIntro }: Props) => {
    return (
        <div className={`h-[50px] w-[full] px-[20px] flex items-center justify-start ${intro ? "bg-white" : "bg-paleGrey"} border border-paleGrey rounded-sm mb-[10px]`}>
            <p className={`flex-grow ${intro ? "text-black" : "text-border"}`}>Intro</p>
            <ToggleSwitch active={intro} setActive={setIntro} />
        </div>
    )
}

export default Intro