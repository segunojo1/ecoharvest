import React from 'react'

const WeatherDetails = ({time, img, temp}: any) => {
  return (
    <div className='flex flex-col px-5 py-2 rounded-lg items-center weath gap-2 bg-white'>
      <p>{time}</p>
        <img src={img} alt="" />
          <p className='font-semibold'>{temp}</p>
    </div>
  )
}

export default WeatherDetails