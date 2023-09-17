import { Categories } from "./Categories";
import { Interface } from "./Interface";
import List from "./List";
import { ListProvider } from "../../context/ListContext";
import { ModalUpdateProvider } from "./context/modalUpdateItemContext";
import { FormUpdateProvider } from "./context/updateItemContext";
export default function Home(){
    return (
        <div className = 'flex flex-col h-full' >
            <ListProvider>
                <ModalUpdateProvider>
                    <FormUpdateProvider>
                        <Categories />
                        <Interface />
                        <List />
                        </FormUpdateProvider>
                    </ModalUpdateProvider>
            </ListProvider>
        </div>
    )
}