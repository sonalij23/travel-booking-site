import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {


  const [user, setUser] = useState("");
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = ()=>{
    return signOut(auth)

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
     
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;

export const useUserAuth = () =>  useContext(UserAuthContext);
  

