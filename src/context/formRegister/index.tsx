import {createContext, useState, ReactNode} from 'react';
import { registerProduct } from '../../services/api/post/regiterProduct';

interface FormRegisterProps {
    name: string,
    categorie: string,
    status: string
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
    formRegister: {name: '', status: '', categorie: ''},
    buildActions: {setName: () => {}, setStatus: ()=> {}, setCategorie: () => {}, submit: () => {}}
});

export function FormRegisterProvider({children}: {children: ReactNode}){

    const [formRegister, setFormRegister] = useState({
        name: '',
        categorie: '',
        status: ''
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
            registerProduct(formRegister).then(res => {
                console.log(res)
            })
        }
    }
    return (
        <FormRegisterContext.Provider value = {{formRegister, buildActions}}>
            {children}
        </FormRegisterContext.Provider>
    )
}

