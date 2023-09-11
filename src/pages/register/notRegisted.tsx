import Button from "../../components/button";
import { ButtonLabel } from "../../components/button/buttonLabel";
import { useNavigate } from "react-router-dom";

export function NotRegister(){
    const navigate = useNavigate();
    return (
        <div className = 'flex justify-center align-center flex-col gap-2'>
            <h1 className = 'text-lg text-center'>Voce precisa estar <strong>autenticado </strong>para registrar produtos</h1>
            <Button.Root style = 'default' onAction={() => navigate('/login')}>
                <ButtonLabel label="Fazer o Login"/>
            </Button.Root>
        </div>
    )
}