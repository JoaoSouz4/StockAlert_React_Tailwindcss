import { ListItem } from "./ListItem"
import { useContext } from "react";
import { ListContext } from "../../../context/ListContext";
import Spinner from "../../../components/spinner";
import Modal from "../../../components/modal";
import { ModalUpdateContext } from "../context/modalUpdateItemContext";
import { FormUpdateItem } from "../formUpdateItem";

export default function List(){
    const {list, isFetching} = useContext(ListContext);
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

        <div className = 'bg-slate-200 rounded-xl w-full h-full p-2 overflow-hidden'>
            {!list || isFetching? 
                <div className = 'wull h-full'>
                    <Spinner />
                </div> 
            : 
                <div className="max-h-full overflow-y-auto">
                    <div className = 'flex flex-col gap-2 p-2'>
                        {list?.map( item => {
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
        </>
        
    )
}