import { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect} from "react"
import { getProducts } from "../../services/api/get/getProducts";

export interface ListProps {
    name: string,
    registedBy: string,
    createdAt: Date,
    status: string,
    categorie: string,
    _id: string,
}

interface DefaultValuesProps {
    currentList: ListProps[],
    defaultList: ListProps[],
    amount: number,
    isFetching: boolean,
    section: string
}


interface ContextProps {
    listStates: DefaultValuesProps,
    setListStates: Dispatch<SetStateAction<DefaultValuesProps>>
}

const defaultValues = {
    currentList: [],
    defaultList: [],
    amount: 0,
    isFetching: true,
    section: ''
}

export const ListContext = createContext<ContextProps | null>(null);

export function ListProvider ({children}: {children: ReactNode}){

    const [ listStates, setListStates ] = useState<DefaultValuesProps>(defaultValues);

    useEffect(() => {

        setListStates((prevStates) => ({...prevStates, isFetching: true}))
        getProducts()
            .then((res) => {
                setListStates((prevStates) => ({
                    ...prevStates,
                    defaultList: res.data.products,
                }));
                return res.data.products
            })
            .then((products) => {
                const filteredData = products.filter((obj: ListProps)=> obj.categorie == 'cape');
                
                setListStates((prevStates) => ({
                    ...prevStates,
                    isFetching: false,
                    amount: filteredData.length,
                    section: 'cape',
                    currentList: filteredData
                }))
            })
    }, []);

    return (
        <ListContext.Provider value = {{listStates, setListStates}}>
            {children}
        </ListContext.Provider>
    )
}
