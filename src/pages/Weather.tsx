import React from 'react'
import Navbar from '../components/Navbar'
import WeatherMain from '../components/WeatherMain'

const Weather = () => {
  return (
    <div className='flex-[.8] ml-[234px]'>
        <Navbar />
        <WeatherMain />
      </div>
  )
}

export default Weather