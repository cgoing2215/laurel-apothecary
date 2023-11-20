import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div id='layout-container'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout