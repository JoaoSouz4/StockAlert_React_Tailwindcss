import {createContext, useState, ReactNode, useContext} from 'react';
import { registerProduct } from '../../services/api/post/regiterProduct';
import { AuthContext } from '../AuthContext';

interface FormRegisterProps {
    name: string,
    categorie: string,
    status: string,
    registedBy: string
}

interface BuildActionProps {
    setName: (value: string) => void,
    setStatus: (value: string) => void,
    setCategorie: (value: string) => void,
    submit: () => void,
}

interface ContextProps {
    formRegister: FormRegisterProps | undefined,
    buildActions: BuildActionProps | undefined
    
}

export const FormRegisterContext = createContext<ContextProps>({
    formRegister: {name: '', status: '', categorie: '', registedBy: ''},
    buildActions: {setName: () => {}, setStatus: ()=> {}, setCategorie: () => {}, submit: () => {}}
});

export function FormRegisterProvider({children}: {children: ReactNode}){
    const {authState} = useContext(AuthContext);

    const [formRegister, setFormRegister] = useState({
        name: '',
        categorie: '',
        status: '',
        registedBy: authState.userName
    });

    const buildActions: BuildActionProps = {
        setName: (value: string) => {
            setFormRegister({...formRegister, name: value})
        },
        setCategorie: (value: string) => {
            setFormRegister({...formRegister, categorie: value})
        },
        setStatus: (value: string) => {
            setFormRegister({...formRegister, status: value})
        },

        submit: () => {
            registerProduct(formRegister).then(() => {
                setFormRegister({status: '', name: '', categorie: '', registedBy: ''})
            })
        }
    }
    return (
        <FormRegisterContext.Provider value = {{formRegister, buildActions}}>
            {children}
        </FormRegisterContext.Provider>
    )
}

