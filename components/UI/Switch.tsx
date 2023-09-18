
import * as Switch from '@radix-ui/react-switch';

type Props = {
    active: boolean 
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    handleChange: ((column: string, value: string | boolean) => void)
}

const ToggleSwitch = ({ active, setActive, handleChange }: Props) => {

    const handleUpdate = () => {

        handleChange("research_intro", !active)

        setActive(!active)

    }

    return (
        <div className="flex items-center justify-center">
            <Switch.Root className="h-[20px] w-[40px] rounded-[20px] relative border data-[state=unchecked]:bg-white border-paleGrey data-[state=checked]:bg-paleGrey mr-[10px]" checked={active} onCheckedChange={() => handleUpdate()}>
                <Switch.Thumb className="h-[18px] w-[18px] block rounded-rnd data-[state=unchecked]:bg-border data-[state=checked]:bg-black data-[state=checked]:translate-x-[20px] transition duration-100" />
            </Switch.Root>
            {/* <p className="text-xs">{active ? "Active" : "Disabled"}</p> */}
        </div>
    )
}

export default ToggleSwitch