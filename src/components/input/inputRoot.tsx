import {ReactNode} from 'react';

interface InputRootProps {
    children: ReactNode
}

export function InputRoot({children}:InputRootProps){
    return(
        <div className = 'relative flex flex-col'>
            {children}
        </div>
    )
}