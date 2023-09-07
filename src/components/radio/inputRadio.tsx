export function InputRadio({label, group}: {label: string, group: string}){
    return(
        <div className = 'flex items-center gap-1'>
            <input type="radio" name={group} id={label} value = {label}/>
            <label className = 'text-slate-400'>{label}</label>
        </div>
    )
}