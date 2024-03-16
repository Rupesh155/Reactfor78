import React, { useState } from 'react'
// import './App.css'
const Home = () => {
    //    let [count,SetCount]=  useState(0)
    let [data,SetData]=useState('hello')
    const fun1=()=>{
        // SetCount(count+1)
        SetData('hiiii')
    }
  return (
    <div  >
        {/* <p>{count}</p> */}
        <h2 >{data}</h2>
        <button onClick={fun1}> addd</button>
    </div>
  )
}
export default Home