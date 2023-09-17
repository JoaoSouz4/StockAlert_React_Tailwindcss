interface InputRadioProps {
    label: string, 
    group: string, 
    value: string,
    onAction: (e: string) => void
}
export function InputRadio({label, group, value, onAction}: InputRadioProps){

    return(
        <div 
            className = 'flex items-center gap-1'
            onClick = {() => onAction(value)}
        >
            <input 
                type="radio" 
                name={group} 
                id={label} 
                value = {value}
            />
            <label className = 'text-slate-400'>{label}</label>
        </div>
    )
}