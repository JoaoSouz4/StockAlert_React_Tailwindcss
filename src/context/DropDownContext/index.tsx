import { ReactNode, createContext, useState } from "react"

interface buildActionProps {
    open: () => void,
    close: () => void,
    choose: (value: string) => void
}

interface statesProps {
    value: string,
    isOpen: boolean
}

interface valueProps {
    dropdownState: statesProps | undefined,
    buildAction: buildActionProps | undefined
}

export const DropDownContext = createContext<valueProps>({
    dropdownState: {value: '', isOpen: false},
    buildAction: undefined
})

export function DropDownContextProvider({children}: {children: ReactNode}){

    const [dropdownState, setDropdownState]= useState({
        value: '',
        isOpen: false
    });


    const buildAction = {
        open: () => setDropdownState({...dropdownState, isOpen: true}),
        close: () => {setDropdownState({...dropdownState, isOpen: false})},
        choose: (value: string) => {
            setDropdownState({isOpen: false, value: value})
        }
    }
    return(
        <DropDownContext.Provider value = {{dropdownState, buildAction}}>
            {children}
        </DropDownContext.Provider>
    )
}