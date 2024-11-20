import { Option } from "./option"
import {FaGear} from 'react-icons/fa6'
import {ImExit} from 'react-icons/im'
import { AuthContext } from "../../../context/AuthContext";
import {useContext, useState} from 'react';
import { BiSolidUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { VscFilePdf } from "react-icons/vsc";
import { urldefault } from "../../../services/api/config";
import Spinner from '../../../components/spinner';

export function UserPage(){

    const {authState, AuthActions} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    function handlePdf() {
        setIsLoading(true);
        fetch(`${urldefault}/get/getpdf`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Falha na requisição PDF');
                }
                return response.blob();  // Convertendo a resposta em um Blob (arquivo binário)
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob); // Cria um URL temporário para o arquivo
                const link = document.createElement('a'); // Cria um link para o download
                link.href = url; 
                link.download = 'listadefaltabh.pdf'; // Define o nome do arquivo
                link.click();  // Simula o clique no link, forçando o download
                window.URL.revokeObjectURL(url); // Libera o URL temporário após o uso
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                console.error('Erro ao gerar PDF:', error);
            });
    }

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
                    {
                        isLoading?
                            <div className = 'shadow-sm border-2 border-slate-200 rounded-2xl p-4'>
                                <Spinner />
                            </div>
                        :
                            <Option
                            nameOption = 'Gerar PDF'
                            onAction = {handlePdf}
                            icon = {VscFilePdf}
                            />
                    }
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