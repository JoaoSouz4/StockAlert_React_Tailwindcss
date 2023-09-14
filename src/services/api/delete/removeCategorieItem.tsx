import { urldefault } from "../config";

export async function removeCategorieItems(categorie: string){
    const deletedItems = await fetch(`${urldefault}/delete/removecategorie/${categorie}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'Application/json'
        },
    })  

    return await deletedItems.json();
}