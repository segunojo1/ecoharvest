import React, { useContext, useState } from 'react';
import profile from "../assets/profile.svg";
import sun from "../assets/sun.svg";
import circle from "../assets/circle.svg";
import black from "../assets/black.svg";
import next from "../assets/next.svg";
import active from "../assets/active.svg";
import complete from "../assets/complete.svg"
import yellow from "../assets/yellow.svg"
// import { AuthContext } from '../../context/AuthContext';

const MainComp = () => {
    // const {user} = useContext(AuthContext);
    const [day, setDay] = useState<string>(new Date().getDay().toString());
    const [date, setDate] = useState<number>(new Date().getDate());
    const [month, setMonth] = useState<string>(new Date().getMonth().toString());
    const [hour, setHour] = useState(new Date().getHours() % 12);
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    if(hour >= 1) {
        
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
    <div className='p-[1.4rem]'>
        <div className='flex justify-between items-center'>
        <div className='flex items-center gap-[10px]'>
        <img src={profile} alt="profile" className=''/>
            <div className='grid '>
              <h3 className=' font-semibold text-2xl'>Hi Segun!</h3>
              <div className='flex items-center gap-[10px]'>
                <img src={sun} alt="sun" />
                <img src={circle} alt="dot" />
                <h3 className="font-semibold">{`${day}, ${month} ${date} `}</h3>
                <img src={circle} alt="dot" />
                <h3 className="font-semibold">{`${hour}:${minutes}`}</h3>
              </div>
            </div>
        </div>
        <div className=' grid gap-[8px]'>
            <div className='w-[300px] h-[10px] bg-[#D9D9D9] rounded-full relative after:w-[40%] after:rounded-full after:bg-[#FFAB33] after:absolute after:h-[10px]'></div>
            <p className='font-semibold'>2 Weeks Study Goal</p>
        </div>
        </div>


        <div className='flex justify-between p-[1rem] mt-[3rem] border-[1px] rounded-[4px] border-[#D9D9D9]'>
            <div className='flex gap-[14px] items-center'>
               <img src={black} alt="black" />
               <div>
                <p>Welcome to SlicedBit!</p>
                <p>We need a few more details to complete your profile</p>
               </div>
            </div>
            <div className='flex items-center gap-[8px]'>
                <p>Proceed</p>
                <img src={next} alt="next" />
            </div>
        </div>
        <div className='flex mt-[3rem] items-center gap-[.6rem]'>
            <img src={active} alt="active"  className='w-[230px]'/>
            <div className='relative flex justify-center shrink-0'>
              <img src={complete} alt="complete"  className='w-[230px]'/>
              <div className='w-[80%] bg-[white] h-[17px] absolute bottom-[30%] mx-auto rounded-full after:w-[40%] after:rounded-full after:bg-[#7544EB] after:absolute after:h-[17px]'></div>
            </div>
            <div className='p-[.6rem] w-[230px] border-[1px] rounded-[16px] gap-[.3rem] grid border-[#D9D9D9]'>
                <img src={yellow} alt="yellow" />
                <div>
                    <p>English</p>
                    <div className=' flex items-center gap-[4px] p-[5px] w-[170px] bg-[#F0F3F6] rounded-[2px]'>
                        <div className='w-[90px] bg-[#D9D9D9] h-[5px] rounded-full relative after:w-[10%] after:rounded-full after:bg-[#6C63FF] after:absolute after:h-[5px]'></div>
                        <p className=' text-[9px] text-[#6C63FF] font-bold'>10% complete</p>
                    </div>
                </div>
                <div>
                    <p>Biology</p>
                    <div className=' flex items-center gap-[4px] p-[5px] w-[170px] bg-[#F0F3F6] rounded-[2px]'>
                        <div className='w-[90px] bg-[#D9D9D9] h-[5px] rounded-full relative after:w-[20%] after:rounded-full after:bg-[#6C63FF] after:absolute after:h-[5px]'></div>
                        <p className=' text-[9px] text-[#6C63FF] font-bold'>20% complete</p>
                    </div>
                </div>
                <div>
                    <p>History</p>
                    <div className=' flex items-center gap-[4px] p-[5px] w-[170px] bg-[#F0F3F6] rounded-[2px]'>
                        <div className='w-[90px] bg-[#D9D9D9] h-[5px] rounded-full after:w-[100%] after:rounded-full relative after:bg-[#6C63FF] after:absolute after:h-[5px]'></div>
                        <p className=' text-[9px] text-[#6C63FF] font-bold '>100% complete</p>
                    </div>
                </div>
                <h2 className='text-2xl font-semibold text-[#63677D]'>Completed <br/> Goals</h2>
            </div>
            <div className='p-[.7rem] w-[230px] border-[1px] rounded-[16px] border-[#D9D9D9]'>
               <div className='w-[150px] h-[150px] rounded-full border-[#D9D9D9] border-[20px] items-center flex justify-center mb-[25px]'>0</div>
               <h1 className='text-xl font-semibold'>Task Summary</h1>
               <p className='text-xl font-semibold'>0</p>
               <p className=' font-medium'>Overall for today on SlicedBit</p>
            </div>
        </div>
    </div>
  )
}

export default MainComp