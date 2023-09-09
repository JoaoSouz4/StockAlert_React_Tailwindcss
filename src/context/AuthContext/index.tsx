// import {useState, useEffect, ReactNode, createContext} from 'react';
// import { DefaultStateProps, defaultState } from './defaultState';
// import { getToken } from '../../services/api/getToken';

// export const AuthContext = createContext({
//     authState: defaultState,
//     AuthActions: 
// });



// export function AuthProvider({children}: {children: ReactNode}){

//     const [authState, setAuthState] = useState(defaultState);
   
//     return (
//         <AuthContext.Provider value = {{authState}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }