import DropDown from "../../components/dropdow";
import Form from "../../components/form";
import Input from "../../components/input";
import {BsArrowDownShort} from 'react-icons/bs'
import Radio from "../../components/radio";
import {useContext, useEffect, useState} from 'react';
import { ModalUpdateContext } from "./context/modalUpdateItemContext";
import { UpdateItemContext } from "./context/updateItemContext";
import Spinner from "../../components/spinner";
import { getOneProduct } from "../../services/api/get/getOneProduct";
import { AlertContext } from "../../context/AlertContext";

export function FormUpdateItem(){
    const { modalActions} = useContext(ModalUpdateContext);
    const {formUpdate, formUpdateActions} = useContext(UpdateItemContext);
    const {openAlert} = useContext(AlertContext);

    const [FormState, setFormState] = useState({
        name: '',
        categorie: '',
        status: ''
    })

    useEffect(() => {
        getOneProduct(formUpdate.targetItemId)
            .then( (res) => {
                setFormState({
                    name: res.requestData.name,
                    categorie: res.requestData.categorie,
                    status: res.requestData.status
                })
                formUpdateActions.setIsReady();
            })
    }, [])
    return (
            <div>
                {
                    formUpdate.isReady?
                        <Form.Root>
                        <Form.Title title = {'Atualizar Item'}/>
                    <Form.Content>
                        <Input.Root>
                            <Input.Label label = 'nome'/>
                            <Input.Wrapper>
                                <Input.Main
                                    type = {'text'}
                                    value = {FormState.name}
                                    onChangeAction={(e) => setFormState({...FormState, name: e.target.value})}
                
                                />
                            </Input.Wrapper>
                        </Input.Root>
                        <DropDown.Root>
                            <DropDown.label label = 'Categoria'/>
                            <DropDown.Input
                                type = 'text'
                                value = {FormState.categorie}
                                onChangeAction={(e :any) => setFormState({...FormState, categorie: e})
                            }

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
                                onAction = {(value: string) => setFormState({...FormState, status: value})}
                                label = 'Poucas unidades'
                                value = 'few'
                                group="status"
                            />
                            <Radio.Input
                                onAction = {(value: string) => setFormState({...FormState, status: value})}
                                label = 'Em falta'
                                value = 'empty'
                                group="status"
                            />
                        </Radio.Root>
                    </Form.Content>
                    <Form.Actions>
                        <Form.Action
                            buttonText='Cancelar'
                            onAction={() =>  {
                                modalActions.closeModal()
                                setFormState({name: '', categorie: '', status: ''})
                                }
                            }
                            styleButton= {'leaked'}
                        />
                        <Form.Action
                            isLoad={formUpdate.isLoad}
                            buttonText='Atualizar'
                            onAction={() => {
                                if(!FormState.name || !FormState.categorie || !FormState.status) return openAlert('warning', 'preencha todos os campos');
                                formUpdateActions.submit(FormState.name, FormState.categorie, FormState.categorie)
                            }}
                            styleButton= {'default'}
                        />
                    </Form.Actions>
                        </Form.Root>
                    :
                        <Spinner />
                }
                
            </div>
            
    )
}