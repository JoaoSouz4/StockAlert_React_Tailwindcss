import {RiMenu4Fill} from 'react-icons/ri';
import {BiSolidUser} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Menu(){

    const {authState} = useContext(AuthContext);
    return (
        <>
            <header className = ' z-40 bg-blue-600 flex justify-between items-center w-full px-3 py-4'>
                <div className = 'flex items-center'>
                    <RiMenu4Fill
                        className = 'text-white text-2xl'
                    />
                </div>

                <Link to = 'login'>
                    <div className = 'flex justify-start gap-2 items-center'>
                        <BiSolidUser className = 'text-white'/>
                        <span className = 'text-white'>{
                            authState.isAuthenticated?
                                <span>{authState.userName}</span>
                            :
                                <span>Login</span>
                        }</span>
                    </div>
                </Link>
            </header>
        </>
        
    )
}