import { DropDownContext } from "../../context/DropDownContext";
import {useContext, useEffect} from 'react';


interface DropDownInputMainlProps {
    type: string,
    placeholder?: string,
    isDisabled?: boolean,
    value?: any
}

export function DropDownInput ({type, placeholder, value}: DropDownInputMainlProps){
    useEffect(() => {
        if(value.length <=0){
            buildAction?.choose('', '')
        }
    }, [value])
    const {dropdownState, buildAction} = useContext(DropDownContext);
        return(
            <input
                value = {dropdownState?.label}
                disabled = {true}
                className = 'w-full bg-white border border-blue-400 rounded-full p-3 focus:outline-blue-600'
                type = {type}
                onChange={ () => {console.log('lllllll')}}
                placeholder = {placeholder}
            />
        )
}