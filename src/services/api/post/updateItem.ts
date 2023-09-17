import { urldefault } from "../config"

export async function updateItem(id:string, name:string, categorie:string, status:string){
    const response = await fetch(`${urldefault}/update/updateitem/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({
            name: name,
            status: status,
            categorie: categorie
        })
    })

    return await response.json();
    
}