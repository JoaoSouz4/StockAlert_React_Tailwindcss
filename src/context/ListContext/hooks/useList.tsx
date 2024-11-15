import { useContext } from "react";
import { ListContext } from "..";
import { listProps } from "..";

export function useList(){
    const { defaultList, setList, setAmount } = useContext(ListContext);

    return {
        changeListByInput: (text: string) => {
            
            const copyData = defaultList;

            const filteredData = copyData?.filter((obj: listProps) => {
                return obj.name.includes(text)
            });
            setAmount(filteredData?.length)
            setList(filteredData)
        },
        
    }
}
