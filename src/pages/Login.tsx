import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'
import { signInWithEmailAndPassword } from 'firebase/auth';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import Header from '../components/Header';
import { auth } from '../firebase';
import { toast } from 'react-toastify';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const {email, setEmail, password, setPassword, error, setError}:any = useContext(AuthContext);
    const navigate = useNavigate();
    let available;

    if(password && email) {
        available = false;
       }else{
        available = true
    }

        const handleSubmit =  (e:any) => {
            e.preventDefault();
            setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential: any) => {
            // Signed in 
            setLoading(false);
            const user = userCredential.user;
            console.log(user);
            const {accessToken, refreshToken} = user.stsTokenManager;
            Cookies.set('accessToken', accessToken);
            Cookies.set('refreshToken', refreshToken);
            toast.success("Logged in successfully!")
            navigate('/');
          })
          .catch((error: any) => {
            setLoading(false);
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)
            // console.log(errorMessage, errorCode);
            setError(errorMessage)
          });
           setEmail("");
           setPassword("");
         }
  return (
    <div>
        {
          loading ? 
          <div id="preloader">
          <div id="preloaderinner"></div>
       </div>
       : 
  
       <div className="register">
        <Header content="signup"/>
        <div className="flex h-[100vh] items-center justify-center">
          <div className="flex flex-col w-[400px] m-auto p-[2rem]">
            <h1 className="h1">Login to your account</h1>
            {/* <h1 className={resp !== '' ? "resp" : "hi"}>{resp}</h1> */}
             <form action="">
              <div>
               <label htmlFor="email"> Email address </label>
               <input 
               type="text"
               id="email"
               value={email}
               placeholder="Enter Email or username"
               onChange={(e) => setEmail(e.target.value)} />
              </div>
  
              <div>
               <label htmlFor="password"> Password </label>
               <input 
               type="password"
               id="password"
               value={password}
               placeholder="Enter password"
               onChange={(e) => setPassword(e.target.value)} />
              </div>
               <button className={available ? "btnnn" : "btn"} onClick={handleSubmit} disabled={available}>Login</button>
             </form>
             <h4>Forgot password?</h4>
             <div className="or">
              <div className="line"></div>
              <p>Or</p>
              <div className="line"></div>
             </div>
             <p>Log in with:</p>
             <div className="auth">
              <button 
              className="btn"
              >
                <img src={google} alt="google" />
                Google
              </button>
              <button className="btn">
                <img src={apple} alt="apple" />Apple
              </button>
             </div>
          </div>
        </div>
      </div>
        }
      </div>
  )
}

export default Login