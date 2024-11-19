import { urldefault } from "../config";

export async function getProducts(){
    const response = await fetch(`${urldefault}/get/getallproducts`)
    return await response.json();
}