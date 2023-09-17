import { apiAuthenticated } from "../config"

async function checkToken(token: string){

    const isValid = await fetch(`${apiAuthenticated}/get/checktoken`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },

    })
    return await isValid.json();
}

export default checkToken