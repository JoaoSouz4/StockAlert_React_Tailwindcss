import { FormRegisterContext } from "../../context/formRegister";
import { useContext, useEffect, useRef} from 'react';


export function InputRadio({label, group, value}: {label: string, group: string, value: string}){

    const {buildActions, formRegister} = useContext(FormRegisterContext);
    const inputRef: any = useRef();
    
    useEffect(() => {
        if(formRegister?.status == ''){
            inputRef.current.checked = false;
        }
    }, [formRegister?.status])
    return(
        <div 
            className = 'flex items-center gap-1'
            onClick = {() => {
                buildActions?.setStatus(value)
            }}
        >
            <input 
                type="radio" 
                name={group} 
                id={label} 
                value = {value} 
                ref = {inputRef}
            />
            <label className = 'text-slate-400'>{label}</label>
        </div>
    )
}