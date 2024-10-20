import axios from "axios";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import app from "./../config/Firebase/firebase.config";
import useAxiosSecure, { axiosSecure } from "./../Hooks/useAxiosSecure";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      setCurrentUser(currentUser);

      console.log(currentUser);
      setLoading(false);

      //if user exits then a token
      if (currentUser) {
        axiosSecure
          .post("/jwt", loggedUser, { withCredentials: true })
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axiosSecure
          .post("/logout", loggedUser, {
            withCredentials: true,
          })

          .then((res) => {
            console.log(res.data);
          });
      }
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  const providerInfo = {
    user,
    createUser,
    signInUser,
    loading,
    logOut,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={providerInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
