import Button from "../button";
import {ElementType} from 'react';
import {useContext} from 'react';
import { DropDownContext } from '../../context/DropDownContext';

interface DropDownButtonProps {
    label?: string,
    styleButton: string,
    icon?: ElementType
}

export function DropDownButton({label, styleButton, icon: Icon}: DropDownButtonProps){
    const {dropdownState, buildAction} = useContext(DropDownContext)

    return(
        <Button.Root
            onAction={ () => {
                if(!dropdownState?.isOpen){
                    buildAction?.open()
                } else {
                    buildAction?.close()
                }
            }}
            style= {styleButton}>
            {label && <Button.Label label = {label} />}
            {Icon && <Icon className = 'text-blue-600'/>}
        </Button.Root>
    )
}