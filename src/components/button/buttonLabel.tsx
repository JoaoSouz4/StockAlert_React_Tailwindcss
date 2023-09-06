interface ButtonLabelProps {
    label: string
}

export function ButtonLabel({label}: ButtonLabelProps){
    return(
        <label className = 'text-white font-bold'>
            {label}
        </label>
    )
}