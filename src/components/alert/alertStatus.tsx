import {AiOutlineCheckSquare as Sucess} from 'react-icons/ai';
import {CiSquareAlert as Warning } from 'react-icons/ci';
import {useContext} from 'react';
import { AlertContext } from '../../context/AlertContext';

export function AlertStatus(){

    const {alertState} = useContext(AlertContext);
    const styleIcon: string = 'text-white text-lg'
    return (
        <div>
            {alertState.status == 'sucess'? 
                <Sucess className = {styleIcon}/>
            :
                <Warning className = {styleIcon} />
            }
        </div>
    )
}