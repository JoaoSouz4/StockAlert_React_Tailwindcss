import { Option } from "./option"
import {FaGear} from 'react-icons/fa6'
import {ImExit} from 'react-icons/im'
import { AuthContext } from "../../../context/AuthContext";
import {useContext} from 'react';
import { BiSolidUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export function UserPage(){

    const {authState, AuthActions} = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className = 'flex justify-center items-center h-full w-full'>

            <div>

                <div className = 'flex items-center justify-cebnter gap-2 text-xl mb-3'>
                    <div className = 'p-2 rounded-full border'>
                        <BiSolidUser />
                    </div>
                    <h3 className = 'text-center'>
                        {authState.userName}
                    </h3>
                </div>

                <div className = 'flex flex-col gap-3'>
                    <Option
                        nameOption = 'Refinir Senha'
                        onAction = {() => {navigate('/updatepass')}}
                        icon = {FaGear}
                    />
                    <Option
                        nameOption = 'Sair'
                        onAction = {() => {AuthActions.logout()}}
                        icon = {ImExit}
                    />
                </div>
            </div>

        </div>
    )
}