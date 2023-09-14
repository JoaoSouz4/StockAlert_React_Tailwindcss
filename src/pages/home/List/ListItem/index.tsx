import { Actions } from './actions';
import { ItemStatus } from './itemStatus';
import {TbClockUp} from 'react-icons/tb';

interface ItemProps {
    createdAt: Date,
    registedBy: string,
    status: string,
    name: string,
}

export function ListItem({createdAt, registedBy, status, name}: ItemProps){


    const newD = new Date(createdAt);

    return (
        <div 
            className = 'relative p-6 rounded-xl bg-white shadow shadow-3xl'
        >
                <div>
                    <div className = 'flex items-center justify-between gap-1'>
                        <div className = 'flex flex-col gap-2'>
                            <div className = ' overflow-x-auto'>
                                <label className =  ' flex flex-nowrap text-sm w-full'>{name}</label>
                            </div>
                            <ItemStatus status = {status}/>
                        </div>

                        <Actions name = {name}/>
                    </div>
                </div>

                <div className = 'flex justify-end gap-2 mt-2'>
                    <div className = 'flex gap-1 items-center'>
                        <TbClockUp className = 'text-xs text-slate-700'/> 
                        <label className = 'text-xs text-slate-500'>
                            {newD.getDate() + '/' + newD.getMonth() + '/' + newD.getFullYear()}
                        </label>
                    </div>

                    <label className = 'text-sm text-slate-500'>{registedBy}</label>
                </div>
        </div>
    )
}   