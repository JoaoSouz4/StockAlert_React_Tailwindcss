import { urldefault } from "../config";

export async function removeOneItem(name: string, categorie: string){

    const res = await fetch(`${urldefault}/delete/removeitem/${name}/${categorie}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'Application/json'}
    })

    return await res.json();
}