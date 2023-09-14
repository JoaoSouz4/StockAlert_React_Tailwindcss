import {ElementType} from 'react';

interface ActionProps {
    icon?: ElementType,
    onActionClick:  () => void,
}

export function Action({icon: Icon, onActionClick}: ActionProps){
    return(
        <button
            className = 'bg-white border border-blue-600 rounded-full text-blue-700 w-[1.8rem] h-[1.8rem] flex justify-center items-center hover:duration-500 hover:ease-in-out hover:bg-blue-600 hover:text-white'
            onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                onActionClick()
        }}
        >
            {Icon && 
                <Icon />
            }
        </button>
    )
}