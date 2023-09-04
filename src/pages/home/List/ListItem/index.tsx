import {FiMoreHorizontal} from 'react-icons/fi';
import { ItemStatus } from './itemStatus';

interface ItemProps {
    dataRegister: Date,
    user: string,
    status: string,
    name: string
}

export function ListItem({dataRegister, user, status, name}: ItemProps){
    return (
        <div className = 'relative px-4 py-2 rounded-xl bg-white shadow shadow-3xl'>
            <div className = 'flex justify-end mb-3'>
                <FiMoreHorizontal />
            </div>

            <div >
                <div className = 'flex items-center justify-between'>
                    <div className = 'flex flex-col'>
                        <label className =  'text-lg'>{name}</label>
                        <label className = 'text-sm text-slate-500'>Por: {user}</label>
                    </div>

                    <div className = 'flex flex-col'>
                        <label className = 'text-sm text-slate-500'>Desde: {dataRegister.getDate() + '/' + dataRegister.getMonth() + '/' + dataRegister.getFullYear()}</label>
                        <ItemStatus status = {status}/>
                    </div>
                </div>
            </div>
        </div>
    )
}   