import React, { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MainComp from '../components/MainComp';
import AuthContext from '../context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import agroweather from '../http/agroweather';

const Dashboard = () => {
    const { authUser, setAuthUser }: any = useContext(AuthContext)
    //   const {user} = useContext(AuthContext);
    let latitude: number;
    let longitude: number;


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        function showPosition(position: any) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            createPolygon();
        }

        const createPolygon = async () => {
            try {
                await agroweather.get("/")
            } catch (error) {
                
            }
        }
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
        <div className='flex-[.8] md:ml-[234px] ml-0'>
            <Navbar />
            <MainComp />
        </div>
    )
}

export default Dashboard