import { ElementType } from "react"

interface TitleIconProps {
    icon: ElementType;
}

export function TitleIcon({icon: Icon}: TitleIconProps){
    return(
        <Icon />
    )
}