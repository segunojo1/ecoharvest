import dash from "../assets/dashboard.svg"
import cloud from "../assets/cloud-inactive.svg"
import market from "../assets/arrow-trend-up-solid.svg"
import social from "../assets/social.svg"
import { Link } from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className='md:hidden flex items-center fixed bottom-0 h-[4rem] justify-between px-[1.4rem] p-4 bg-white w-full'>
        <Link to="/dashboard">
        
        <img src={dash} alt="dashboard" />
        </Link>
        <Link to="/weather">
        
        <img src={cloud} alt="weather" />
        </Link>
        <Link to="/market">
        
        <img src={market} alt="market" />
        </Link>
        <Link to="/social">
        
        <img src={social} alt="social" />
        </Link>
    </div>
  )
}

export default BottomNav