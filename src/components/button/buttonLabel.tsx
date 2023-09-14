interface ButtonLabelProps {
    label: string,
    color?: string
}

export function ButtonLabel({label, color}: ButtonLabelProps){
    return(
        <label className = {`${color? color: 'text-white'} font-bold`}>
            {label}
        </label>
    )
}