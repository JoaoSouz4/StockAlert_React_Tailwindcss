import {useContext} from 'react';
import {DropDownContext} from '../../context/DropDownContext'

interface DropDownItemProps {
    nameItem: string,
    value: string,
}

export function DropDownItem({nameItem, value}: DropDownItemProps){

    const {buildAction} = useContext(DropDownContext);
    const handleClick = () => {
        console.log('func de mudar')
        buildAction?.choose(value, nameItem)
    }

    return(
        <div 
            className = ' flex justify-start items-center'
            onClick = {handleClick}
        >
            <label className = 'text-[rgb(32,32,32,80%)]'>{nameItem}</label>
        </div>
    )
}