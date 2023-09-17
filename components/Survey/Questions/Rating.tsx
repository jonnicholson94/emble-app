
type RatingOptionProps = {
    state: string
    value: string
    handleClick: (value: string) => void
}

type RatingProps = {
    state: string 
    handleClick: (value: string) => void
}

const RatingOption = ({ state, value, handleClick }: RatingOptionProps) => {
    return (
        <div className="h-[80px] w-auto flex items-center justify-start flex-col">
            <span className={`h-[40px] w-[40px] border ${state >= value ? "bg-black text-white font-bold" : "border-paleGrey"} flex items-center justify-center mx-[10px] rounded-rnd cursor-pointer`} onClick={() => handleClick(value)}>{value}</span>
            { value === "1" || value === "5" ? <p className="mt-[15px] text-xs text-border">{ value === "1" ? "Bad" : "Good" }</p> : null }
        </div>
    )
}

const Rating = ({ state, handleClick }: RatingProps) => {
    return (
        <div className="h-auto w-[90%] flex items-center justify-center">
            <RatingOption state={state} value="1" handleClick={handleClick} />
            <RatingOption state={state} value="2" handleClick={handleClick} />
            <RatingOption state={state} value="3" handleClick={handleClick} />
            <RatingOption state={state} value="4" handleClick={handleClick} />
            <RatingOption state={state} value="5" handleClick={handleClick} />
        </div>
    )
}

export default Rating