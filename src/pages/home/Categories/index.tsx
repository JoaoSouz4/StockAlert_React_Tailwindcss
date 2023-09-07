import Title from "../../../components/title"
import { TitleText } from "../../../components/title/TitleText"
import { OptionCategorie } from "./Option"
import {BiSolidCategory} from 'react-icons/bi'
import {categoriesArray as array} from "./categoriesArray"

export function Categories(){
    return(
        <div className = 'w-full'>
            <Title.Root>
                <Title.Icon icon = {BiSolidCategory} />
                <TitleText text = 'Categorias' />
            </Title.Root>
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