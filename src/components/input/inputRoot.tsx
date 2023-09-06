import {ReactNode} from 'react';

interface InputRootProps {
    children: ReactNode
}

export function InputRoot({children}:InputRootProps){
    return(
        <div className = ' w-full relative flex flex-col'>
            {children}
        </div>
    )
}