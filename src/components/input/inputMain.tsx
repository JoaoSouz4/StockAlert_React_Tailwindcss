import React from 'react';

interface InputMainlProps {
    type: string,
    onChangeAction: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    isDisabled?: boolean,
    value: any
}


export function InputMain({type, onChangeAction, placeholder, isDisabled, value}: InputMainlProps){

    return(
        <input
            value = {value}
            disabled = {isDisabled}
            className = 'w-full bg-white border border-blue-400 rounded-full p-3 focus:outline-blue-600'
            type = {type}
            onChange={ (e: React.ChangeEvent<HTMLInputElement>) => onChangeAction(e)}
            placeholder = {placeholder}
        />
    )
}