import { createContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({children}: any) => {
    const [email, setEmail] = useState();
    const [error, setError] = useState();

    const [authUser, setAuthUser] = useState({});

    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

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
        setAuthUser,
        username,
        setUsername
    } 
  return (
    <AuthContext.Provider value={authStates}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext