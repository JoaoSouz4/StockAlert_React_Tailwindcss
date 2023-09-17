import { urldefault } from "../config";

export async function getOneProduct(id: string){
    const response = await fetch(`${urldefault}/get/getoneproduct/${id}`)
    return await response.json();
}