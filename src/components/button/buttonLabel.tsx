interface ButtonLabelProps {
    label: string
}

export function ButtonLabel({label}: ButtonLabelProps){
    return(
        <label>
            {label}
        </label>
    )
}