import {ElementType, useContext} from 'react';
import { AuthContext } from '../../../../context/AuthContext';

interface ActionProps {
    icon?: ElementType,
    onActionClick:  () => void,
}

export function Action({icon: Icon, onActionClick}: ActionProps){

    const {authState} = useContext(AuthContext);

    return(
        <button
            disabled = {authState.isAuthenticated? false : true}
            className = 'bg-white border border-blue-600 rounded-full text-blue-700 w-[1.8rem] h-[1.8rem] flex justify-center items-center hover:duration-500 hover:ease-in-out hover:bg-blue-600 hover:text-white disabled:opacity-25'
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