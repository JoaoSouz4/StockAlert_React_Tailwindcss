interface InputLabelProps {
    label: string
}

export function InputLabel({label}: InputLabelProps){
    return(
        <label className = 'px-2 text-blue-500 font-bold bg-white rounded-md text-sm absolute top-[-0.5rem]'>
            {label}
        </label>
    )
}