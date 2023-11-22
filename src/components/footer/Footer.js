import React from 'react'
import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
      <Link to="/">
        <h4>Laurel Apothecary</h4>
      </Link>
    </div>
  )
}

export default Footer