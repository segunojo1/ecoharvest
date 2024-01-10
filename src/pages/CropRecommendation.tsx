import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import cropreccomendation from '../http/cropreccomendation';

const CropRecommendation = () => {
    const [soilDetails, setSoilDetails] = useState({
        N: '',
        P: '',
        K: '',
        temperature: '',
        humidity: '',
        ph: '',
        rainfall: '',
    });
    useEffect(() => {
    }, [])
    const getPrediction = async () => {
        try {
            const {data} = await cropreccomendation.post("/crop-recommendation", soilDetails);
            console.log(data);
            
            
        } catch (error) {

        }
    }

    const handleChange = (e:any) => {
        const {name, value} = e.target;
        setSoilDetails({...soilDetails, [name]: value})
    }
    return (
        <div className='flex-[.8] md:ml-[234px] ml-0'>
            <Navbar />
            <div className='p-[1.4rem]'>

                <h1 className=' font-bold text-3xl'>FIND THE BEST CROPS TO PLANT</h1>
                <p className=''>Input the your soil details to get recommendations from our ai/ml model</p>

                <div className='p-4 w-[500px] shadow-lg gap-4 flex flex-col items-center mt-10 m-auto'>
                    <p className='font-bold text-2xl mb-3'>Crop Recommendation</p>
                    <input 
                    type='number' 
                    placeholder='Nitrogen' 
                    value={soilDetails?.N ?? ''}
                    name="N"
                    onChange={handleChange}
                    />
                    <input 
                    type='number' 
                    placeholder='Phosphorus' 
                    value={soilDetails?.P ?? ''}
                    name="P"
                    onChange={handleChange}
                    />
                    <input 
                    type='number' 
                    placeholder='Potassium' 
                    value={soilDetails?.K ?? ''}
                    name="K"
                    onChange={handleChange}
                    />
                    <input 
                    type='number' 
                    placeholder='Temperature' 
                    value={soilDetails?.temperature ?? ''}
                    name="temperature"
                    onChange={handleChange}
                    />
                    <input 
                    type='number' 
                    placeholder='Humidity' 
                    value={soilDetails?.humidity ?? ''}
                    name="humidity"
                    onChange={handleChange}
                    />
                    <input 
                    type='number' 
                    placeholder='PH' 
                    value={soilDetails?.ph ?? ''}
                    name="ph"
                    onChange={handleChange}
                    />
                    <input 
                    type='number' 
                    placeholder='Rainfall' 
                    value={soilDetails?.rainfall ?? ''}
                    name="rainfall"
                    onChange={handleChange}
                    />
                    <button 
                    className='btn'
                    onClick={getPrediction}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default CropRecommendation