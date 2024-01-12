import { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import locatio from "../assets/location.svg"
import agroweather from '../http/agroweather'
import PolygonContext from '../context/PolygonContext'
import { Polygon } from '../@types'
import { convertToCelsius } from '../helpers/converttocelsius'
import { getAuth } from 'firebase/auth'

const SoilData = () => {

    const { polygons, location }: any = useContext(PolygonContext);
    const [setPolygonId]: any = useState();
    const [soilData, setSoilData]: any = useState();
    const [recommendation] = useState('');
    let longitude: any;
    let latitude: any;
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


        // generateRecommendation(soilData)
    }, [polygons, location, recommendation])

    // useEffect(() => {
    //     generateRecommendation(soilData)
    // }, [])

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
            const { data } = await agroweather.get("/soil", {
                params: {
                    polyid: polygonId
                }
            })
            setSoilData(data);
            // generateRecommendation(soilData)
        } catch (error) {

        }
    }

    const generateRecommendation = (soilData: any) => {
        const surfaceTemp = soilData?.t0;
        const deepTemp = soilData?.t10;
        const soilMoisture = soilData?.moisture;
        console.log(soilData);
        let recommendation = "";
        if (surfaceTemp) {

            if (surfaceTemp > 301) {
                recommendation = "Surface temperature is too high. "
            }
            if (deepTemp > 303) {
                recommendation += "Deep temperature is too high. "
            }
            if (soilMoisture < 0.3) {
                recommendation += "Soil moisture is too low. Irrigation is needed"
            }
            if (recommendation == "") {
                recommendation += "Soil conditions are generally okay"
            }

            return recommendation;
        }
        else {
            recommendation = 'Unable to provide recommendations. Missing soil data.'
        }
        console.log("recommendation set");
        console.log(recommendation);


    }
        const auth: any = getAuth();
        const userr: any = auth.currentUser;
        console.log(userr);
    return (
        <div className='flex-[.8] md:ml-[234px] ml-0 '>
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
                <div className='flex md:flex-row flex-col justify-center items-center md:w-[700px] gap-5'>
                    <p className='text-center font-semibold flex-[.5]'>Note: Soil data presented is for your current location, for more accurate results stand in the center of your farm.</p>
                    <div className='longline'></div>
                    <div className='flex-[.5]'>
                        <p>Soil temperature(Surface): {convertToCelsius(soilData?.t0)}°C</p>
                        <p>Soil temperature(10cm deep): {convertToCelsius(soilData?.t10)}°C</p>
                        <p>Soil moisture: {soilData?.moisture}m3/m3</p>
                    </div>
                </div>

                <div className='mt-5'>
                    <p className=' underline decoration-slice'>INFERENCE</p>
                    <ul>
                        <li>{generateRecommendation(soilData)}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SoilData