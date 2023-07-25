import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase_auth/firebase.config';

export const AuthContext = createContext(null)


const Auth_Provider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    const createUser = (email, password) => { 
     return createUserWithEmailAndPassword(auth, email, password);
            
    }
    const singInInUser = (email, password) => { 
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () => {
        return signOut(auth);
    }

   
    useEffect(() => { 
        const unsubScribe = onAuthStateChanged(auth, (currentUser) => { 
            if (currentUser) { 
                setUser(currentUser)
                setLoading(false)
            }
        })
        return () => { 
            unsubScribe;
        }
    },[])
   
     const info = {
       createUser,
       singInInUser,
       user,
         logOut,
       loading
     };
    return (
        <AuthContext.Provider value={info}>
            { children}
        </AuthContext.Provider>
    );
};

export default Auth_Provider;