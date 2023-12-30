import React, {useContext, useEffect} from 'react';
import Navbar from '../components/Navbar';
import MainComp from '../components/MainComp';
import AuthContext from '../context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const Dashboard = () => {
    const {authUser, setAuthUser}:any = useContext(AuthContext)
//   const {user} = useContext(AuthContext);
useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user);
        } else {
            setAuthUser(null);
        }
    })


    return () => {
        listen();
        setTimeout(() => {
            
            console.log(authUser);
        }, 2000);
        
    }
}, [])
  return (
      <div className='flex-[.8] ml-[234px]'>
        <Navbar />
        <MainComp/>
      </div>
  )
}

export default Dashboard