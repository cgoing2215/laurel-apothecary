import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function NavigationLine() {
  return (
    <div className='navigation-inline-container'>
        <nav>
            <NavLink 
                to="/about"
                className={({isActive}) => isActive? "activeLink" : ""}
            >
                About
            </NavLink>

            <NavLink 
                to="/services"
                className={({isActive}) => isActive? "activeLink" : ""}
            >
                Services
            </NavLink>
            <NavLink 
                to="/recommendations"
                className={({isActive}) => isActive? "activeLink" : ""}
            >
                Recommendations
            </NavLink>
            <NavLink 
                to="/contact"
                className={({isActive}) => isActive? "activeLink" : ""}
            >
                Contact
            </NavLink>
        </nav>
    </div>
  )
}

export default NavigationLine
