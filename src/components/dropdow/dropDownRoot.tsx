import {ReactNode } from 'react'
import { DropDownContextProvider } from '../../context/DropDownContext'

interface DropDownRootProps {
    children: ReactNode
}

export function DropDownRoot({children}: DropDownRootProps){

    return (
        <DropDownContextProvider>
            <div className = 'relative flex justify-between w-full gap-1'>
                {children}
            </div>
        </DropDownContextProvider>
    )
}