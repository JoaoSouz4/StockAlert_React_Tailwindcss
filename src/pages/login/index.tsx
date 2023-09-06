import Input from "../../components/input"
import { Link } from "react-router-dom"
import Button from "../../components/button"

export default function Login(){
    return (
        <div className = 'flex justify-center items-center h-full'>
            <form className="flex flex-col gap-4 w-full">

                <h1 className = 'text-center text-2xl mb-4 text-blue-600 font-bold'>Login</h1>
                <Input.Root>
                    <Input.Label label = 'Nome de usuário' />
                    <Input.Main 
                        placeholder = 'nome de usuário' 
                        onChangeAction={() => {}} 
                        type="text"
                    />
                </Input.Root>

                <Input.Root>
                    <Input.Label label = 'Senha' />
                    <Input.Main 
                        placeholder = 'Digite sua senha...' 
                        onChangeAction={() => {}} 
                        type="text"
                    />
                </Input.Root>

                
                <Link 
                    to = '/'
                    className = 'flex justify-end text-sm underline decoration-blue-400 text-blue-700'
                >
                    Criar uma conta
                </Link>

                <Button.Root>
                    <Button.Label label = 'Entrar'/>
                </Button.Root>
                
                
            </form>
        </div>
    )
}