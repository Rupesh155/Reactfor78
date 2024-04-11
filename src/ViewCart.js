import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewCart = () => {
 let location=    useLocation()
 let {cartData}=   location.state
 console.log(cartData,"ksjbfhugfwuf");
  return (
    <div>ViewCart</div>
  )
}

export default ViewCart