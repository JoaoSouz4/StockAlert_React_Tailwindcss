import {ElementType} from 'react'

interface OptionProps {
    nameOption: string,
    onAction: () => void,
    icon?: ElementType,
}

export function Option({nameOption, onAction, icon: Icon }: OptionProps){

    const handleClick = () => onAction();

    return (
        <div
            className = 'cursor-pointer'
            onClick = {handleClick}>
            <div className = 'shadow-sm border-2 border-slate-200 rounded-2xl p-4'>
                <div className = 'text-blue-700 flex flex-col items-center gap-2'>
                    {Icon && <Icon className = 'text-blue-700 text-xl'/>}
                    <label>{nameOption}</label>
                </div>
            </div>
        </div>
    )
}