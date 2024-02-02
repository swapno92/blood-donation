'use client'
import { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const facebookSignIn = () =>{
        return signInWithPopup(auth, facebookProvider)
    }

    /* Update Pofile */
  const updateUaserPofile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })

  };


    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return unSubscribe;
    },[])

    const authInfo = {user, createUser, login, logOut, googleSignIn, facebookSignIn, updateUaserPofile}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;