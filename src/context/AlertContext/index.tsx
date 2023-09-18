import { ReactNode , createContext, useState} from "react";
import { state, StateProps } from "./state";

interface ContextProps {
    openAlert: (status: string, message: string, timer?: number) => void,
    alertState: StateProps,
}
export const AlertContext = createContext<ContextProps>({
    openAlert: () => {},
    alertState: state,
});

export function AlertProvider({children}: {children: ReactNode}){
    const [alertState, setAlertState] = useState(state);
  

    const openAlert =  (status: string, message: string, timer?: number) => {
        setAlertState({ ...alertState, message, status, isOpen: true});

        setTimeout(() => {
            setAlertState({...alertState, isClosing: true});
        }, timer? timer : 800)
    }
    return (
        <AlertContext.Provider value = {{alertState, openAlert}}>
            {children}
        </AlertContext.Provider>
    )
}