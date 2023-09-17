import {ReactNode} from 'react'

export function formContent({children}: {children: ReactNode}){
    return (
        <div className = 'flex flex-col gap-4'>
            {children}
        </div>
    )
}