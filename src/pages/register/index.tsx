import Button from "../../components/button"
import DropDown from "../../components/dropdow"
import Input from "../../components/input"
import {BsArrowDownShort} from 'react-icons/bs';

export default function RegisterProduct(){
    return (
        <div className = 'h-full'>
            <div className = ' h-full flex justify-center items-center'>
                <form className = 'flex flex-col gap-4 w-full'>
                    <Input.Root>
                        <Input.Label label= {'Nome do Produto'}/>
                        <Input.Main 
                            placeholder="" 
                            onChangeAction={() => {} }
                            type = 'text'
                        />
                    </Input.Root>

                    <DropDown.Root>
                        <DropDown.label label = 'Categoria'/>
                        <DropDown.Input 
                            placeholder="selecione..."
                            type = 'text'
                            onChangeAction={() => {}}
                        />
                        <DropDown.Button 
                            onAction={() => {}}
                            styleButton="leaked"
                            icon = {BsArrowDownShort}
                        />
                    </DropDown.Root>

                    <Button.Root style = 'default'>
                        <Button.Label label= 'Registrar' />
                    </Button.Root>
                </form>
            </div>
        </div>
    )
}