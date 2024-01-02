import React from 'react'
import Navbar from '../components/Navbar'
import WeatherMain from '../components/WeatherMain'

const Weather = () => {
  return (
    <div className='flex-[.8] md:ml-[234px] ml-0 bg-[#e8e4dd]'>
        <Navbar />
        <WeatherMain />
      </div>
  )
}

export default Weather