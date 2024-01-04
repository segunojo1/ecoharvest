import React, { useEffect, useState } from 'react'
import weath from "../assets/pexels-pixabay-209831.jpg"
import WeatherDetails from './WeatherDetails'
import weather from '../http/weather'
import agroweather from '../http/agroweather'
import locatio from "../assets/location.svg"
import calender from "../assets/date.svg"
import location2 from "../assets/location2.svg"
import sun from "../assets/sun.svg"
import cloud2 from "../assets/cloud2.svg"
import wind from '../assets/wind.svg'
import sunset from "../assets/sunrise.svg"
import sunrise from "../assets/moon.svg"
import drop from "../assets/drop.svg"
import pressure from "../assets/pressure.svg"
import eye from "../assets/eye.svg"
import temp from "../assets/temp.svg"
import rain from "../assets/rain.svg"
import { convertUtcToNormalDate } from '../helpers/convertutc'
import { displayWeatherIcon } from '../helpers/displayicon'
import { weatherDetails } from '../@types'
import { convertToCelsius } from '../helpers/converttocelsius'
import { getTime } from '../helpers/gettime'
import { convrtUtcToFullDate } from '../helpers/convertutctofull'


const WeatherMain = () => {
    const [weatherData, setWeatherData] = useState<weatherDetails>({
        clouds: { all: 0 },
        dt: 0,
        main: {
            feels_like: 0,
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0,
        },
        weather: [{ description: "", icon: "", id: 0, main: "" }],
        wind: { deg: 0, speed: 0 },
        rain: {
            '1h': 0
        }
    });
    const [location, setLocation]:any = useState();
    const [icon, setIcon]:any = useState();
    const [loading, setLoading] = useState();
    const [forecast, setForecast]:any = useState([]);
    const [dayForecast, setDayForecast]:any = useState([]);


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
                const {data} = await agroweather.get("/weather", {
                    params: {
                        lat: latitude,
                        lon: longitude
                    }
                })
                const [geo, weath, forecastt] = await Promise.all([
                    weather.get("/geo/1.0/reverse", {
                        params: {
                            lat: latitude,
                            lon: longitude
                        }
                    }),
                    weather.get("/data/2.5/weather", {
                        params: {
                            lat: latitude,
                            lon: longitude
                        }
                    }),
                    agroweather.get("/weather/forecast", {
                        params: {
                            lat: latitude,
                            lon: longitude
                        }
                    })
                ])
            
                console.log(weath, 'hello ');
                
                setLocation(geo);
                const weatherDetails: weatherDetails = data;
                setWeatherData(weatherDetails);

                
                console.log(data);
                console.log(forecastt);
                setForecast(forecastt?.data);
                // const newArray = [...(forecast ?? []).slice(0, 8), ...(forecast ?? []).slice(31)];
                // setDayForecast(newArray);
            } catch (error) { 
                console.error('err', error);
            }
        }
        
    }, [])

    useEffect(() => {

    }, [dayForecast])

    useEffect(() => {
        // Ensure forecast state is available and has the correct format before creating newArray
        const newArray = forecast?.splice(0, 8) || [];
        setDayForecast(newArray);
        console.log(dayForecast);

        const newIcon = displayWeatherIcon(weatherData?.weather?.[0]?.description)
                setIcon(newIcon);
        
    }, [forecast, weatherData]);


    return (
        <div className='p-[1.4rem] gap-5'>

            <div className='flex items-center justify-between w-full mb-5 gap-3'>
                <h1 className='text-2xl font-bold md:block hidden'>EcoHarvest</h1>
                <input type="text" className='md:min-w-[500px] md:w-fit w-full rounded-full p-4' placeholder='Search a city' />
                <div className='p-4 bg-[#446544] w-fit rounded-full flex items-center gap-3'>
                    <img src={locatio} alt="location" />
                    <p className='w-fit font-bold md:block hidden'>Current Location</p>
                </div>
            </div>

            <div className='flex md:flex-row flex-col justify-between'>
                <div>
                    <div className='current-weather drop-shadow-2xl flex flex-col gap-3 p-8 rounded-2xl bg-white'>
                        <p className='text-xl font-medium'>Now</p>
                        <div className='flex items-center gap-1'>
                            <h1 className='text-6xl font-semibold'>{Math.round(weatherData.main?.temp - 273)}°C</h1>
                            <img src={icon} alt="" className='px-6' />
                            <p>{}</p>
                        </div>
                        <p className='text-xl'>{weatherData?.weather?.[0]?.main}</p>
                        <div className='line my-2'></div>
                        <div className='flex gap-2 items-center'>
                            <img src={calender} alt="calender" />
                            <p className='font-normal text-xl'>{convertUtcToNormalDate(weatherData?.dt)}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={location2} alt="location" />
                            <p className='font-normal text-xl'>{location?.data[0]?.state}</p>
                        </div>
                    </div>
                    <p className=' font-semibold text-lg my-6'>5 Days Forecast</p>
                    <div className='current-weather drop-shadow-2xl flex flex-col gap-3 p-8 rounded-2xl bg-white'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <img src={forecast[20] ? displayWeatherIcon(forecast[0]?.weather[0]?.description) : cloud2} alt="cloudy" />
                                <p className='text-xl font-semibold'>{convertToCelsius(forecast[0]?.main.temp)}°C</p>
                            </div>
                            <p>{convertUtcToNormalDate(forecast[0]?.dt)}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <img src={forecast[20] ? displayWeatherIcon(forecast[3]?.weather[0]?.description) : cloud2} alt="cloudy" />
                                <p className='text-xl font-semibold'>{convertToCelsius(forecast[3]?.main.temp)}°C</p>
                            </div>
                            <p>{convertUtcToNormalDate(forecast[3]?.dt)}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <img src={forecast[20] ? displayWeatherIcon(forecast[11]?.weather[0]?.description) : cloud2} alt="cloudy" />
                                <p className='text-xl font-semibold'>{convertToCelsius(forecast[11]?.main.temp)}°C</p>
                            </div>
                            <p>{convertUtcToNormalDate(forecast[11]?.dt)}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <img src={forecast[20] ? displayWeatherIcon(forecast[20]?.weather[0]?.description) : cloud2} alt="cloudy" />
                                <p className='text-xl font-semibold'>{convertToCelsius(forecast[20]?.main.temp)}°C</p>
                            </div>
                            <p>{convertUtcToNormalDate(forecast[20]?.dt)}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <img src={forecast[20] ? displayWeatherIcon(forecast[27]?.weather[0]?.description) : cloud2} alt="cloudy" />
                                <p className='text-xl font-semibold'>{convertToCelsius(forecast[27]?.main.temp)}°C</p>
                            </div>
                            <p>{convertUtcToNormalDate(forecast[27]?.dt)}</p>
                        </div>

                    </div>
                </div>


                <div>
                    <div className='current-weather drop-shadow-2xl flex flex-col gap-3 p-8 rounded-2xl bg-white'>
                        <p>Today's Highlights</p>
                        <div className='flex md:flex-row flex-col gap-4'>

                            <div className='bg-[#eee8e0] p-6 flex-[.5] rounded-md'>
                                <div className='flex items-center justify-between mb-5'>
                                    <p>Air Quality Index</p>
                                    <div className='p-2 bg-[#f1cfa2] w-fit rounded-full'>Moderate</div>
                                </div>
                                <div className='flex justify-between items-center gap-4'>
                                    <img src={wind} alt="" />
                                    <div className='flex flex-col items-center'>
                                        <p className='text-xs text-[#5e5d5d]'>PM25</p>
                                        <p className=' text-xl'>15.3</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <p className='text-xs text-[#5e5d5d]'>SO2</p>
                                        <p className=' text-xl'>15.3</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <p className='text-xs text-[#5e5d5d]'>NO2</p>
                                        <p className=' text-xl'>15.3</p>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <p className='text-xs text-[#5e5d5d]'>O3</p>
                                        <p className=' text-xl'>15.3</p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#eee8e0] p-6 w-full flex-[.5] rounded-md'>
                                <p className='mb-5'>Rain volume for the last 3 hours</p>
                                <div className='flex justify-between items-center gap-8'>
                                    <img src={rain} alt="" /> 
                                    {/* <div className='flex gap-3'>

                                    <div className=''>
                                        <p>Sunrise</p>
                                        <p className=' text-lg'>6:41 AM</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-3'>

                                    <img src={sunrise} alt="" />
                                    <div>
                                        <p>Sunset</p>
                                        <p className=' text-lg'>6:00 PM</p>
                                    </div>
                                    </div> */}
                                    <p className=' text-lg'>{weatherData.rain?.['1h']}mm </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col justify-between gap-2'>
                            <div className='bg-[#eee8e0] p-4 rounded-md'>
                                <p className='mb-5'>Humidity</p>
                                <div className='flex justify-between items-center gap-8'>
                                    <img src={drop} alt="" />
                                    <p className='text-xl'>{weatherData.main?.humidity}%</p>
                                </div>
                            </div>
                            <div className='bg-[#eee8e0] p-4 rounded-md'>
                                <p className='mb-5'>Pressure</p>
                                <div className='flex justify-between items-center gap-8'>
                                    <img src={pressure} alt="" />
                                    <p className='text-xl'>{weatherData.main?.pressure}hPa</p>
                                </div>
                            </div>
                            <div className='bg-[#eee8e0] p-4 rounded-md'>
                                <p className='mb-5'>Wind Speed</p>
                                <div className='flex justify-between items-center gap-8'>
                                    <img src={wind} alt="" />
                                    <p className='text-xl'>{weatherData.wind.speed} m/s</p>
                                </div>
                            </div>
                            <div className='bg-[#eee8e0] p-4 rounded-md'>
                                <p className='mb-5'>Feels Like</p>
                                <div className='flex justify-between items-center gap-8'>
                                    <img src={temp} alt="" />
                                    <p className='text-xl'>{Math.round(weatherData.main?.feels_like - 273)}°C</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <p className=' font-semibold text-lg my-6'>Today at</p>
                    <div className='grid grid-cols-3 gap-2 justify-between'>
                        {/* {forecast?.map((fore:any) => {
                            if (fore == forecast[8]) {
                                return;
                            } else {
                                return(
                                    <WeatherDetails time={convertUtcToNormalDate(fore?.dt)} img={cloud2} temp="9*"/>
                                )
                            }
                        })} */}
                        {dayForecast?.map((forecast:any) => (
                        <WeatherDetails time={getTime(convrtUtcToFullDate(forecast?.dt))} img={displayWeatherIcon(forecast?.weather[0].description)} temp={convertToCelsius(forecast?.main?.temp)}/>
                        ))} 
                        {/* <WeatherDetails time= "9PM" img={cloud2} temp="9*"/>
                        <WeatherDetails time= "9PM" img={cloud2} temp="9*"/>
                        <WeatherDetails time= "9PM" img={cloud2} temp="9*"/>
                        <WeatherDetails time= "9PM" img={cloud2} temp="9*"/>
                        <WeatherDetails time= "9PM" img={cloud2} temp="9*"/>
                        <WeatherDetails time= "9PM" img={cloud2} temp="9*"/>
                        <WeatherDetails time= "9PM" img={cloud2} temp="9*"/>
                        <WeatherDetails time= "9PM" img={cloud2} temp="9*"/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherMain