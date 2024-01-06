import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import locatio from "../assets/location.svg"
import page404 from '../assets/pg4.svg'
import agroweather from '../http/agroweather'
import PolygonContext from '../context/PolygonContext'
import weather from '../http/weather'
import { Polygon } from '../@types'

const SoilData = () => {

    const {polygons, setPolygons, location, setLocation}:any = useContext(PolygonContext);
    const [polygonId, setPolygonId]:any = useState();
    const [soilData, setSoilData]:any = useState();
    let longitude:any;
    let latitude:any;
    useEffect(() => {
        const getLocationAndSoilData = async () => {
            const position = await getCurrentPosition();
            if (position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
    
                const matchingPolygon = polygons.find((polygon: Polygon) => polygon.name === location[0]?.state);
                if (matchingPolygon) {
                    setPolygonId(matchingPolygon.id);
                    console.log(matchingPolygon.id);
                    await getSoilData(matchingPolygon.id);
                } else {
                    console.log('Polygon not found');
                }
            } else {
                console.log("Geolocation not available");
            }
        };
        getLocationAndSoilData();
    }, [polygons, location])

    async function getCurrentPosition(): Promise<GeolocationPosition | null> {
        return new Promise((resolve) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position: GeolocationPosition) => resolve(position),
                    () => resolve(null) // In case of error or denial, resolve with null
                );
            } else {
                resolve(null);
            }
        });
    }
    
    const getSoilData = async (polygonId: any) => {
        console.log(polygonId);
        try {
            const {data} = await agroweather.get("/soil", {
                params:{
                    polyid: polygonId
                }
            })
            setSoilData(data);
            
            
        } catch (error) {
            
        }
    }
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
                        <p>Soil temperature(Surface): {soilData?.t0}K</p>
                        <p>Soil temperature(10cm deep): {soilData?.t10}K</p>
                        <p>Soil moisture: {soilData?.moisture}m3/m3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoilData