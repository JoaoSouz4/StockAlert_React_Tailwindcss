import {defaultState} from './defaultState';
import { DefaultStatesProps } from './defaultState';
import {defaultActions} from './defaultActions';
import { updateUserPass } from '../../services/api/post/updatePass';
import { AlertContext } from '../AlertContext';
import {createContext, useState, ReactNode, useContext} from 'react';
import { AuthContext } from '../AuthContext';

export const UpdatePassContext = createContext({
    state: defaultState,
    actions: defaultActions
});

export function UpdatePassProvider({children}: {children: ReactNode}){

    const [state, setState] = useState<DefaultStatesProps>(defaultState);
    const {openAlert} = useContext(AlertContext);
    const {authState} = useContext(AuthContext);

    const actions = {
        updatePass: (e: string) => setState({...state, pass: e}),
        updateConfirmPass: (e: string) => setState({...state, confirmPass: e}),
        updateNewPass: () => {
            setState({...state, isLoad: true});

            if(!state.pass || !state.confirmPass){
                setState({...state, isLoad: false});
                return openAlert('warning', 'preencha todos os campos')
            }

            if(state.pass != state.confirmPass){
                setState({...state, isLoad: false});
                return openAlert('warning', 'as senhas precisam ser iguais')
            }

             updateUserPass(authState.idUser, state.pass)
                .then(res => {
                    setState({...state, isLoad: false});
                    if(res.isSucess){
                        openAlert('sucess', res.requestMessage)
                        setState(defaultState)
                    } else {
                        openAlert('warning', 'não foi possível realizar esta operação')
                    }
                })
        }
    }
    return (
        <UpdatePassContext.Provider value = {{state, actions}}>
            {children}
        </UpdatePassContext.Provider>
    )
}