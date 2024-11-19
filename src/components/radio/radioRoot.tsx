import { ReactNode } from "react"
import { RadioContext } from "./context/radioContext";

interface RadioRootProps {
    children: ReactNode,
    state: string
}

export function RadioRoot ({children, state}: RadioRootProps){

    return(
        <RadioContext.Provider value = {{state}}>
            <fieldset className = 'flex flex-col gap-4'>
                <div className = 'flex justify-around gap-2'>
                    {children}
                </div>
            </fieldset>
        </RadioContext.Provider>
    )
}