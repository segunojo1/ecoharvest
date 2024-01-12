import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import commodities from '../http/commodities';
import cropp from "../assets/pexels-pixabay-209831.jpg"

const MarketPrices = () => {
  const ddd = 'per barrel for Oil, per ounce for Metals. Per 10 metric tons for Crude Palm Oil, Per MMBtu for Natural gas, Per Gallon for Ethanol. Per metric ton, per lb or per bushel for Agriculture';
  const newd = ddd.split("," || ".");
  console.log(newd);

  const [crops, setCrops]: any = useState();
  useEffect(() => {
    const getPrices = async () => {
      try {
        const { data } = await commodities.get("/latest", {
          params: {
            base: "NGN",
            symbols: "ALU,COFFEE,KC00,KCZ24,KCZ23,KCN25,KCN23,KCN24,KCH25,KCH23,KCH24"
          }
        })
        console.log(data.data);
        const newCrops = Object.entries(data?.data?.rates)
        setCrops(newCrops);
        // console.log(crops?.data?.rates?.ALU);

        console.log(newCrops);

      } catch (error) {

      }
    }
    getPrices();

  }, [])

  return (
    <div className='flex-[.8] md:ml-[234px] ml-0'>
      <Navbar />
      <div className='p-[1.4rem] gap-5'>
        <div className='flex items-center justify-between w-full mb-5 gap-3'>
          <h1 className='text-2xl font-bold md:block hidden'>EcoHarvest Market Prices</h1>
          <input type="text" className='md:min-w-[500px] md:w-fit w-full rounded-full p-4' placeholder='Search a crop' />
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {crops?.map(([crop, rate]: any) => (
            // <div className=''>{crops?.rates.crop}</div>
            <div className='weath flex gap-5 items-center rounded-xl'>
            <img src={cropp} alt="" className='flex-[.2] w-[100px] rounded-tl-xl rounded-bl-xl' />
            <div className='flex-[.8] flex flex-col justify-between'>
              <p className=' text-xl font-semibold'>{crop}</p>
              <p>{rate} per metric tonnes</p>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default MarketPrices