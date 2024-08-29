import { Api } from "../services/api"
import { IUser } from "./types";
import Cookies from "js-cookie";

export function setUserLocalStorage(user: IUser | null){
    Cookies.set('u', JSON.stringify(user))
}

export function getUserLocalStorage (){
    const json = Cookies.get('u')

    if(!json){
        return null
    }

    const user = json

    return user;
}

export async function LoginRequest (email: string, password: string) {
    try {
        
        const request = await Api.post('signin', {email, password})

        return request.data;

    }catch(error){
        console.log(error)
        return null
    }
}

    export async function RegisterRequest (email: string, password: string, name: string) {
        try {
            
            const request = await Api.post('signup', {email, password, name})
    
            return request.data;
    
        }catch(error){
            console.log(error)
            return null
        }    
}