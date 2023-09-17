import {ReactNode} from 'react';

export function modalActions({children}: {children: ReactNode}){
    return(
        <div className = ' w-full flex items-center justify-around'>
            {children}
        </div>
    )
}