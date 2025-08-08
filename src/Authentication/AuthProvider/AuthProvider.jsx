import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Children, createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

//  Start :

export const AuthContext = createContext();

//  FaceBook - Google Login / signup :

const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

// Main :
const AuthProvider = ({ children }) => {
  //   User , Loading States ;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //    Sign Up / New user

  const SignUp = (email, passsword) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, passsword);
  };

  // LogIN / For existing user
  const LogIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  //   google login
  const GoogleLogIn = () => {
    setLoading(true);

    return signInWithPopup(auth, GoogleProvider);
  };

  // Facebook LogIn

  const FaceBookLogIn = () => {
    setLoading(true);

    return signInWithPopup(auth, FacebookProvider);
  };

  //  logOut

  const LogOut = () => {
    setLoading(true);

    return signOut(auth);
  };

  //  OnAuth State Changed

  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      if (currentUser) {
        axios
          .post(
            "https://car-fusion-server-official.vercel.app/jwt",
            loggedUser,
            {
              withCredentials: true,
            }
          )

          .then((res) => {
            console.log(res.data);
          });
        setUser(currentUser);
      } else {
        axios
          .post(
            "https://car-fusion-server-official.vercel.app/logout",
            loggedUser,
            {
              withCredentials: true,
            }
          )

          .then((res) => {
            console.log("logout", res.data);
          });

        setUser(null);
      }

      setLoading(false);
    });

    return () => {
      unSubsCribe();
    };
  }, []);

  //   Auth Values
  const authValues = {
    setUser,
    user,
    loading,
    setLoading,
    SignUp,
    LogIn,
    GoogleLogIn,
    FaceBookLogIn,
    LogOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
