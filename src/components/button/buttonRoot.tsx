import {ReactNode} from 'react'

interface ButtonRootProps {
    children: ReactNode
}

export function ButtonRoot({children}: ButtonRootProps){
    return(
        <button>{children}</button>
    )
}