import { useEffect, useState } from "react"

export function ItemStatus({status}: {status: string}){

    const [nameStatus, setStatus] = useState<string>();

    useEffect(() => {
        switch(status){
            case 'empty': { return setStatus('Em falta')}
            case 'few' : {return setStatus('Poucas unidades')}
        }
    }, [])
    return(
        <div className = {nameStatus == 'Poucas unidades' ? 'text-yellow-400 text-sm': 'text-red-700 text-sm'}>
            {nameStatus}
        </div>
    )
}