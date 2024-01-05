import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import locatio from "../assets/location.svg"
import page404 from '../assets/pg4.svg'
import agroweather from '../http/agroweather'

const SoilData = () => {
    let longitude;
    let latitude;
    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        function showPosition(position: any) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            getSoilData();
        }
        const getSoilData = async () => {
            try {
                const polygons = await agroweather.get("/polygons")

                console.log(polygons);
                
            } catch (error) {
                
            }
        }
    }, [])
    return (
        <div className='flex-[.8] md:ml-[234px] ml-0'>
            <Navbar />
            <div className='flex flex-col items-center p-[1.4rem] gap-5 h-[80vh]'>
                <div className='flex items-center justify-between w-full mb-5 gap-3'>
                    <h1 className='text-2xl font-bold md:block hidden'>EcoHarvest Soil Data</h1>
                    <div className='flex gap-4'>
                        <div className='p-4 bg-[#446544] w-fit rounded-full flex items-center gap-3'>
                            <img src={locatio} alt="location" />
                        </div>
                        <div className='relative'>
                        <input type="text" className='md:min-w-[500px] md:w-fit w-full rounded-full p-4' placeholder='Please select your farm location to see soil data...' />
                        <div className='text-center  weath absolute z-50 w-full bg-[white] rounded-xl hidden'>
                            <p className='pt-2 bg-[#f3ead9] cursor-pointer'>Lagos, Nigeria.</p>
                            <p className='pt-2'>Lagos, Nigeria.</p>
                            <p className='pt-2'>Lagos, Nigeria.</p>
                        </div>
                        </div>
                    </div>
                </div>

                    <p className='text-center font-semibold z-0 mb-10'>Note: Soil temperature and moisture are essential indices that allow you to adjust irrigation work and prevent crop roots damage.</p>
                {/* <div className='flex flex-col items-center justify-center h-full gap-4'>
                    <img src={page404} alt="" className='w-[300px] '/>
                    <p className=' text-[#696767] font-semibold'>No soil data found, input your farm location</p>
                </div> */}
                <div className='flex justify-center items-center w-[700px] gap-5'>
                    <p className='text-center font-semibold flex-[.5]'>Note: Soil data presented is for your current location, for more accurate results stand in the center of your farm.</p>
                    <div className='longline'></div>
                    <div className='flex-[.5]'>
                        <p>Soil temperature: 223</p>
                        <p>Soil moisture: 34</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoilData