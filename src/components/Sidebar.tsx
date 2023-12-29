import React, { useState } from 'react'
import logo from "../assets/logo.png"
import dash from "../assets/dashboard.svg"
import dropdown from "../assets/dropdown.svg"
import collab from "../assets/collab.svg"
import incentives from "../assets/incentives.svg"
import messages from "../assets/messages.svg"
import settings from "../assets/settings.svg"
import social from "../assets/social.svg"
import goals from "../assets/goals.png"
import ai from "../assets/chat.svg"
import { Link } from 'react-router-dom'
import SideComp from './SideComp'

const Sidebar = () => {
    const [activeComponent, setActiveComponent] = useState('');
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
            <SideComp handleClick={() => handleClick("social")} isActive={activeComponent == "social"} component="community" icon={social} text="Community" drop={dropdown} />
            <SideComp handleClick={() => handleClick("collaboration")} isActive={activeComponent == "collaboration"} component="studygroups" icon={collab} text="Study Groups" drop={dropdown} />
            <SideComp handleClick={() => handleClick("incentives")} isActive={activeComponent == "incentives"} component="incentives" icon={incentives} text="Rewards" drop={dropdown} />
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