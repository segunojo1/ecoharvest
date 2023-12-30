import React from 'react'

const WeatherDetails = ({img, title, value}: any) => {
  return (
    <div className='flex p-5 rounded-lg items-start weath bg-[#c4c2c2]'>
        <img src={img} alt="" />
        <div className='flex flex-col justify-between'>
            <p className='font-semibold'>{title}</p>
            <p className=' text-xl'>{value}</p>
        </div>
    </div>
  )
}

export default WeatherDetails