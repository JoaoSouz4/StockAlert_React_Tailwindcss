import Button from "../../components/button"
import DropDown from "../../components/dropdow"
import Input from "../../components/input"
import {BsArrowDownShort} from 'react-icons/bs';
import Radio from "../../components/radio";

export default function RegisterProduct(){
    return (
        <div className = 'h-full'>
            <div className = ' h-full flex justify-center items-center'>
                <form className = 'flex flex-col gap-4 w-full'>

                    <h1 className = 'text-center text-2xl font-bold text-blue-600 mb-4'>Registrar Produto</h1>
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

                    <Radio.Root>
                        <Radio.Input 
                            label = 'Poucas unidades'
                            group="status"
                        />
                        <Radio.Input 
                            label = 'Em falta'
                            group="status"
                        />
                    </Radio.Root>

                    <Button.Root 
                        style = 'default'
                        onAction={() => {}}
                    >
                        <Button.Label label= 'Registrar' />
                    </Button.Root>

                </form>
            </div>
        </div>
    )
}