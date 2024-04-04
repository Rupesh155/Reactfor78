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



// import React from 'react'
// import Navbar from './Navbar'
// import './App.css'
// import {Route,Routes}  from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// const App = () => {
//   return (
//     <>
  
//       <Navbar/>

//       <Routes>   
//         <Route  path='/'  element={<Home/>}  />
//         <Route  path='/about'  element={<About/>}  />
//       </Routes>




    
//     </>
//   )
// }

// export default App




// import React from 'react'
// import Navbar from './Navbar'

// import {Routes,Route}  from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'

// const App = () => {
//   return (
//     <>
//       {/* <Navbar/> */}
//       {/* <Routes>
//         <Route path='/'  element={<Home/>} />
//         <Route path='/about'  element={<About/>} />
//         <Route path='/contact'  element={<Contact/>} />
        
//       </Routes> */}
//       <Home/>

//     </>
//   )
// }

// export default App




// // import React from 'react'
// // import ScreenColorChange from './Home'

// // const App = () => {
// //   return (
// //     <div>
// //       <ScreenColorChange/>
// //     </div>
// //   )
// // }

// // export default App





// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [count,SetCount]=useState(0)
//   let [city,SetCity]=useState('bhopal')




//   useEffect(()=>{
   
//        fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   },[count])

//   const fun1=()=>{
//     SetCount(count+1)

//   }
//   const fun2=()=>{
//     SetCity('delhi')
//   }
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={fun1}> add</button>
//       <p>{city}</p>
//       <button onClick={fun2}> city</button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'
// const App = () => {
//   let [data,SetData]=useState([])
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos').
//     then((res)=>{
//       return res.json()
  
//     }).then((a)=>{
//       // console.log(data,"dddddd");
//       SetData(a)
  
//     })

//   },[])

//   // useEffect(()=>{
//   //   console.log('hello');

//   // })
//   // console.log('hello');

//   return (
//     <div>
//     {
//       data.map((val)=>{
//         return(<>
//         <h2>{val.title}</h2>
//         </>)
//       })
//     }
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'
// const App = () => {
//   let [count,SetCount]=useState(10)
//   let [city,SetCity]=useState('bhopal')
//   const fun2=()=>{
//     SetCity('delhi')
//   }
//   function add(){
//     SetCount(count+10)
//   }

//   useEffect(()=>{
      
//   fetch('https://jsonplaceholder.typicode.com/todos').
//   then((res)=>{
//     return res.json()

//   }).then((data)=>{
//     console.log(data);

//   })
//   },[count])
 

//   return (
//     <div>
//        <p> {count}</p>
//       <button onClick={add}> click me</button>
//       <p>{city}</p>
//       <button onClick={fun2}> change your city</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   const [input,SetInput]=useState('')
//   const [data,SetData]=useState([])
//   const fun1=(e)=>{
//     SetInput(e.target.value)
// // console.log(e.target.value);
//   }

//   const add=()=>{
//     SetData([...data,input])
//     SetInput('')

//   }
//   const delet=(id)=>{
//     let newA= data.filter((data,index)=>{
//       return index!=id

//     })
//     SetData(newA)
//   }
//   return (
//     <div>
//       <input   name='input' value={input} onChange={fun1} type='text' />
//       <button onClick={add}> add</button>
//       {
//         data.map((a,index)=>{
//           return(<>
//           <li >{a}</li>
//           <button onClick={()=>delet(index)}> delet</button>
//           </>)

//         })
//       }
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [input,SetInput]=useState()
  const [data,SetData]=useState([])
 
  const fun1=(e)=>{
    SetInput(e.target.value)

  }
  const add=()=>{
    SetData([...data,input])
    SetInput('')
  }
  return (
    <div>
      <input  name='input'  value={input} onChange={fun1} type='text' placeholder='Enter your todo'/>
      <button onClick={add}> add</button>
      {
        data.map((a,b,c)=>{
          return(<>
          <li> {a}</li>
          </>)

        })
      }
    </div>
  )
}

export default App


