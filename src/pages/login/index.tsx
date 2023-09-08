import Input from "../../components/input"
import Button from "../../components/button"
import { LoginContext } from "../../context/loginContext";
import { useContext } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

export default function Login(){

    const {login, loginActions} = useContext(LoginContext);

    return (
        <div className = 'flex justify-center items-center h-full'>
            <form className="flex flex-col gap-4 w-full">

                <h1 className = 'text-center text-2xl mb-4 text-blue-600 font-bold'>Login</h1>
                <Input.Root>
                    <Input.Label label = 'Nome de usuário' />
                    <Input.Main
                        value = {login?.userName}
                        placeholder = 'nome de usuário' 
                        onChangeAction={(e) => {loginActions?.setName(e.target.value)}} 
                        type="text"
                    />
                </Input.Root>

                <Input.Root>
                    <Input.Label label = 'Senha' />
                    <Input.Wrapper>
                        <Input.Main
                            value= {login?.pass}
                            placeholder = 'Digite sua senha...'
                            onChangeAction={(e) => {loginActions?.setPass(e.target.value)}}
                            type= {
                                login?.passVisibility? 'password' : 'text'
                            }
                        />

                        <Input.Icon icon= { login?.passVisibility? AiOutlineEye: AiOutlineEyeInvisible}/>
                    </Input.Wrapper>
                </Input.Root>


                <Button.Root style = 'default' onAction={() => loginActions?.login()}>
                    <Button.Label label = 'Entrar'/>
                </Button.Root>
                
                
            </form>
        </div>
    )
}