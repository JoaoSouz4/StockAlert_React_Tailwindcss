import {createContext, ReactNode, useState, useContext} from 'react';
import { updateItem } from '../../../../services/api/post/updateItem';
import { AlertContext } from '../../../../context/AlertContext';
import { ModalUpdateContext } from '../modalUpdateItemContext';
import { ListContext } from '../../../../context/ListContext';


interface DefaultActionsProps {
    updateTarget: (id: string) => void
    setIsReady : () => void
    submit: (name: string, categorie: string, status: string) => void
}
const defaultActions: DefaultActionsProps = {
    updateTarget: () => {},
    setIsReady : () => {},
    submit: () => {
    },

}

export const UpdateItemContext = createContext({
    formUpdate: {
        isReady: false,
        targetItemId: '',
        isLoad: false,
    },
    formUpdateActions: defaultActions
});

export function FormUpdateProvider({children}: {children: ReactNode}){

    const {openAlert} = useContext(AlertContext);
    const {modalActions} = useContext(ModalUpdateContext);
    const {setList, setAmount} = useContext(ListContext);


    const [formUpdate, setState] = useState({
        targetItemId: '',
        isReady: false,
        isLoad: false,
    })
    const formUpdateActions = {
        updateTarget: (id: string) => setState({...formUpdate, targetItemId: id}),
        setIsReady : () => setState({...formUpdate, isReady: true}),
        submit: (name: string, categorie: string, status: string) => {
            setState({...formUpdate, isLoad: true})
            updateItem(formUpdate.targetItemId, name, categorie, status)
                .then(res => {
                    setState({...formUpdate, isLoad: false})
                    modalActions.closeModal();
                    setState({...formUpdate, isReady: false})
                    if(res.isSucess){
                        openAlert('sucess', 'Item atualizado');
                        setList(res.currentList);
                        setAmount(res.currentAmount)
                    } else {
                        openAlert('warning', res.requestMessage, 2000)
                    }
                });
        }
    }

    return(
        <UpdateItemContext.Provider value = {{formUpdate, formUpdateActions}}>
            {children}
        </UpdateItemContext.Provider>
    )
}