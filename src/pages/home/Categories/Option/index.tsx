import { useList } from "../../../../context/ListContext/hooks/useList"

interface OptionCategorieProps {
    label: string,
    categorie: string,
}

export function OptionCategorie({label, categorie}: OptionCategorieProps){

    const { section, changeListByMenuCategorie } = useList();

    function handleClick(){
        changeListByMenuCategorie(categorie)
    }
    return (
        <div
            onClick = {handleClick}
            className = {`${categorie == section ? 'bg-blue-500': 'bg-slate-200'} duration-300 ease-in rounded-2xl p-3`}
        >
            <label className = {`${categorie == section ? 'text-white': 'text-slate-600'}`}>{label}</label>
        </div>
    )
}