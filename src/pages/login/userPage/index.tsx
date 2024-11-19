import { Option } from "./option"
import {FaGear} from 'react-icons/fa6'
import {ImExit} from 'react-icons/im'
import { AuthContext } from "../../../context/AuthContext";
import {useContext} from 'react';
import { BiSolidUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { VscFilePdf } from "react-icons/vsc";

export function UserPage(){

    const {authState, AuthActions} = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className = 'flex justify-center items-center h-full w-full'>

            <div>

                <div className = 'flex items-center justify-cebnter gap-2 text-xl mb-3'>
                    <div className = 'p-2 rounded-full border'>
                        <BiSolidUser className = 'text-blue-700'/>
                    </div>
                    <h3 className = 'text-center text-slate-800'>
                        {authState.userName}
                    </h3>
                </div>

                <div className = 'grid grid-cols-2 gap-3'>
                    <Option
                        nameOption = 'Refinir Senha'
                        onAction = {() => {navigate('/updatepass')}}
                        icon = {FaGear}
                    />
                    <Option
                        nameOption = 'Gerar PDF'
                        onAction = {() => console.log('')}
                        icon = {VscFilePdf}
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