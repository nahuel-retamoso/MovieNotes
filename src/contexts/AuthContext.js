import { auth } from "../services/firebase/index.js";
import {    createUserWithEmailAndPassword,
            signInWithEmailAndPassword,
            onAuthStateChanged,
            signOut,
            updateProfile,
     } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


const AuthContext = createContext();

export function AuthProvider({ children }) {
    
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password, name) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                updateProfile(userCredential.user, {
                    displayName: name,
                    })
                    console.log("User created successfully")
                }
            ).catch((error) => {
                console.log(error);})
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user)
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContext;