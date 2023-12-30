import { createContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({children}: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    const [email, setEmail] = useState();
    const [error, setError] = useState();

    const [authUser, setAuthUser] = useState({});

    const [password, setPassword] = useState();

    const isAuthenticated = () => {
        return !!Cookies.get('refreshToken')
     }
    const authStates = {
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        isAuthenticated,
        authUser,
        setAuthUser
    }
  return (
    <AuthContext.Provider value={authStates}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext