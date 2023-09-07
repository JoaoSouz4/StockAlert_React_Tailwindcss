import { urldefault } from "../config"

export async function getAllProducts(){
    const products = await fetch(`${urldefault}/get/getallproducts`);
    return await products.json();   
}