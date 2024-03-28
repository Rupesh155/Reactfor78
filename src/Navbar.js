import React from 'react'
import './App.css'
import {NavLink}  from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div id='div' > 
    <NavLink to='/'>   <p> Home</p> </NavLink>
        
        <NavLink to='/about'>    <p> About</p> </NavLink>
       
        <p> Contact</p>
        </div>

    </>
  )
}

export default Navbar