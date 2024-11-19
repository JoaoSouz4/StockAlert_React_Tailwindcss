import {BiSolidTrashAlt} from 'react-icons/bi';
import {AiFillEdit} from 'react-icons/ai';
import { Action } from './action';;
import {useContext} from 'react';

import { ModalUpdateContext } from '../../context/modalUpdateItemContext';
import { UpdateItemContext } from '../../context/updateItemContext';
import { useList } from '../../../../context/ListContext/hooks/useList';

export function Actions({name, id}: {name: string, id: string, status: string, categorie: string}){

    const { removeItemList } = useList();

    const {modalActions} = useContext(ModalUpdateContext);
    const {formUpdateActions} = useContext(UpdateItemContext);

    return (    
        <div className = 'flex items-center gap-2 h-full'>
            <Action 
                icon = {AiFillEdit}
                onActionClick= {() => {
                    modalActions.openModal();
                    formUpdateActions.updateTarget(id)
                }}
                
            />

            <Action 
                icon = {BiSolidTrashAlt}
                onActionClick={() => removeItemList(name)}
            />
        </div>
    )
}