import { FormRegisterContext } from "../../context/formRegister";
import { useContext} from 'react';


export function InputRadio({label, group, value}: {label: string, group: string, value: string}){

    const {buildActions} = useContext(FormRegisterContext);

    return(
        <div 
            className = 'flex items-center gap-1'
            onClick = {() => {
                buildActions?.setStatus(value)
            }}
        >
            <input type="radio" name={group} id={label} value = {value}/>
            <label className = 'text-slate-400'>{label}</label>
        </div>
    )
}