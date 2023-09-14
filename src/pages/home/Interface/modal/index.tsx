import Button from "../../../../components/button"
import { ModalContext } from "../../../../context/ModalContext";
import { ListContext } from "../../../../context/ListContext";
import { useContext } from "react";


export function Modal(){
    const {modalActions} = useContext(ModalContext);
    const {buildActions: listActions, isFetching} = useContext(ListContext);
    return(
        <div className = {`z-40 top-0  left-0 w-full fixed bg-[rgb(32,32,32,35%)] h-full`}>
            <div className = 'flex justify-center items-center h-full z-40'>
                <div className = ' w-[65%] bg-white shadow-lg  p-4 border-2 rounded-2xl animate-fade'>
                    <div className = 'flex flex-col items-center gap-4'>
                        <div className  = 'text-center'>
                            Deseja realmente remover todos os items da lista?
                        </div>
                        <div className = 'flex items-center justify-center w-full gap-2'>
                            <Button.Root
                                style = 'leaked'
                                onAction={() => modalActions.closeModal()}
                            >
                                <Button.Label color = 'text-blue-600'label = 'Cancelar'/>
                            </Button.Root>
                            <Button.Root
                                disabled = {isFetching}
                                style = 'delete'
                                onAction={() => {
                                    listActions?.removeCategorieItems();
                                    modalActions.closeModal();
                                    }
                                }
                            >
                                <Button.Label label = 'Remover'/>
                            </Button.Root>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}