import React, { useEffect } from 'react'
import weath from "../assets/pexels-pixabay-209831.jpg"
import WeatherDetails from './WeatherDetails'
import weather from '../http/weather'
import agroweather from '../http/agroweather'

const WeatherMain = () => {
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

            getWeatherDetails();
            // Now you can use these coordinates to call the OpenWeatherMap API.
        }


        const getWeatherDetails = async () => {
            try {
                const weatherr = await agroweather.get("/weather", {
                    params: {
                        lat: latitude,
                        lon: longitude
                    }
                })
                console.log(weatherr);
                
            } catch (error) {
                console.error('err',error);
                
            }
        }
        
    }, [])

    
    return (
        <div className='p-[1.4rem] flex gap-5'>
            <div className='gap-[1rem] grid flex-[.6]'>
                <div className='flex justify-between'>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h2 className='text-3xl'>EcoHarvest</h2>
                            <p>Chance of rain: 0%</p>
                        </div>
                        <h2 className='mt-[2rem] text-2xl'>32*C</h2>
                    </div>
                    <img src={weath} alt="" className='w-[150px] h-[150px] rounded-lg' />
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <WeatherDetails img="" title="UV Index" value="3" />
                    <WeatherDetails img="" title="Wind speed" value="3" />
                    <WeatherDetails img="" title="Humidity" value="3" />
                    <WeatherDetails img="" title="Visibility" value="3" />
                    <WeatherDetails img="" title="Feels like" value="3" />
                    <WeatherDetails img="" title="Chance of rain" value="3" />
                    <WeatherDetails img="" title="Pressure" value="3" />
                    <WeatherDetails img="" title="Sunset" value="3" />
                </div>
            </div>

            <div className='flex-[.4] gap-5 flex flex-col'>
                <div className='bg-[#c4c2c2] p-4 rounded-lg'>
                    <p className='text-lg font-bold'>Today's Crop Forecast</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col items-center gap-2'>
                            <p>6:00 AM</p>
                            <div className='w-[50px] h-[50px] bg-black'></div>
                            <p>25A*C</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p>9:00 AM</p>
                            <div className='w-[50px] h-[50px] bg-black'></div>
                            <p>25A*C</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p>12:00 PM</p>
                            <div className='w-[50px] h-[50px] bg-black'></div>
                            <p>25A*C</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#c4c2c2] p-4 rounded-lg'>
                    <p className=' text-lg font-bold'>7-day Forecast</p>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-2 items-center justify-between'>
                            <p className=' w-16'>Today's</p>
                            <div className='w-[50px] h-[50px] bg-black'></div>
                            <p>25A*C</p>
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                            <p className=' w-16'>Tue</p>
                            <div className='w-[50px] h-[50px] bg-black'></div>
                            <p>25A*C</p>
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                            <p className=' w-16'>Wed</p>
                            <div className='w-[50px] h-[50px] bg-black'></div>
                            <p>25A*C</p>
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                            <p className=' w-16'>Thu</p>
                            <div className='w-[50px] h-[50px] bg-black'></div>
                            <p>25A*C</p>
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                            <p className=' w-16'>Fri</p>
                            <div className='w-[50px] h-[50px] bg-black'></div>
                            <p>25A*C</p>
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                            <p className=' w-16'>Sat</p>
                            <div className='w-[50px] h-[50px] bg-black'></div>
                            <p>25A*C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherMain