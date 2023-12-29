
import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Header = ({content}:any) => {
  return (
        <div>
                <div className="w-[100%] absolute imgg">
                        <div className="flex justify-between p-[1rem]">
                                <img src={Logo} alt="logo" width="200px"/>
                                <Link to={`/${content}`} className="text-xl font-medium">{content}</Link>
                        </div>
                 </div>
        </div>
        )
}

export default Header