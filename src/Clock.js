import React, { useState } from 'react'
const Clock = () => {
    let [time,SetTime]=useState()
    setInterval(()=>{
        let a=   new Date().toLocaleTimeString()
        // console.log(a);
        SetTime(a)

    })
  return (
    <div>Clock
        {
            time
        }
    </div>
  )
}

export default Clock