import { getProducts } from "../../../../services/api/get/getProducts";

export async function refreshData(){
    const data = await getProducts();
    return data
}