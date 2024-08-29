import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext} from "./types";
import { getUserLocalStorage, LoginRequest, RegisterRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext)


export const AuthProvider = ({ children }: IAuthProvider) =>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [user, setUser] = useState<any>(null)

    useEffect(()=> {
        const user = getUserLocalStorage()

        if(user){
            setUser(user)
        }
    },[])

    async function authenticate (email: string, password: string){
        const response = await LoginRequest (email, password)

        const payload = {name: response.name}

        setUser(payload)
        setUserLocalStorage(payload)

    }

    async function register (email: string, password: string, name: string){
        const response = await RegisterRequest (email, password, name)

        const payload = {name: response.name}

        setUser(payload)
        setUserLocalStorage(payload)

    }
    


    function logout (){
        setUser(null)
        setUserLocalStorage( null)
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}