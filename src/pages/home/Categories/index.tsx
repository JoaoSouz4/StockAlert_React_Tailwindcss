import { OptionCategorie } from "./Option"
import {categoriesArray as array} from "./categoriesArray"
import { Search } from './Search'

export function Categories(){
    return(
        <div className = 'w-full'>
            <Search />
            <div className = 'overflow-x-auto pb-3'>
                <div className = 'flex items-center gap-3 mt-3'>
                    {
                        array.map( item => {
                            return (
                                <OptionCategorie
                                    key = {item.id}
                                    label= {item.name}
                                    categorie = {item.categorie}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}