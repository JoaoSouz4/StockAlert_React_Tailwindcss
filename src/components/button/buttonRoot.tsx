import {ReactNode} from 'react'

export interface ButtonRootProps {
    children: ReactNode
    style: string,
    onAction: () => void
}

export function ButtonRoot({children, style, onAction}: ButtonRootProps){

    const handleClick = () => {
        onAction();
    }
    return(
        <button
            onClick = {handleClick}
            className= {` flex justify-center items-center min-w-[3.5rem] ${style == 'leaked'? 'bg-white':'bg-blue-600'} rounded-full p-3 border ${style == 'leaked' ? 'border-blue-400 ' :'border-blue-700'} hover:cursor-pointer`}>
            {children}
        </button>
    )
}