import React, {useContext} from "react";
import {auth} from "../configurations/firebase";



const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){

    async function login(email, password){
        await auth.signInWithEmailAndPassword(email, password);
    }


    const value = {
        login
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
