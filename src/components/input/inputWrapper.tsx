import { ReactNode } from "react";

export function InputWrapper ({children}: {children: ReactNode}){
    return (
        <div className = 'flex items-center gap-1'>
            {children}
        </div>
    )
}