
import { apiAuthenticated } from "../config";
export async function updateUserPass (userId: string | number, pass: string){
    const newPass = await fetch(`${apiAuthenticated}/post/updatepass`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            id: userId,
            pass: pass,
        })
    })

    return await newPass.json();
}