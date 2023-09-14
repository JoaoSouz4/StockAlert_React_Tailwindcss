import { ReactNode, createContext, useState } from "react";
import {defaultState} from './defaultState';
import { defaultActions } from "./defaultActions";

export const ModalContext = createContext({
    modalStates: defaultState,
    modalActions: defaultActions
});

export function ModalProvider({children}: {children: ReactNode}){

    const [modalStates, setModalStates] = useState(defaultState);
    const modalActions = {
        openModal: () => setModalStates({isOpen: true}),
        closeModal: () => setModalStates({isOpen: false}),
        onAction: () => {}
    }
    return (
        <ModalContext.Provider value = {{modalStates, modalActions}}>
            {children}
        </ModalContext.Provider>
    )
}