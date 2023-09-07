import {ReactNode, useContext} from 'react';
import { DropDownContext } from '../../context/DropDownContext';


export function DropDownList({children}: {children: ReactNode}){

    const {dropdownState} = useContext(DropDownContext);

    return(
        <div className = {!dropdownState?.isOpen? `hidden`: ``}>
            <div className = 'absolute w-1/2 top-[3.5rem] gap-3 p-2 shadow-slate-400 shadow-sm right-1 bg-slate-100 border-2 border-slate-200 rounded-2xl flex flex-col'>
                {children}
            </div>
        </div>
    )
}