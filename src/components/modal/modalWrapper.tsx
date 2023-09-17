import {ReactNode} from 'react';

export function ModalWrapper({children}: {children: ReactNode}){
    return (
        <div className = ' z-40 fixed top-0 p-8 left-0 w-full h-full bg-[rgb(32,32,32,10%)]'>
            <div className = 'z-40 flex justify-center items-center h-full'>
                {children}
            </div>
        </div>
    )
}   