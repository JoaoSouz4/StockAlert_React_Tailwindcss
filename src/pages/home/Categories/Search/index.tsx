import { LuFolderSearch } from "react-icons/lu";
import { useList } from "../../../../context/ListContext/hooks/useList";

export function Search(){
    const {changeListByInput} = useList();

    return (
        <div className = 'border border-sky-600  h-[2.3rem] p-2 rounded-full shadow-inner flex items-center'>
            <div className = 'flex items-center w-full'>
                <div className = 'ml-2'>
                    <LuFolderSearch className = 'text-sky-600'/>
                </div>
                <input
                    onChange = {(e) => changeListByInput(e.target.value)}
                    className = ' text-sky-600 focus:outline-none ml-2  bg-transparent flex-grow'
                    placeholder = 'buscar produtos registrados... '
                />
            </div>
        </div>
    )
}