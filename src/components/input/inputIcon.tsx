import { ElementType } from "react";
import { LoginContext } from "../../context/loginContext";
import { useContext } from "react";


export function InputIcon({icon: Icon}: {icon: ElementType}){
    const {loginActions} = useContext(LoginContext);
    const handleClick = () => {
        loginActions?.changePassVisibility();
    }
    return ( 
            <div
                onClick = {handleClick}
                className = 'p-2 border rounded-full border-blue-500'>
                <Icon className = 'text-blue-600 text-xl'/>
            </div>
        
    )
}