import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SideComp = ({icon, text, component, isActive, handleClick}:any) => {
 
 
  return (
    <Link to={`/${component}`}>
    <div onClick={()=>handleClick(component)} className={isActive ? "active" : ""}>
      <div className="dashrow">
        <div >
        <img src={icon} alt={icon} />
        <p>{text}</p>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default SideComp