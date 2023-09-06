import Input from "../../components/input"
import { Link } from "react-router-dom"

export default function Login(){
    return (
        <div className = 'flex justify-center items-center h-full'>
            <form className="flex flex-col gap-4 w-full">
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
                
                
            </form>
        </div>
    )
}