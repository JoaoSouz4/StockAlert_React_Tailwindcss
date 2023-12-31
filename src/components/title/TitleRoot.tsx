import { ReactNode } from "react"

interface TitleRootProps {
    children: ReactNode
}

export function TitleRoot({children}: TitleRootProps){
    return(
        <div className = 'w-full flex items-center gap-1'>
            {children}
        </div>
    )
}