import {ReactNode} from 'react';

export function ModalRoot({children}: {children: ReactNode}){
    return (
        <div className = ' z-40 bg-white p-6 rounded-2xl shadow-md animate-fade'>
            {children}
        </div>
    )
}   