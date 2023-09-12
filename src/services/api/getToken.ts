export function getToken(){
    
    const token = localStorage.getItem('token');
    if(token) return token
    return false
}

export function saveToken(token: string){
    localStorage.setItem('token', token)
}