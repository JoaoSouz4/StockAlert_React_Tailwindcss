import {ReactNode} from 'react';

export function formActions({children}: {children: ReactNode}){
    return(
        <div className = ' w-full flex items-center justify-around'>
            {children}
        </div>
    )
}