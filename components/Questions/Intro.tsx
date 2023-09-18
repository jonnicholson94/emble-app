import ToggleSwitch from "@/components/UI/Switch"

type Props = {
    intro: boolean 
    setIntro: React.Dispatch<React.SetStateAction<boolean>>
    title: string 
    setTitle: React.Dispatch<React.SetStateAction<string>>
    description: string 
    setDescription: React.Dispatch<React.SetStateAction<string>>
    handleChange: ((column: string, value: string | boolean) => void)
}

const Intro = ({ intro, setIntro, title, setTitle, description, setDescription, handleChange }: Props) => {
    return (
        <div className={`h-auto w-[full] flex flex-col items-center justify-center ${intro ? "bg-white" : "bg-paleGrey"} border border-paleGrey rounded-sm mb-[10px]`}>
            <div className="h-[50px] w-full px-[20px] flex items-center justify-center">
                <p className={`flex-grow ${intro ? "text-black" : "text-border"}`}>Intro</p>
                <ToggleSwitch active={intro} setActive={setIntro} handleChange={handleChange} />
            </div>
            { intro && 
                <div className="h-auto w-full px-[20px] flex items-center justify-center flex-col mb-[10px]">
                    <input 
                        className="h-[40px] w-full border border-paleGrey rounded-sm my-[10px] px-[10px] placeholder:text-border text-md" 
                        placeholder="Enter an intro title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onBlur={() => handleChange("research_intro_title", title)} />
                    <textarea 
                        className="h-[80px] w-full border border-paleGrey rounded-sm my-[10px] p-[10px] placeholder:text-border text-sm" 
                        placeholder="Enter a brief description for your users..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onBlur={() => handleChange("research_intro_description", description)} />
                </div>
            }
            
        </div>
    )
}

export default Intro