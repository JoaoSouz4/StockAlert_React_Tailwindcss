import {BiSolidTrashAlt} from 'react-icons/bi';
import {AiFillEdit} from 'react-icons/ai';
import { Action } from './action';
import { ListContext } from '../../../../context/ListContext';
import {useContext} from 'react';

export function Actions(name: any){
   
    const {buildActions: listActions} = useContext(ListContext);

    return (
        <div className = 'flex items-center gap-2 h-full'>
            

            <Action 
                icon = {AiFillEdit}
                onActionClick= {() => {}}
            />

            <Action 
                icon = {BiSolidTrashAlt}
                onActionClick={() => listActions?.removeItem(name.name)}
            />
        </div>
    )
}