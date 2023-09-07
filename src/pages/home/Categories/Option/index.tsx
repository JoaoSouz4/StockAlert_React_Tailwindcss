import {useContext} from 'react'
import { ListContext } from '../../../../context/ListContext'

interface OptionCategorieProps {
    label: string,
    categorie: string,
}

export function OptionCategorie({label, categorie}: OptionCategorieProps){

    const {buildActions} = useContext(ListContext);

    const handleClick = () => {
        switch (categorie){
            case 'cape': return buildActions?.showcapes()
            case 'mobileFilm': return buildActions?.showmobileFilms()
            case 'cable': return buildActions?.showCables()
            case 'accessorie': return buildActions?.showAcessories()
            case 'display': return buildActions?.showDisplays()
        }
    }
    return (
        <div
            className = 'bg-slate-200 rounded-lg p-3'
            onClick={handleClick}
        >
            <label>{label}</label>
        </div>
    )
}