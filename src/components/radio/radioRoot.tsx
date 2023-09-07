import { ReactNode } from "react"

interface RadioRootProps {
    children: ReactNode,
}

export function RadioRoot ({children}: RadioRootProps){
    return(
        <fieldset className = 'flex flex-col gap-4'>
            <div className = 'flex justify-around gap-2'>
                {children}
            </div>
        </fieldset>
    )
}