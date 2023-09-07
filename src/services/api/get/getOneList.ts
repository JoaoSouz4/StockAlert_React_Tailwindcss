import { urldefault } from "../config"

export async function getOneList(listname: string){
    const products = await fetch(`${urldefault}/get/getonelist/${listname}`);
    return await products.json();   
}