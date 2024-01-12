import { useContext, useState } from 'react';
import profile from "../assets/profile.svg";
import sun from "../assets/sunsmall.svg";
import circle from "../assets/circle.svg";
import seedling from "../assets/seedling-solid.svg";
import next from "../assets/next.svg";
import crops from "../assets/arrow.svg"
import weather from "../assets/cloud.svg"
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

const MainComp = () => {
    const { authUser }: any = useContext(AuthContext);
    const [day, setDay] = useState<string>(new Date().getDay().toString());
    const [date] = useState<number>(new Date().getDate());
    const [month, setMonth] = useState<string>(new Date().getMonth().toString());
    const [hour] = useState(new Date().getHours());
    const [minutes] = useState(new Date().getMinutes());
    if (hour >= 1) {

    }
    switch (day) {
        case '1':
            setDay('Monday')
            break;
        case '2':
            setDay("Tuesday")
            break;
        case '3':
            setDay("Wednesday")
            break;
        case '4':
            setDay("Thursday")
            break;
        case '5':
            setDay("Friday")
            break;
        case '6':
            setDay("Saturday")
            break;
        default:
            break;
    }

    switch (month) {
        case '0':
            setMonth('January');
            break;
        case '1':
            setMonth('February');
            break;
        case '2':
            setMonth("March");
            break;
        case '3':
            setMonth("April");
            break;
        case '4':
            setMonth("May");
            break;
        case '5':
            setMonth("June");
            break;
        case '6':
            setMonth("July");
            break;
        case '7':
            setMonth('August');
            break;
        case '8':
            setMonth("September");
            break;
        case '9':
            setMonth("October");
            break;
        case '10':
            setMonth("November");
            break;
        case '11':
            setMonth("December");
            break;
        default:
            break;
    }

    return (
        <div className='p-[1.4rem] '>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-[10px]'>
                    <img src={profile} alt="profile" className='' />
                    <div className='grid '>
                        <h3 className=' font-medium text-2xl'>Hi, Farmer {authUser?.displayName}!👨‍🌾</h3>
                        <div className='flex items-center gap-[10px]'>
                            <img src={sun} alt="sun" />
                            <img src={circle} alt="dot" />
                            <h3 className="">{`${day}, ${month} ${date} `}</h3>
                            <img src={circle} alt="dot" />
                            <h3 className="">{`${hour}:${minutes} ${hour > 11 ? 'pm' : 'am'}`}</h3>
                        </div>
                    </div>
                </div>
                {/* <div className=' grid gap-[8px]'>
            <div className='w-[300px] h-[10px] bg-[#D9D9D9] rounded-full relative after:w-[40%] after:rounded-full after:bg-[#FFAB33] after:absolute after:h-[10px]'></div>
            <p className='font-semibold'>2 Weeks Study Goal</p>
        </div> */}
            </div>


            <div className='flex justify-between p-[1rem] mt-[3rem] border-[1px] rounded-[4px] border-[#D9D9D9]'>
                <div className='flex gap-[14px] items-center'>
                    <img src={seedling} alt="black" />
                    <div>
                        <p>Welcome to EcoHarvest!</p>
                        <p>We need a few more details to complete your profile</p>
                    </div>
                </div>
                <div className='flex items-center gap-[8px]'>
                    <p>Proceed</p>
                    <img src={next} alt="next" />
                </div>
            </div>
            <div className='flex overflow-x-scroll mt-[3rem] items-center gap-[.6rem]'>
                <Link to="/market">
                
                <div className='p-[.6rem] w-[230px] h-[300px] border-[1px] rounded-[16px] gap-[.3rem] flex flex-col justify-between border-[#D9D9D9] market'>
                    <img src={crops} alt="market" className='w-fit' />

                    <h2 className='text-2xl font-semibold text-[#fff]'>Market <br /> Prices</h2>
                </div>
                </Link>
                <Link to="/weather">
                
                <div className='p-[.6rem] w-[230px] h-[300px] border-[1px] rounded-[16px] gap-[.3rem] flex flex-col justify-between border-[#D9D9D9] weatherr'>
                    <img src={weather} alt="weather" className='w-fit' />

                    <h2 className='text-2xl font-semibold text-[#fff]'>See <br /> Weather</h2>
                </div>
                </Link>
                <Link to="/soil">
                
                <div className='p-[.6rem] w-[230px] h-[300px] border-[1px] rounded-[16px] gap-[.3rem] flex flex-col justify-between border-[#D9D9D9] soil'>
                    <img src={weather} alt="weather" className='w-fit' />

                    <h2 className='text-2xl font-semibold text-[#fff]'>Soil <br /> Data</h2>
                </div>
                </Link>
                <Link to="/croprecommendation">
                <div className='p-[.6rem] w-[230px] h-[300px] border-[1px] rounded-[16px] gap-[.3rem] flex flex-col justify-between border-[#D9D9D9] crop'>
                    <img src={weather} alt="weather" className='w-fit' />

                    <h2 className='text-2xl font-semibold text-[#fff]'>Crop <br /> Recommendation</h2>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default MainComp