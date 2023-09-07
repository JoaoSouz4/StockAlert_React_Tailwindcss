import {AiOutlineClear} from 'react-icons/ai';

export function Interface (){
    return (
        <div className = 'w-full flex justify-between p-2'>
            <div className = 'flex gap-1 items-center'>
                <AiOutlineClear className = 'text-blue-700'/>
                <label className = 'text-blue-700 font-bold text-sm'>limpar Lista</label>
            </div>

            <div className = 'text-slate-400'>
                Total: <span className = 'text-blue-500'>12</span>
            </div>
        </div>
    )
}