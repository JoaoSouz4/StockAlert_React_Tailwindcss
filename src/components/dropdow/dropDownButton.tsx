import Button from "../button";
import {ElementType} from 'react';

interface DropDownButtonProps {
    label?: string,
    onAction: () => void,
    styleButton: string,
    icon?: ElementType
}

export function DropDownButton({label, onAction, styleButton, icon: Icon}: DropDownButtonProps){
    return(
        <Button.Root
            onAction={onAction}
            style= {styleButton}>
            {label && <Button.Label label = {label} />}
            {Icon && <Icon className = 'text-blue-600'/>}
        </Button.Root>
    )
}