import React from 'react';
import profile from "../assets/profile.svg"
import AuthContext from '../context/AuthContext';

const Navbar = () => {

  return (
    <div>
    <div className="head">
        {/* <div className="createcourse">
            <img src={upload} alt="upload course" />
            <p>Create Course</p>
        </div> */}
        <div className='h-[2rem] w-[1px] bg-[#D9D9D9] mr-4 ml-12'></div>
        <div className='flex gap-[1rem] items-center'>
          <img src={profile} alt="profile" className='w-[50px]'/>
            <div className='grid '>
              <h3 className='font-semibold'>yoooo</h3>
              <h6>User</h6>
            </div>
          
        </div>
    </div>
        <div className="line"></div>
    </div>
  )
}

export default Navbar