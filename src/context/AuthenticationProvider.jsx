import { createContext, useState } from "react";
import { useContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../firebase/config";
import { useEffect } from "react";

export const Auth = createContext()

export const useAuth = () => {
    return useContext(Auth)
}

export function AuthProvider({ children }) {
    const [user, setUSer] = useState(null);

    const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const logOut = () => signOut(auth)
    const resetPassword = (email) => sendPasswordResetEmail(auth, email)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUSer(currentUser)
        })
    }, [])

    return (
        <Auth.Provider value={{ registerUser, login, user, logOut, resetPassword }}>
            {children}
        </Auth.Provider>
    )
}