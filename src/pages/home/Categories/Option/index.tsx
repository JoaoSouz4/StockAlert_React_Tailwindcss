import {useContext} from 'react'
import { ListContext } from '../../../../context/ListContext'

interface OptionCategorieProps {
    label: string,
    categorie: string,
}

export function OptionCategorie({label, categorie}: OptionCategorieProps){

    const {currentList, buildActions} = useContext(ListContext);

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
            className = {` ${currentList == categorie? 'bg-blue-600': 'bg-slate-200'} duration-300 ease-in rounded-2xl p-3`}
            onClick={handleClick}
        >
            <label className = {`${currentList == categorie? 'text-white': 'text-slate-600'}`}>{label}</label>
        </div>
    )
}