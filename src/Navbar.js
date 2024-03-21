import React from 'react'
import {NavLink}  from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div id='div'>  
        <NavLink   to='/'>   <p>Home</p> </NavLink>
       
       <NavLink  to='/about'>     <p> About</p>  </NavLink>
     
        <p>Contact US</p>
        </div>
      

    </>
  )
}

export default Navbar