import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const Authcontext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    
    const createUser = (email , password ) =>{
        return createUserWithEmailAndPassword(auth , email , password)
    }


    const signIn = (email , password)  => {
       setLoading(true)
       return signInWithEmailAndPassword(auth, email , password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
     
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser);
            console.log('current user' , currentUser);
            setLoading(false)
         })
         return () =>{
            unSubscribe();
         }
    },[])

    const authInfo = {
        auth,
        createUser,
        signIn,
        user, 
        logOut,
        loading
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;