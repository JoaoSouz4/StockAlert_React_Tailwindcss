import { Categories } from "./Categories";
import { Interface } from "./Interface";
import List from "./List";

export default function Home(){
    return (
        <div className = 'flex flex-col h-full' >
            <Categories />
            <Interface />
            <List />
        </div>
    )
}