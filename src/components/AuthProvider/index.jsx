/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import { getUserLocalStrorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    useEffect(()=>{
        const user = getUserLocalStrorage()

        if(user){
            setUser(user)
        }
    },[])

    async function authenticate(email, password){
        const response = await LoginRequest(email, password)

        const payload = { email: response.email, password: response.password}

        setUser(payload)
        setUserLocalStorage(payload)

    }

    function logaut (){
        setUser(null)
        setUserLocalStorage(null)
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logaut}}>
            { children }
        </AuthContext.Provider>
    )


}