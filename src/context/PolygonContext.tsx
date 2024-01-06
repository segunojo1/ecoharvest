import { createContext, useEffect, useState } from "react";
import weather from "../http/weather";
import agroweather from "../http/agroweather";

const PolygonContext = createContext({});

export const PolygonProvider = ({children}:any) => {
    const [polygons, setPolygons] = useState([]);
    const [location, setLocation] = useState([]);

    let latitude:any;
    let longitude:any;

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        function showPosition(position: any) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            getLocation();
            getPolygons()
        }
        const getPolygons = async () => {
            try {
                const {data} = await agroweather.get("/polygons")

                setPolygons(data);
                console.log(polygons);
                
            } catch (error) {
                
            }
        }

        const getLocation = async () => {
            try {
                const {data} = await weather.get("/geo/1.0/reverse", {
                    params: {
                        lat: latitude,
                        lon: longitude
                    }
                })
                setLocation(data);
                console.log(data);
                
            } catch (error) {
                
            }
        }
    }, [])
    return(
        <PolygonContext.Provider value={{polygons, setPolygons, location, setLocation}}>
            {children}
        </PolygonContext.Provider>
    )
}
export default PolygonContext;