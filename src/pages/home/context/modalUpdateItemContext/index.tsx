import {createContext, ReactNode, useState} from 'react';

export const ModalUpdateContext = createContext({
    isOpen: false,
    modalActions: {
        openModal: () => {},
        closeModal: () => {},
    }
});

export function ModalUpdateProvider({children}: {children: ReactNode}){
    const [isOpen, setState] = useState<boolean>(false);
    const modalActions = {
        openModal: () => setState(true),
        closeModal: () => setState(false),
    }
    return(
        <ModalUpdateContext.Provider value = {{isOpen, modalActions}}>
            {children}
        </ModalUpdateContext.Provider>
    )
}