import { ReactNode, useContext } from "react";
import {AlertContext} from '../../context/AlertContext/index';

export function AlertRoot({children}: {children: ReactNode}){
    const {alertState}  = useContext(AlertContext);

    return (
        <div className = {`${alertState.isOpen? 'absolute': 'hidden'} bottom-[1rem] bg-slate-900 p-4 rounded-2xl flex gap-1 items-center animate-fade`}>
            {children}
        </div>
    )
}