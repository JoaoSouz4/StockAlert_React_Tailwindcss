import { ReactNode, useState, createContext, useContext } from "react";
import {  loginUser } from "../../services/api/post/login";
import { TokenContext } from "../TokenContext";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../AlertContext";


interface Actions {
    setName: (name: string) => void,
    setPass: (paass: string) => void,
    changePassVisibility: () => void,
    login: () => void,
}

interface ContextValues {
    login: DefaultState | undefined,
    loginActions: Actions | undefined,
    isLoad: boolean,
}
interface DefaultState {
    userName: string,
    pass: string,
    passVisibility: boolean,
}

const defaultState: DefaultState = {
    userName: '',
    pass: '',
    passVisibility: false,
}


export const LoginContext = createContext<ContextValues>({
    login: defaultState,
    isLoad: false,
    loginActions: {
        setName: () => {},
        setPass: () => {},
        changePassVisibility: () => {},
        login: () => {}
    }
});



export function LoginProvider({children}: {children: ReactNode}){

    const [login, setLogin] = useState(defaultState);
    const {tokenActions} = useContext(TokenContext);
    const {openAlert} = useContext(AlertContext);
    const [isLoad, setIsLoad] = useState<boolean>(false);

    const navigate = useNavigate();

    const loginActions: Actions = {
        setName: (name: string) => setLogin({...login, userName: name}),
        setPass: (pass: string) => setLogin({...login, pass: pass}),
        changePassVisibility: () => {setLogin({...login, passVisibility: !login.passVisibility})},
        login: () =>{
            setIsLoad(true);
            loginUser(login)
                .then(res => {
                    setIsLoad(false);
                    if(res.isSucess){
                        tokenActions.setUserToken(res.dataRequest.token);
                        navigate('/')
                    } else {
                        openAlert('warning', res.requestMessage)
                    }
                })
        }

    }
    return (
        <LoginContext.Provider value = {{login, loginActions, isLoad}}>
            {children}
        </LoginContext.Provider>
    )
}