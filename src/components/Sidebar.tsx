import React, { useState } from 'react'
import logo from "../assets/logo.png"
import dash from "../assets/dashboard.svg"
import dropdown from "../assets/dropdown.svg"
import cloud from "../assets/cloud-inactive.svg"
import market from "../assets/arrow-trend-up-solid.svg"
import messages from "../assets/messages.svg"
import settings from "../assets/settings.svg"
import social from "../assets/social.svg"
import goals from "../assets/goals.png"
import ai from "../assets/chat.svg"
import { Link, useParams } from 'react-router-dom'
import SideComp from './SideComp'

const Sidebar = () => {
    const [activeComponent, setActiveComponent] = useState('dashboard');
    const handleClick = (comp: string) => {
        if (activeComponent == comp) {
            setActiveComponent('')
        } else {
            setActiveComponent(comp)
        }
        console.log("click11");
    }
    return (
        <div className="dashside">
            <img src={logo} alt="logo" className='w-[180px]' />

            <div className="goals">
                <img src={goals} alt="goals" />
                <p>My Goals</p>
                <div><p>0</p></div>
            </div>
            <div className="line"></div>
            <SideComp handleClick={() => handleClick("dashboard")} isActive={activeComponent == "dashboard"} component="dashboard" icon={dash} text="Dashboard" drop={null} />
            {/* <SideComp handleClick={()=>handleClick("course")} isActive={activeComponent == "course"} component="courses" icon={courses} text="Courses" drop={dropdown}/> */}
            <SideComp handleClick={() => handleClick("weather")} isActive={activeComponent == "weather"} component="weather" icon={cloud} text="Weather" drop={dropdown} />
            <SideComp handleClick={() => handleClick("market")} isActive={activeComponent == "market"} component="market" icon={market} text="Market Prices" drop={dropdown} />
            <SideComp handleClick={() => handleClick("social")} isActive={activeComponent == "social"} component="community" icon={social} text="Community" drop={dropdown} />
            <div className='mb-[3rem]'></div>
            <div className="line"></div>
            <SideComp handleClick={() => handleClick("personalization")} isActive={activeComponent == "personalization"} component="personalization" icon={settings} text="Personalization" drop={null} />
            <SideComp handleClick={() => handleClick("help")} isActive={activeComponent == "help"} component="help" icon={messages} text="Help" drop={null} />
            <div className='flex items-center gap-2 mt-8'>
                <img src={ai} alt="chat with ai" className="w-[60px]" />
                <p className='text-[#6E7390]'>Chat with AI</p>
            </div>

            <div className="longline"></div>
        </div>
    )
}

export default Sidebar