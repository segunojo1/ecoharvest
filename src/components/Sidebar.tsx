import React, { useContext, useRef, useState } from 'react'
import logo from "../assets/logo.png"
import dash from "../assets/dashboard.svg"
import dropdown from "../assets/dropdown.svg"
import cloud from "../assets/cloud-inactive.svg"
import market from "../assets/arrow-trend-up-solid.svg"
import messages from "../assets/messages.svg"
import settings from "../assets/settings.svg"
import social from "../assets/social.svg"
import goals from "../assets/goals.png"
import send from "../assets/send.svg"
import ai from "../assets/chat.svg"
import { Link, useLocation, useParams } from 'react-router-dom'
import SideComp from './SideComp'
import NavContext from '../context/NavContext'
import OpenAI from 'openai'
import { ChatLogItem } from '../@types'

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  
    // Extract the last segment after the last slash
    const lastSegment = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    // ****************side bar states*********************8
    const [activeComponent, setActiveComponent] = useState(lastSegment);
    const {activeNav, setActiveNav}:any = useContext(NavContext);


    // ****************OPENAI CONFIG*****************
    const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_KEY,
        dangerouslyAllowBrowser: true,
    })
    

    // **********CHAT BOT STATES***************
    const [userMessage, setUserMessage] = useState('');
    const [chatLog, setChatLog] = useState<ChatLogItem[]>([
        {user: "chat", message: ""}
    ]);

    /**
     * handleClick: handles click of any sidebar component
     * 
     * @comp - the component name
     */
    const handleClick = (comp: string) => {
        if (activeComponent == comp) {
            ;
        } else {
            setActiveComponent(comp)
        }
        console.log("click11");
    }

    /**
     * sendMessage: handles sending prompt to openai
     * @param e- event
     */
    const sendMessage = async (e:any) => {
        e.preventDefault();
        setUserMessage('');
        setChatLog([...chatLog, {user: "me", message: userMessage}])
        try {
            const res = await openai.chat.completions.create({
                messages: [{
                    role: "user", content: userMessage
                }],
                model: "gpt-3.5-turbo",
                temperature: 0.7
            })
            const response = res.choices[0].message.content;
            setChatLog([...chatLog, {user: "chat", message: response}])
            console.log(res.choices[0]);
            
        } catch (error) {
            
        }
    }
    /**
     * handleMessage: handles settin state of message while typing
     * @param e 
     */
    const handleMessage = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserMessage(e.target.value)
    }

    /**
     * handleEnter: handle when enter key is pressed
     * @param event 
     */
    const handleEnter = (event:any) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage(event);
          }
    }

    
    return (
        <div className={`dashside ${activeNav ? 'block' : 'hidden'} md:block`}>
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
            <div className='flex items-center gap-2 mt-8 cursor-pointer'>
                <img src={ai} alt="chat with ai" className="w-[60px]" />
                <p className='text-[#6E7390]'>Chat with AI</p>
            </div>

           {/* *****************CHAT BOT*********************/}
            <div className=' h-[80vh] w-[400px] absolute bottom-24 bg-slate-800 flex flex-col z-10'>
                <div className='bg-[#c3f07a] p-4 flex gap-4 items-center'>
                    <div className='w-[50px] h-[50px] rounded-full bg-black'></div>
                    <div className='flex flex-col'>
                        <p className=' text-base'>Agribot</p>
                        <p>How can we help?</p>
                    </div>
                </div>

                {/* ***************CHAT SECTION*********** */}
                <div className='p-5 flex flex-col gap-2'>
                    {/* <p className='p-1 bg-white w-fit rounded-lg ml-auto'>Hello</p>
                    <p className='p-1 bg-white w-fit rounded-lg'>Hello</p>
                    <p className='p-1 bg-white w-fit rounded-lg ml-auto'>how aare oyur doing havent heard from you in a while hoep you are good</p> */}

                    {chatLog.map((chat) => {
                        if (chat.user == "me") {
                            return (
                                <p className='p-1 bg-white w-fit rounded-lg rounded-br-none ml-auto'>{chat.message}</p>
                            )
                        }else{
                            return (
                                <p className='p-1 bg-white w-fit rounded-lg rounded-bl-none'>{chat.message}</p>
                            )
                        }
                    })}
                </div>
                {/* ********************END OF CHAT*************** */}

                <form className='bottom-0 mt-auto relative'>
                    <textarea  className='w-full rounded-none '  placeholder='Write a message...' value={userMessage ?? ''} onChange={handleMessage} onKeyDown={handleEnter}/>
                    <button type='submit' className='absolute right-2 cursor-pointer my-auto top-2'>
                        <img src={send} role='button' alt="send message" onClick={sendMessage}/>
                    </button>
                </form>
            </div>
            <div className="longline"></div>
        </div>
    )
}

export default Sidebar