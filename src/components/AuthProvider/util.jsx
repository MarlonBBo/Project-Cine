/* eslint-disable react-refresh/only-export-components */
import { Api } from "../../services/axios";

export function setUserLocalStorage(user){
    localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStrorage (){ 
    const json = localStorage.getItem('u')

    if(!json){
        return null
    }

    const user = JSON.parse(json)
    return user
}


export async function LoginRequest(email, password){
    try{
        const request = await Api.post('/', {email, password})

        return request.data
    }catch(error){
        return null
    }
}