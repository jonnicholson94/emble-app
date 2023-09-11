
import * as ToggleSwitch from "@radix-ui/react-toggle"

type Props = {
    toggled: boolean
}

const Toggle = ({ toggled }: Props) => {
    return (
        <ToggleSwitch.Root className="h-[15px] w-[15px] rounded-rnd border border-paleGrey mx-[10px] data-[state=on]:bg-cta" pressed={toggled}>
            <span></span>
        </ToggleSwitch.Root>
    )
}

export default Toggle