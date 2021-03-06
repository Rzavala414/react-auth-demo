import React, {useContext, useState, useEffect} from 'react';
import {auth} from '../firebase.js';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    function signup(email, password){
        auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() =>{
       const unsubscriber = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })

        return unsubscriber;
    }, [])

    const value = {
        currentUser,
        signup
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
