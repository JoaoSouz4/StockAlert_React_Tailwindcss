import Button from "../../components/button"
import DropDown from "../../components/dropdow"
import Input from "../../components/input"
import {BsArrowDownShort} from 'react-icons/bs';
import Radio from "../../components/radio";
import {useContext} from 'react';
import { FormRegisterContext } from "../../context/formRegister";

export default function RegisterProduct(){

    const {formRegister, buildActions} = useContext(FormRegisterContext);

    return (
        <div className = 'h-full'>
            <div className = ' h-full flex justify-center items-center'>
                <form className = 'flex flex-col gap-4 w-full'>

                    <h1 className = 'text-center text-2xl font-bold text-blue-600 mb-4'>Registrar Produto</h1>
                    <Input.Root>
                        <Input.Label label= {'Nome do Produto'}/>
                        <Input.Main
                            value={formRegister?.name}
                            onChangeAction={(e) => buildActions?.setName(e.target.value)}
                            
                            type='text'
                        />
                    </Input.Root>

                    <DropDown.Root>
                        <DropDown.label label = 'Categoria'/>
                        <DropDown.Input
                            value = {formRegister?.categorie}
                            placeholder="selecione..."
                            type = 'text'
                            onChangeAction={() => {}}
                        />
                        <DropDown.Button 
                            styleButton="leaked"
                            icon = {BsArrowDownShort}
                        />

                        <DropDown.List>
                            <DropDown.Item nameItem="Capinha" value = 'cape'/>
                            <DropDown.Item nameItem="Película" value = 'mobileFilm'/>
                            <DropDown.Item nameItem="Cabos" value = 'cable'/>
                            <DropDown.Item nameItem="Acessórios" value = 'accessorie'/>
                            <DropDown.Item nameItem="Displays" value = 'display'/>
                        </DropDown.List>
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
                        onAction={() => {console.log(formRegister)}}
                    >
                        <Button.Label label= 'Registrar' />
                    </Button.Root>

                </form>
            </div>
        </div>
    )
}