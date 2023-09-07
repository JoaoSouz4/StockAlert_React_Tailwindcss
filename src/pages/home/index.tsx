import { Categories } from "./Categories";
import { Interface } from "./Interface";
import List from "./List";
import { ListProvider } from "../../context/ListContext";


export default function Home(){
    return (
        <div className = 'flex flex-col h-full' >
            <ListProvider>
                <Categories />
                <Interface />
                <List />
            </ListProvider>
        </div>
    )
}