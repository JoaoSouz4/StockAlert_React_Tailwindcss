import { createContext, ReactNode, useState, useEffect} from "react"
import { getOneList } from "../../services/api/get/getOneList";

interface listProps {
    
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
}

interface ListContextProps {
    amount: number | undefined,
    setAmount: React.Dispatch<React.SetStateAction<number| undefined>>,
    list: listProps[] | undefined,
    setList: React.Dispatch<React.SetStateAction<listProps[] | undefined>>,
    buildActions: buildActionsProps | undefined,
    isFetching: boolean 

}


export const ListContext = createContext<ListContextProps>(
    { 
        list: undefined,
        setList: () => [], 
        amount: undefined, 
        setAmount: ()=>{}, 
        buildActions: undefined,
        isFetching: true
    });

export function ListProvider ({children}: {children: ReactNode}){

    const [list, setList] = useState<listProps[] | undefined>();
    const [amount, setAmount] = useState<number | undefined>();
    const [isFetching, setIsFetching] = useState<boolean>(true)

    const buildActions = {
        showcapes: () => {
            setIsFetching(true)
            getOneList('cape')
                .then(res => {
                    setList(res.data.products);
                    setAmount(res.data.currentAmount); 
                    setIsFetching(false)
                })
        },

        showmobileFilms: () => {
            setIsFetching(true)
            getOneList('mobileFilm')
                .then(res => {
                    setList(res.data.products); 
                    setAmount(res.data.currentAmount); 
                    setIsFetching(false)
                })
        },

        showDisplays: () => {
            setIsFetching(true)
            getOneList('display')
                .then(res => {
                    setList(res.data.products); 
                    setAmount(res.data.currentAmount), 
                    setIsFetching(false)
            })
        },

        showAcessories: () => {
            setIsFetching(true)
            getOneList('accessorie')
                .then(res => {
                    setList(res.data.products); 
                    setAmount(res.data.currentAmount); 
                    setIsFetching(false)
            })
        },
        showCables: () => {
            setIsFetching(true)
            getOneList('cable')
                .then(res => {
                    setList(res.data.products); 
                    setAmount(res.data.currentAmount); 
                    setIsFetching(false)
            })
        },
    }

    useEffect(() => {
        getOneList('cape')
            .then(res => {
                setList(res.data.products)
                setAmount(res.data.currentAmount)
                setIsFetching(false)
            })
    }, [])
    return (
        <ListContext.Provider value = {{list, setList, amount, setAmount, buildActions, isFetching}}>
            {children}
        </ListContext.Provider>
    )
}
