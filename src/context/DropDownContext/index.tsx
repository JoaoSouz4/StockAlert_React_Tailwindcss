import { ReactNode, createContext, useState, useEffect, useContext } from "react"
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
}

interface valueProps {
    dropdownState: statesProps | undefined,
    buildAction: buildActionProps | undefined
}

export const DropDownContext = createContext<valueProps>({
    dropdownState: {value: '', isOpen: false, label: ''},
    buildAction: undefined
})

export function DropDownContextProvider({children}: {children: ReactNode}){
    const {buildActions} = useContext(FormRegisterContext);

    const [dropdownState, setDropdownState]= useState({
        label: '',
        value: '',
        isOpen: false
    });

    useEffect(() => {
        buildActions?.setCategorie(dropdownState.value)
    }, [dropdownState.value])


    const buildAction = {
        open: () => setDropdownState({...dropdownState, isOpen: true}),
        close: () => {setDropdownState({...dropdownState, isOpen: false})},
        choose: (value: string, label: string) => {
            setDropdownState({isOpen: false, value: value, label: label})
        }
    }
    return(
        <DropDownContext.Provider value = {{dropdownState, buildAction}}>
            {children}
        </DropDownContext.Provider>
    )
}