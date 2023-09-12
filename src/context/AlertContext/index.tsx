import { ReactNode , createContext, useState} from "react";
import { state, StateProps } from "./state";

interface ContextProps {
    openAlert: (status: string, message: string) => void,
    alertState: StateProps,
}
export const AlertContext = createContext<ContextProps>({
    openAlert: () => {},
    alertState: state,
});

export function AlertProvider({children}: {children: ReactNode}){
    const [alertState, setAlertState] = useState(state);
  

    const openAlert =  (status: string, message: string) => {
        setAlertState({ ...alertState, message, status, isOpen: true});

        setTimeout(() => {
            setAlertState({...alertState, isClosing: true});
        }, 2000)
    }
    return (
        <AlertContext.Provider value = {{alertState, openAlert}}>
            {children}
        </AlertContext.Provider>
    )
}