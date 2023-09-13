import {ElementType} from 'react'

interface OptionProps {
    nameOption: string,
    onAction: () => void,
    icon?: ElementType,
}

export function Option({nameOption, onAction, icon: Icon }: OptionProps){

    const handleClick = () => onAction();

    return (
        <div onClick = {handleClick}>
            <div className = 'border-2 border-slate-200 rounded-2xl p-4'>
                <div className = 'flex items-center gap-2'>
                    {Icon && <Icon className = 'text-slate-800'/>}
                    <label>{nameOption}</label>
                </div>
            </div>
        </div>
    )
}