import { useEffect, useRef } from "react"
import { useRadio } from "./hooks/useRadio";

interface InputRadioProps {
    label: string, 
    group: string, 
    value: string,
    onAction: (e: string) => void,
}
export function InputRadio({label, group, value, onAction}: InputRadioProps){

    const state = useRadio();
    const inputRef = useRef<HTMLInputElement | null>(null);

    function handleClick(){
        onAction(value)
    }

    useEffect(() => {
        if(inputRef.current){
            inputRef.current.checked = false
        } 
    }, [state === null])
    
    return(
        <div 
            className = 'flex items-center gap-1'
            onClick = {() => onAction(value)}
        >
            <input
                ref = {inputRef}
                type="radio" 
                name={group} 
                id={label} 
                value = {value}
                onChange={handleClick}
            />
            <label className = 'text-slate-400'>{label}</label>
        </div>
    )
}