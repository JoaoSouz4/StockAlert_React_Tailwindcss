import { ListItem } from "./ListItem"
import { useContext } from "react";
import Spinner from "../../../components/spinner";
import Modal from "../../../components/modal";
import { ModalUpdateContext } from "../context/modalUpdateItemContext";
import { FormUpdateItem } from "../formUpdateItem";
import { useList } from "../../../context/ListContext/hooks/useList";

export default function List(){
    const { currentList, isLoading } = useList();

    const {isOpen} = useContext(ModalUpdateContext);
    return(
        <>

            {isOpen == true ?
                <Modal.Wrapper>
                    <Modal.Root>
                        <FormUpdateItem /> 
                    </Modal.Root>
                </Modal.Wrapper>
            : null
            }

            <div className = 'px-4 overflow-hidden h-full'>
                <div className = 'bg-slate-200 rounded-xl w-full h-full p-2 '>
                    {!currentList || isLoading?
                        <div className = 'wull h-full'>
                            <Spinner />
                        </div>
                    :
                        <div className="max-h-full overflow-y-auto">
                            <div className = 'flex flex-col gap-2 p-2'>
                                {currentList?.map( item => {
                                    return (
                                        <ListItem
                                            id = {item._id}
                                            key = {item._id}
                                            name = {item.name}
                                            registedBy= {item.registedBy}
                                            createdAt = {item.createdAt}
                                            status= {item.status}
                                            categorie = {item.categorie}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
        
    )
}