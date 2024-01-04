import React, { useEffect } from 'react'
import commodities from '../http/commodities'

const MarketPrices = () => {
  useEffect(() => {
    const getPrices = async () => {
      try {
        const {data} = await commodities.get("/latest", {
          params: {
            base: "NGN",
            symbols: "BRENTOIL,WHEAT,COCOA,CORN,MILK,COFFEE,ALU,BEEF,BUTTER,CANO,GF,ETHANOL,EGGS-US,LUMBER,METHANOL"
          }
        })
        console.log(data);
        
      } catch (error) {
        
      }
    }
    getPrices();
  }, [])
  return (
    <div>MarketPrices</div>
  )
}

export default MarketPrices