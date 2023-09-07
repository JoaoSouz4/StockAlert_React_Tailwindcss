import { ListItem } from "./ListItem"
import { useContext } from "react";
import { ListContext } from "../../../context/ListContext";
import Spinner from "../../../components/spinner";


export default function List(){
    const {list} = useContext(ListContext);

    return(
        
        <div className = 'bg-slate-200 rounded-xl w-full h-full p-2 overflow-hidden'>
            {!list ? 
                <div className = 'wull h-full'>
                    <Spinner />
                </div> 
            : 
                <div className="max-h-full overflow-y-auto">
                    <div className = 'flex flex-col gap-2 p-2'>
                        {list?.map( item => {
                            return (
                                <ListItem 
                                    key = {item._id}
                                    name = {item.name}
                                    registedBy= {item.registedBy}
                                    createdAt = {item.createdAt}
                                    status= {item.status}
                                />
                            )
                        })} 
                    </div>
                </div>
            }
        </div>
        
    )
}