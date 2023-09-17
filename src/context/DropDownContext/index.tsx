import { ReactNode, createContext, useState, useEffect, useContext, useRef } from "react"
import { FormRegisterContext } from "../formRegister";

interface buildActionProps {
    open: () => void,
    close: () => void,
    choose: (value: string, label: string) => void
}

interface statesProps {
    value: string,
    isOpen: boolean,
    label: string,
    ref: any
}

interface valueProps {
    dropdownState: statesProps
    buildAction: buildActionProps
}

export const DropDownContext = createContext<valueProps>({
    dropdownState: {value: '', isOpen: false, label: '', ref: {}},
    buildAction: {
        open: () => {},
        close: () => {},
        choose: () => {}
    }
    }
)

export function DropDownContextProvider({children}: {children: ReactNode}){
    const {buildActions} = useContext(FormRegisterContext);
    const ddRef = useRef();

    const [dropdownState, setDropdownState]= useState({
        label: '',
        value: '',
        isOpen: false,
        ref: ddRef
    });

    useEffect(() => {
        if(dropdownState.value.length<=0) return setDropdownState({...dropdownState, value : '', label: ''})
        buildActions?.setCategorie(dropdownState.value)
    }, [dropdownState.value])


    const buildAction = {
        open: () => setDropdownState({...dropdownState, isOpen: true}),
        close: () => {setDropdownState({...dropdownState, isOpen: false})},
        choose: (value: string, label: string) => {
            setDropdownState({...dropdownState, isOpen: false, value: value, label: label})
        }
    }
    return(
        <DropDownContext.Provider value = {{dropdownState, buildAction}}>
            {children}
        </DropDownContext.Provider>
    )
}