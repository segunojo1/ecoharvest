import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from './context/AuthContext';


const PrivateRoute = ({children}:any) => {
    const {isAuthenticated}:any = useContext(AuthContext);
    if(!isAuthenticated() ){
        return  <Navigate to="/login" replace/>
    }
    return children
}

export default PrivateRoute