import { urldefault } from "../config";

interface Product {
    name: string,
    categorie: string,
    status: string,
    registedBy: string
}

export async function registerProduct({name, categorie, status, registedBy}: Product){
    const registerProduct = await fetch(`${urldefault}/post/registerproduct`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            categorie: categorie,
            status: status,
            registedBy: registedBy
        })
    });

    return await registerProduct.json();
}