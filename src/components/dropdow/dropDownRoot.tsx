import {ReactNode } from 'react'

interface DropDownRootProps {
    children: ReactNode
}

export function DropDownRoot({children}: DropDownRootProps){
    return (
        <div className = 'relative flex justify-between w-full gap-1'>
            {children}
        </div>
    )
}