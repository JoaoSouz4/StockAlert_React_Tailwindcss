import {useState, useEffect, ReactNode, createContext, useContext} from 'react';
import { defaultState } from './defaultState';
import { ActionType } from './ActionsType';
import { actions } from './Actions';
import { TokenContext } from '../TokenContext';


export const AuthContext = createContext({
    authState: defaultState,
    AuthActions: actions,
});

export function AuthProvider({children}: {children: ReactNode}){

    const [authState, setAuthState] = useState(defaultState);

    const  {tokenState, tokenActions} = useContext(TokenContext);

    const AuthActions : ActionType = {
        logout: () => {
            tokenActions.removeUserToken();
        },
        signIn: () => {
            setAuthState({
                userName: tokenState.tokenDecode.user,
                isAuthenticated: true,
                idUser: tokenState.tokenDecode.id,
                isLoad: false
            })
        },
    }

    useEffect(() => {
        console.log('to aqs')
        if(tokenState.isValid){
            AuthActions.signIn();
        }
    }, [tokenState.isValid]);

    useEffect(() => {
        console.log(authState)
    })

   
    return (
        <AuthContext.Provider value = {{authState, AuthActions}}>
            {children}
        </AuthContext.Provider>
    )
}