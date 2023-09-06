import {ReactNode} from 'react'

interface ButtonRootProps {
    children: ReactNode
}

export function ButtonRoot({children}: ButtonRootProps){
    return(
        <button className='bg-blue-600 rounded-full p-3 border-2 border-blue-700 hover:cursor-pointer'>
            {children}
        </button>
    )
}