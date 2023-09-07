import { createContext, ReactNode, useState, useEffect} from "react"
import { getAllProducts } from "../../services/api/get/getAllProducts";

interface listProps {
    
    name: string,
    registedBy: string,
    createdAt: Date,
    status: string,
    categorie: string,
    _id: string
}


export const ListContext = createContext<{ list: listProps[] | undefined, setList: React.Dispatch<React.SetStateAction<listProps[] | undefined>> }>({ list: undefined, setList: () => [] });

export function ListProvider ({children}: {children: ReactNode}){

    const [list, setList] = useState<listProps[] | undefined>();

    useEffect(() => {
        getAllProducts().then(res => setList(res.data.products))
    }, [])
    return (
        <ListContext.Provider value = {{list, setList}}>
            {children}
        </ListContext.Provider>
    )
}
