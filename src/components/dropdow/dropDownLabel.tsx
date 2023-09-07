interface DropDownLabelProps{
    label: string
}

export function DropDownLabel({label}: DropDownLabelProps){
    return(
        <label className = ' z-40 px-2 text-blue-500 font-bold bg-white rounded-md text-sm absolute top-[-0.5rem]'>
            {label}
        </label>
    )
}