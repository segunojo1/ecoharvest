import React, { useContext, useEffect } from 'react';
import profile from "../assets/profile.svg"
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { authUser }: any = useContext(AuthContext);
  
  const googleTranslateElementInit = () => {
    new (window as any).google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    (window as any).googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <div>
    <div className="head">
        {/* <div className="createcourse">
            <img src={upload} alt="upload course" />
            <p>Create Course</p>
        </div> */}
        <div id='google_translate_element'></div>
        <div className='h-[2rem] w-[1px] bg-[#D9D9D9] mr-4 ml-12'></div>
        <div className='flex gap-[1rem] items-center'>
          <img src={profile} alt="profile" className='w-[50px]'/>
            <div className='grid '>
              <h3 className='font-semibold'>{authUser?.displayName}</h3>
              <h6>User</h6>
            </div>
          
        </div>
    </div>
        <div className="line"></div>
    </div>
  )
}

export default Navbar