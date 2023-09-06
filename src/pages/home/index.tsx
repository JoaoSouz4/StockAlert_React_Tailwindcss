import Title from "../../components/title"
import { Categories } from "./Categories";
import List from "./List";

export default function Home(){
    return (
        <div className = 'flex flex-col h-full' >
            <Categories />
            <List />
        </div>
    )
}