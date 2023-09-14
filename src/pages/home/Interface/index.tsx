import {AiOutlineClear} from 'react-icons/ai';
import {useContext} from 'react';
import { ListContext } from '../../../context/ListContext';
import { ModalContext } from '../../../context/ModalContext';
import { AuthContext } from '../../../context/AuthContext';
import Spinner from '../../../components/spinner';
import { Modal } from './modal';
import { AlertContext } from '../../../context/AlertContext';
export function Interface (){

    const {amount, isFetching} = useContext(ListContext)
    const {modalStates, modalActions} = useContext(ModalContext);
    const {authState} = useContext(AuthContext);
    const {openAlert} = useContext(AlertContext);

    return (
        <div className = 'w-full flex items-center justify-between p-2'>
            <div 
                className = 'flex gap-1 items-center border rounded-2xl p-2 hover:bg-slate-200 hover:cursor-pointer active:bg-slate-400 active:ease-in-out active:duration-500'
                onClick = {() => !authState.isAuthenticated? openAlert('warning', 'Não autorizado'): modalActions.openModal()}
            >
                <AiOutlineClear className = 'text-blue-700'/>
                <label className = 'text-blue-700 font-bold text-sm'>limpar Lista</label>
            </div>

            <div className = 'text-slate-400 flex gap-1'>
                Total: <span className = 'text-blue-500'>
                    {isFetching ? <Spinner size = '2'/> :amount}
                </span>
            </div>

            {modalStates.isOpen && <Modal />}
        </div>
    )
}