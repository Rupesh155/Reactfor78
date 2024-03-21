// import React from 'react'
// // import Home from './Home'
// const App = () => { 
//   let count=0
//   const fun1=()=>{
//     // console.log('ehehehehe');
//     count++
//     console.log(count,"rrrr");
//   }
//   return (
//     <div>  
//     <p>  {count} </p>
//       <button  onClick={fun1}> click me</button>
      
//   {/* <Home  data='hello' /> */}
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'
// import CounterWithLogin from './Couter'
// import Clock from './Clock'

// const App = () => {
//   return (
//     <div>
//       {/* <Home/> */}
//       {/* <CounterWithLogin/> */}
//       <Home/>
//       {/* <Clock/> */}

//     </div>
//   )
// }

// export default App



import React from 'react'
import Navbar from './Navbar'
import './App.css'
import {Route,Routes}  from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'


const App = () => {
  return (
    <>
    
      <Navbar/>


      <Routes>

        <Route   path='/' element={<Home/>}  />
        <Route   path='/about' element={<About/>}  />
        <Route   path='/contact' element={<Contact/>}  />


      </Routes>


    
    </>
  )
}

export default App