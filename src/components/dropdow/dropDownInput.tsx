import { DropDownContext } from "../../context/DropDownContext";
import {useContext} from 'react';


interface DropDownInputMainlProps {
    type: string,
    placeholder?: string,
    isDisabled?: boolean,
    value?: any
}

export function DropDownInput ({type, placeholder, isDisabled}: DropDownInputMainlProps){

    const {dropdownState} = useContext(DropDownContext);
        return(
            <input
                value = {dropdownState?.label}
                disabled = {isDisabled}
                className = 'w-full bg-white border border-blue-400 rounded-full p-3 focus:outline-blue-600'
                type = {type}
                onChange={ () => {console.log('lllllll')}}
                placeholder = {placeholder}
            />
        )
}