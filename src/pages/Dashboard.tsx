import React, { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MainComp from '../components/MainComp';
import AuthContext from '../context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import agroweather from '../http/agroweather';
import { toast } from 'react-toastify';

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
            console.log(longitude, latitude);

            // const polygonn = generatePolygon(longitude, latitude, 9000, 4);
            // createPolygon(polygonn);
        }

        // function generatePolygon(centerLat: any, centerLon: any, radiusInMeters: any, numPoints: any) {
        //     const coordinates = [];

        //     for (let i = 0; i < numPoints; i++) {
        //         const angle = (Math.PI * 2 * i) / numPoints;
        //         const dx = radiusInMeters * Math.cos(angle);
        //         const dy = radiusInMeters * Math.sin(angle);

        //         const lat = centerLat + (180 / Math.PI) * (dy / 6378137);
        //         const lon = centerLon + (180 / Math.PI) * (dx / 6378137) / Math.cos(centerLat * Math.PI / 180);

        //         coordinates.push([lon, lat]);
        //     }

        //     // Close the polygon by repeating the first point
        //     coordinates.push(coordinates[0]);

        //     return coordinates;
        // }


        // const createPolygon = async (polygonn: any) => {
        //     console.log(polygonn);

        //     try {
        //         const newPolygon = await agroweather.post("/polygons", {
        //             "name": "Rivers State",
        //             "geo_json": {
        //                 "type": "Feature",
        //                 "properties": {

        //                 },
        //                 "geometry": {
        //                     "type": "Polygon",
        //                     "coordinates": [
        //                         [
        //                             [6.747952,4.880923],[6.790752,4.8934],[6.783257,4.872547],[6.763344,4.869243],[6.747952,4.880923]
        //                         ]]
        //                 }
        //             }
        //         },
        //             {
        //                 headers: {
        //                     'Content-Type': 'application/json'
        //                 }
        //             })
        //         console.log(newPolygon);

        //         toast.success("Polygon created!!")
        //     } catch (error) {
        //         toast.error("err creating polygon")
        //     }
        // }
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