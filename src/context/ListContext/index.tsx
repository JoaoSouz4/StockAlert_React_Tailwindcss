import { createContext, ReactNode, useState, useEffect} from "react"
import { getOneList } from "../../services/api/get/getOneList";

interface listProps {
    
    name: string,
    registedBy: string,
    createdAt: Date,
    status: string,
    categorie: string,
    _id: string
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
    buildActions: buildActionsProps | undefined

}


export const ListContext = createContext<ListContextProps>(
    { 
        list: undefined,
        setList: () => [], 
        amount: undefined, 
        setAmount: ()=>{}, 
        buildActions: undefined
    });

export function ListProvider ({children}: {children: ReactNode}){

    const [list, setList] = useState<listProps[] | undefined>();
    const [amount, setAmount] = useState<number | undefined>();

    const buildActions = {
        showcapes: () => getOneList('cape').then(res => {setList(res.data.products); setAmount(res.data.currentAmount)}),
        showmobileFilms: () => getOneList('mobileFilm').then(res => {setList(res.data.products); setAmount(res.data.currentAmount)}),
        showDisplays: () => getOneList('display').then(res => {setList(res.data.products); setAmount(res.data.currentAmount)}),
        showAcessories: () => getOneList('accessorie').then(res => {setList(res.data.products); setAmount(res.data.currentAmount)}),
        showCables: () => getOneList('cable').then(res => {setList(res.data.products); setAmount(res.data.currentAmount)})
    }

    useEffect(() => {
        getOneList('cape').then(res => {
            setList(res.data.products)
            setAmount(res.data.currentAmount)
            }
        )
    }, [])
    return (
        <ListContext.Provider value = {{list, setList, amount, setAmount, buildActions}}>
            {children}
        </ListContext.Provider>
    )
}
