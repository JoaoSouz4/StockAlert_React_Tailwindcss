import { useListContext } from "./useListContext";
import { ListProps } from "..";
import { removeOneItem } from "../../../services/api/delete/removeItem";
import { refreshData } from "./functions/refreshState";
import { removeCategorieItems } from "../../../services/api/delete/removeCategorieItem";

export function useList() {
    
    const { listStates, setListStates } = useListContext();

    const changeListByMenuCategorie = (categorie: string) => {

        setListStates((prevStates) => ({ ...prevStates, isFetching: true }));
        const filteredData = listStates.defaultList.filter((obj) => obj.categorie === categorie);

        setListStates((prevStates) => ({
            ...prevStates,
            amount: filteredData.length,
            currentList: filteredData,
            section: filteredData[0]?.categorie ?? "",
            isFetching: false,
        }));
    };

    const refresh = async () => {{
        setListStates((prevStates) => ({...prevStates, isFetching: true}))
        const newData = await refreshData();
        const section = listStates.section;
        const filteredList = newData.data.products.filter((obj: any) => obj.categorie == section);
        setListStates((prevStates) => ({
            ...prevStates,
            defaultList: newData.data.products,
            currentList: filteredList,
            isFetching: false,
            amount: filteredList.length
        }))
    }};

    
    return {
        section: listStates.section,
        amount: listStates.amount,
        isLoading: listStates.isFetching,
        currentList: listStates.currentList,
        changeListByMenuCategorie,
        refresh,
        changeListByInput: (text: string) => {
            if (!text) {
                return changeListByMenuCategorie(listStates.section);
            }

            const copyData = listStates.currentList;

            const filteredData = copyData?.filter((obj: ListProps) => {
                return obj.name.includes(text);
            });

            setListStates({
                ...listStates,
                amount: filteredData.length,
                currentList: filteredData,
            });
        },
        removeItemList: async  (nameItem: string) => {
            setListStates((prevStates) => ({
                ...prevStates,
                isFetching: true
            }));

            await removeOneItem(nameItem, listStates.section);
            await refresh()  
        },
        removeCategorie: async (section: string) => {
            setListStates((prevStates) => ({...prevStates, isFetching: true}));
            await removeCategorieItems(section);
            await refresh();
        }
    };
}
