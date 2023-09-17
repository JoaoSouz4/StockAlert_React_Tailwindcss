import { DropDownContext } from "../../context/DropDownContext";
import {useContext, useEffect} from 'react';


interface DropDownInputMainlProps {
    type: string,
    placeholder?: string,
    isDisabled?: boolean,
    value: string,
    onChangeAction: (value: string) => void
}

export function DropDownInput ({type, placeholder, onChangeAction, value}: DropDownInputMainlProps){
    const {dropdownState, buildAction} = useContext(DropDownContext);
    useEffect(() => {
        if(value.length <=0 ){
            buildAction.choose('', '')
        }
    }, [value])

    
    useEffect(() => {
        onChangeAction(dropdownState.value);
    }, [dropdownState?.label]);

        return(
            <input
                value = {dropdownState?.label}
                className = 'w-full bg-white border border-blue-400 rounded-full p-3 focus:outline-blue-600'
                type = {type}
                placeholder = {placeholder}
                onChange= {() => {console.log('MUDOUR')}}
            />
        )
}