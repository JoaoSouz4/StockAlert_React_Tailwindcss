import {ReactNode} from 'react'
import React from 'react'

export interface ButtonRootProps {
    children: ReactNode
    style: string,
    onAction: () => void,
    disabled?: boolean
}


export function ButtonRoot({children, style, onAction, disabled}: ButtonRootProps){

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onAction();
    }
    return(
        <button
            onClick = {handleClick}
            disabled = {disabled? disabled: false}
            className= {` h-[3rem] flex justify-center items-center min-w-[3.5rem] w-full ${style == 'leaked'? 'bg-white':'bg-blue-600'} rounded-full p-3 border ${style == 'leaked' && 'border-blue-400 '} ${style == 'delete' && 'bg-red-400 border-red-500'} hover:cursor-pointer disabled:opacity-75`}>
            {children}
        </button>
    )
}