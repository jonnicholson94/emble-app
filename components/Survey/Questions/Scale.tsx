
type ScaleOptionProps = {
    height: "h-[14%]" | "h-[28%]" | "h-[42%]" | "h-[56%]" | "h-[70%]" | "h-[84%]" | "h-[100%]"
    state: string
    value: string
    handleClick: (value: string) => void
}

type ScaleProps = {
    state: string 
    handleClick: (value: string) => void
}

const ScaleOption = ({ height, state, value, handleClick}: ScaleOptionProps) => {
    return (
        <div className="h-[auto] flex items-center justify-start flex-col cursor-pointer" onClick={() => handleClick(value)}>
            <div className="h-[100px] w-full flex items-center justify-end flex-col mb-[10px]">
                <span className={`${height} w-full border rounded-sm ${state >= value ? "bg-black" : "border-paleGrey"}`}></span>
            </div>
            <div className={`h-[18px] w-[18px] flex items-center justify-center rounded-rnd border ${state === value ? "border-black" : "border-paleGrey"} mx-[10px]`}>
                { state === value && <span className="h-[12px] w-[12px] rounded-rnd bg-black"></span> }
             </div>
             <div className="h-[30px] w-auto flex items-center justify-center mt-[10px]">
                { value === "1" || value === "7" ? <p className=" text-xs text-border">{ value === "1" ? "Bad" : "Good" }</p> : null }
             </div>
            
        </div>
    )
}

const Scale = ({ state, handleClick }: ScaleProps) => {
    return (
        <div className="h-auto w-[90%] flex items-center justify-around">
            <ScaleOption height="h-[14%]" state={state} value="1" handleClick={handleClick} />
            <ScaleOption height="h-[28%]" state={state} value="2" handleClick={handleClick} />
            <ScaleOption height="h-[42%]" state={state} value="3" handleClick={handleClick} />
            <ScaleOption height="h-[56%]" state={state} value="4" handleClick={handleClick} />
            <ScaleOption height="h-[70%]" state={state} value="5" handleClick={handleClick} />
            <ScaleOption height="h-[84%]" state={state} value="6" handleClick={handleClick} />
            <ScaleOption height="h-[100%]" state={state} value="7" handleClick={handleClick} />
        </div>
    )
}

export default Scale