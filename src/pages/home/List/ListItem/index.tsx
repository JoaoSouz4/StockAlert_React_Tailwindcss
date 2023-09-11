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
            className = 'relative px-4 py-2 rounded-xl bg-white shadow shadow-3xl'
        >
            <div className = 'flex justify-end mb-3'>
                <Actions />
            </div>

            <div >
                <div className = 'flex items-center justify-between'>
                    <div className = 'flex flex-col gap-2'>
                        <label className =  'text-lg'>{name}</label>
                        <label className = 'text-sm text-slate-500'>Por: {registedBy}</label>
                    </div>

                    <div className = 'flex flex-col gap-2'>
                        <div className = 'flex gap-1 items-center'>
                            <TbClockUp className = 'text-slate-700'/> 
                            <label className = 'text-sm text-slate-500'>
                                {newD.getDate() + '/' + newD.getMonth() + '/' + newD.getFullYear()}
                            </label>
                        </div>
                        <ItemStatus status = {status}/>
                    </div>
                </div>
            </div>
        </div>
    )
}   