export function getToken(){
    
    const token = localStorage.getItem('token');
    console.log('achamos este token' + token)
    if(token) return token
    return false
}

export function saveToken(token: string){
    localStorage.setItem('token', token)
}