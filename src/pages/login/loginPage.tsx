import Input from "../../components/input"
import Button from "../../components/button"
import { LoginContext } from "../../context/loginContext";
import { useContext } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import Spinner from "../../components/spinner";

export  function LoginPage(){

    const {login, loginActions, isLoad} = useContext(LoginContext);

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
                                login?.passVisibility? 'text' : 'password'
                            }
                        />

                        <Input.Icon icon= { login?.passVisibility? AiOutlineEye: AiOutlineEyeInvisible}/>
                    </Input.Wrapper>
                </Input.Root>


                <Button.Root 
                    style = 'default' 
                    onAction={() => loginActions?.login()}
                    disabled = {isLoad}
                    >
                    {!isLoad ?<Button.Label label = 'Entrar'/>: <Spinner color = 'white'/>}
                </Button.Root>
                
                
            </form>
        </div>
    )
}