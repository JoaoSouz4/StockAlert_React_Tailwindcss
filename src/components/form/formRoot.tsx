import {ReactNode} from 'react'

export default function FormRoot ({children}: {children: ReactNode}){
    return (
        <form className = ' w-full flex flex-col gap-4'>
            {children}
        </form>
    )
}