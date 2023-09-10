import {ReactNode, createContext, useEffect, useState} from 'react';
import { defaultActions, ActionsTypes } from './defaultState';
import { saveToken, getToken } from '../../services/api/getToken';
import checkToken from '../../services/api/post/checkToken';
import Spinner from '../../components/spinner';


export const TokenContext = createContext({
    tokenState: {
        token: '',
        isValid: false,
        findingToken: true,
        tokenDecode: {
            user: '',
            id: ''
        }
    },
    tokenActions: defaultActions,
});

export function TokenProvider({children}: {children: ReactNode}){

    const [tokenState, setTokenState] = useState({
        token: '',
        findingToken: true,
        isValid: false,
        tokenDecode: {
            user: '',
            id: ''
        }
    });

    const tokenActions: ActionsTypes = {
        setUserToken: (token: string) => setTokenState({...tokenState, token: token}),
        removeUserToken: () => {}
    }

    //verificando a existencia de um token
    useEffect(() => {
        
        const hasToken = getToken();
        if(hasToken){
            return tokenActions.setUserToken(hasToken)
        } else {
            return setTokenState({...tokenState, findingToken: false})
        }
        
    }, [])

     //verificando as mudanças do token
     useEffect(() => {
        
        checkToken(tokenState.token)
            .then((res) => {
                setTokenState({
                    ...tokenState,
                        isValid: res.isSucess? true : false,
                        
                        tokenDecode:{
                        user: res.requestData.isValid.user,
                        id: res.requestData.isValid.id, 
                    },
                    findingToken: false
                })
            })
        
     }, [tokenState.token.length > 1]);

     useEffect(() => {
        if(tokenState.token.length <=0 ) return
        saveToken(tokenState.token)
        
     }, [tokenState.isValid == true])

    if(tokenState.findingToken){
        return (
            <div className = 'h-full'><Spinner /></div>
        )
    } else {
        return (
        
            <TokenContext.Provider value = {{tokenState, tokenActions}} >
                {children}
            </TokenContext.Provider>
        )
    }
}