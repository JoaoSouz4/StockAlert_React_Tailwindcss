import { createContext, ReactNode, useState, useEffect} from "react"
import { getOneList } from "../../services/api/get/getOneList";
import { removeCategorieItems as remove} from "../../services/api/delete/removeCategorieItem";
import { removeOneItem } from "../../services/api/delete/removeItem";

export interface listProps {
    name: string,
    registedBy: string,
    createdAt: Date,
    status: string,
    categorie: string,
    _id: string,
}

interface buildActionsProps {
    showcapes: () => void,
    showmobileFilms: () => void,
    showDisplays: () => void,
    showAcessories: () => void,
    showCables: () => void,
    removeCategorieItems: () => void,
    removeItem: (nameItem: string) => void,
}

interface ListContextProps {
    amount: number | undefined,
    setAmount: React.Dispatch<React.SetStateAction<number| undefined>>,
    list: listProps[] | undefined,
    setList: React.Dispatch<React.SetStateAction<listProps[] | undefined>>,
    buildActions: buildActionsProps | undefined,
    isFetching: boolean,
    currentList: string,
    defaultList: listProps[] | undefined,
}


export const ListContext = createContext<ListContextProps>(
    { 
        list: undefined,
        defaultList: undefined,
        setList: () => [], 
        amount: undefined, 
        setAmount: ()=>{}, 
        buildActions: undefined,
        isFetching: true,
        currentList: '',
});

export function ListProvider ({children}: {children: ReactNode}){

    
    const [ defaultList, setDefaultList ] = useState([]);
    const [list, setList] = useState<listProps[] | undefined>(defaultList);

    const [amount, setAmount] = useState<number | undefined>();
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [currentList, setCurrentList] = useState<string>('');


    const buildActions = {

        showcapes: () => {
            setIsFetching(true)
            getOneList('cape')
                .then(res => {
                    setDefaultList(res.data.products);
                    setAmount(res.data.currentAmount); 
                    setIsFetching(false);
                    setCurrentList('cape')
                })
        },

        showmobileFilms: () => {
            setIsFetching(true)
            getOneList('mobileFilm')
                .then(res => {
                    setDefaultList(res.data.products); 
                    setAmount(res.data.currentAmount); 
                    setIsFetching(false)
                    setCurrentList('mobileFilm')
                })
        },

        showDisplays: () => {
            setIsFetching(true)
            getOneList('display')
                .then(res => {
                    setDefaultList(res.data.products); 
                    setAmount(res.data.currentAmount), 
                    setIsFetching(false)
                    setCurrentList('display')
            })
        },

        showAcessories: () => {
            setIsFetching(true)
            getOneList('accessorie')
                .then(res => {
                    setDefaultList(res.data.products); 
                    setAmount(res.data.currentAmount); 
                    setIsFetching(false)
                    setCurrentList('accessorie')
            })
        },
        showCables: () => {
            setIsFetching(true)
            getOneList('cable')
                .then(res => {
                    setDefaultList(res.data.products); 
                    setAmount(res.data.currentAmount); 
                    setIsFetching(false)
                    setCurrentList('cable')
            })
        },

        removeCategorieItems: async () => {
            setIsFetching(true);
            await remove(currentList)
                .then(res => {
                    
                    setDefaultList(res.requestData.currentList)
                    setAmount(res.requestData.currentAmount)
                    setIsFetching(false)

                })
        },

        removeItem: (nameItem: string) => {
            setIsFetching(true);
            removeOneItem(nameItem, currentList)
                .then(res => {
                    setList(res.requestData.currentList);
                    setAmount(res.requestData.currentAmount);
                    setIsFetching(false);
                })
        }
    }

    useEffect(() => {
        getOneList('cape')
            .then(res => {
                setDefaultList(res.data.products)
                setAmount(res.data.currentAmount)
                setIsFetching(false)
                setCurrentList('cape')
            })
    }, []);

    useEffect(() => {
        setList(defaultList)
    },[defaultList])

    return (
        <ListContext.Provider value = {{defaultList, list, setList, amount, setAmount, buildActions, isFetching, currentList}}>
            {children}
        </ListContext.Provider>
    )
}
