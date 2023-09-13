import Input from '../../components/input'
import Button from '../../components/button';
import { useContext } from 'react';
import { UpdatePassContext } from '../../context/UpdatePassContext';
import Spinner from '../../components/spinner';

export function UpdatePass(){
    const {state, actions} = useContext(UpdatePassContext);


    return(
        <div className = 'w-full h-full flex justify-center items-center'>
            <form className = 'flex flex-col gap-4 w-full'>

                <h1 className='text-center text-2xl mb-4 text-blue-600 font-bold'>Redefinir Senha</h1>
                <Input.Root>
                    <Input.Label label = {'Crie uma nova senha'}/>
                    <Input.Wrapper>
                        <Input.Main type = {'text'} value = {state.pass} onChangeAction={(e) => {actions.updatePass(e.target.value)}}/>
                    </Input.Wrapper>
                </Input.Root>

                <Input.Root>
                    <Input.Label label = {'Confirme a nova senha'}/>
                    <Input.Wrapper>
                        <Input.Main type = {'text'} value = {state.confirmPass} onChangeAction={(e) => {actions.updateConfirmPass(e.target.value)}}/>
                    </Input.Wrapper>
                </Input.Root>

                <Button.Root disabled = {state.isLoad} style = 'default' onAction={() => {actions.updateNewPass()}}>
                    {!state.isLoad? <Button.Label label = 'Atualizar'/> : <Spinner color = 'white'/>}
                </Button.Root>
            </form>
        </div>
    )
}