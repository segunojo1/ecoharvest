import React, {useContext} from 'react';
import Navbar from '../components/Navbar';
import MainComp from '../components/MainComp';

const Dashboard = () => {
//   const {user} = useContext(AuthContext);
  return (
      <div className='flex-[.8]'>
        <Navbar />
        <MainComp/>
      </div>
  )
}

export default Dashboard