import { useContext } from "react"
import { AlertContext } from "../../context/AlertContext"

export function AlertMessage(){

    const {alertState} = useContext(AlertContext);

    return (
        <div>
            <label className = 'text-white'>{alertState.message}</label>
        </div>
    )
}