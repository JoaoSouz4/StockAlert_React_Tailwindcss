import { apiAuthenticated } from "../config"

interface LoginProps {
    userName: string,
    pass: string
}

export async function loginUser(login: LoginProps){
    const loginFetch = await fetch(`${apiAuthenticated}/post/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: login.userName,
            pass: login.pass,
        })
    })

    return await loginFetch.json()
}