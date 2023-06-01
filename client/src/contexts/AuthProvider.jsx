import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect } from "react";
import { useState } from "react";
import { saveToken } from "../utils/localStorage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useContext } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const authProvider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBkLpB7uDfmakHpNrZLQrH47aNwg0Dms1I",
  authDomain: "fileuploaderauthproject-27fe1.firebaseapp.com",
  projectId: "fileuploaderauthproject-27fe1",
  storageBucket: "fileuploaderauthproject-27fe1.appspot.com",
  messagingSenderId: "103432106268",
  appId: "1:103432106268:web:591c61a38b03b4b2274ad9",
  measurementId: "G-5JE61C6NGP",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const AuthContext = React.createContext({});

function AuthProvider({ children }) {
  const [auth] = useState(getAuth());
  const [user, setUser] = useState();

  const setServerToken = (token) => {
    setUser({
      ...user,
      serverToken: token,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signIn = (callback = () => {}) => {
    signInWithPopup(auth, authProvider).then((response) => {
      response.user.getIdToken().then(saveToken);
      callback(response);
    });
  };

  const values = {
    auth,
    authProvider,
    signIn,
    signOut,
    user,
    setServerToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
