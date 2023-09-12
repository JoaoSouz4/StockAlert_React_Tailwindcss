import {createContext, useState, ReactNode, useContext} from 'react';
import { registerProduct } from '../../services/api/post/regiterProduct';
import { AuthContext } from '../AuthContext';
import { AlertContext } from '../AlertContext';

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
    const {openAlert} = useContext(AlertContext);

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

            if(!formRegister.name){
                return openAlert('warning', 'nome inválido')
            }
            if(!formRegister.categorie){
                return openAlert('warning', 'é necessário informar a categoria')
            }

            if(!formRegister.status){
                return openAlert('warning', 'certifique o status do produto')
            }

            registerProduct(formRegister).then(() => {
                setFormRegister({status: '', name: '', categorie: '', registedBy: ''})
                openAlert('sucess', 'Produto Registrado')
            })
        }
    }
    return (
        <FormRegisterContext.Provider value = {{formRegister, buildActions}}>
            {children}
        </FormRegisterContext.Provider>
    )
}

