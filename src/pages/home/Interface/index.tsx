import {AiOutlineClear} from 'react-icons/ai';
import {useContext} from 'react';
import { ListContext } from '../../../context/ListContext';
import Spinner from '../../../components/spinner';
export function Interface (){

    const {amount, isFetching} = useContext(ListContext)

    return (
        <div className = 'w-full flex justify-between p-2'>
            <div className = 'flex gap-1 items-center'>
                <AiOutlineClear className = 'text-blue-700'/>
                <label className = 'text-blue-700 font-bold text-sm'>limpar Lista</label>
            </div>

            <div className = 'text-slate-400 flex gap-1'>
                Total: <span className = 'text-blue-500'>
                    {isFetching ? <Spinner size = '2'/> :amount}
                </span>
            </div>
        </div>
    )
}