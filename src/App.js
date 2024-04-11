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




// import React from 'react'
// import ScreenColorChange from './Home'

// const App = () => {
//   return (
//     <div>
//       <ScreenColorChange/>
//     </div>
//   )
// }

// export default App





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

// import React, { useState } from 'react'
// const App = () => {
//   const [input,SetInput]=useState()
//   const [data,SetData]=useState([])
//   const fun1=(e)=>{
//     SetInput(e.target.value)
//   }
//   const add=()=>{
//     SetData([...data,input])
//     SetInput('')
//   }

//   function delet(id){
//     // console.log(id);
//     let newAA=  data.filter((val,index)=>{
//       return index!=id

//     })
//     SetData(newAA)

//   }
//   return (
//     <div>
//       <input  name='input'  value={input} onChange={fun1} type='text' placeholder='Enter your todo'/>
//       <button onClick={add}> add</button>
//       {
//         data.map((a,b,c)=>{
//           return(<>
//           <li> {a}</li>
//           <button onClick={()=>delet(b)}> delet</button>
//           </>)
//         })
//       }
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [input,SetInput]=useState()
//   const [data,SetData]=useState([])
//   function fun1(e){
//     SetInput(e.target.value)
//     // console.log(e.target.value);
//   }
//   const add=()=>{
//     SetData([...data,input])
//     SetInput('')
//   }
//   function delet(id){
//         let newA=   data.filter((val,index)=>{
//           return index!=id
//           })
//           SetData(newA)
//   }
//   return (
//     <div>
//       <input  onChange={fun1} type='text' name=''  value={input}   placeholder='Enter your todo' />
//       <button onClick={add}> add</button>{
//         data.map((a,b)=>{
//           return(<>
//           <li> {a}</li>
//           <button onClick={()=> delet(b)}> delet</button>
//           </>)

//         })
//       }
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'
// const App = () => {
//   let [count,SetCount]=useState(0)
//   let [city,SetCity]=useState('bhopal')

//  // useEffect
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos').
//     then((res)=>{
//       return res.json()
  
//     }).then((data)=>{
//       console.log(data);
  
//     })
    
//   },[count])






//   function fun1(){
//     // console.log('eheheh');
//     SetCount(count+1)
//   }
//   function fun2(){
//     SetCity('delhi')
//   }
//   return (
//     <div>
//       <p> {count}</p>
//         <button onClick={fun1}> add</button>
//         <h3>  {city}</h3>
//         <button onClick={fun2}>change  </button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   let [input,SetInput]=useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     password:""

//   })

//   function fun1(e){
//     const { name, value } = e.target;
//     SetInput({...input, [name]:value})
//     // console.log(input,"input");


  
//   }

//   const done=(e)=>{
//         e.preventDefault();
//     console.log('heheheeh');
//     console.log(input);
//   }




//   return (
//     <div>
//       <form  onSubmit={done}>
//         <input  type='text'  required  onChange={fun1} name='firstName' value={input.firstName}  placeholder='Enter your  firstName '/>
//         <br/>
//         <br/>

//         <input  type='text' required onChange={fun1}  name='lastName'  value={input.lastName} placeholder='Enter your lastName '/>
//         <br/>
//         <br/>
//         <input  type='email'   required onChange={fun1} name='email' value={input.email}  placeholder='email'/>
//         <br/>
//         <br/>
//         <input  type='password'  required onChange={fun1}  name='password' value={input.password}   placeholder='PassWord'/>
//         <br/>
//         <br/>
//         <button type='submit'> addd</button>

//       </form>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'
// const App = () => {
//   let [input,SetInput]=useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     password:""

//   })
//   let [data,SetData]=useState(null)
//     useEffect(()=>{
//       let val=   localStorage.getItem('data')
//       let newData=   JSON.parse(val)
//    console.log(newData,"rrr");
//   SetData(newData)
//     },[])
//   function fun1(e){
//     // console.log(e.target.value);   
//     let {name,value}=e.target
//     SetInput({...input, [name]:value})
//     // console.log(input,"r");

//   }

// function chalaja(e){
//   e.preventDefault();
//   console.log(input);
//      let a=  JSON.stringify(input)
//   localStorage.setItem('data',a)
//   SetData(input)
// }

// function delet(){
//   localStorage.clear('data')
//   SetData(null)

// }
//   return (
//     <div>
//       <form onSubmit={chalaja}>
//         <input type='text'  onChange={fun1}  name='firstName'  value={input.firstName} placeholder='Enter your firstName'/>
//         <br/>
//         <br/>

//         <input type='text'  onChange={fun1} name='lastName'  value={input.lastName}  placeholder='Enter your lastName'/>
//         <br/>
//         <br/>
//         <input type='email'  onChange={fun1} name='email'  value={input.email} placeholder='Enter your email'/>
//         <br/>
//         <br/>
//         <input type='password'    onChange={fun1} name='password' value={input.password} placeholder='Enter your passWord'/>
//         <br/>
//         <br/>
        
// <button   type='submit'> add</button>

//       </form>



//       {/* <h1> {data?.firstName}</h1>
//       <h4>{data.lastName}</h4>
//       <p>   {data.email}</p> */}
   

//       {
//         data?(<>
//         <h1> {data.firstName}</h1>
//         <h4>   {data.lastName}</h4>
//         <h4>  {data.email}</h4>
//         </>):(<>    <h2>  nhi mila kuch </h2></>)
//       }


//       {
//         data?( <button onClick={delet}> delet</button>):""
//       }
        
//     </div>
//   )
// }

// export default App








// import React, { useContext, useState } from 'react';

// // Create a ThemeContext
// const ThemeContext = React.createContext();

// // Create a ThemeProvider component
// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // Header component
// function Header() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <header style={{ background: theme === 'light' ? '#f0f0f0' : '#333', padding: '10px' }}>
//       <h1>Theme Switcher</h1>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </header>
//   );
// }

// // Main component
// function Main() {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <main style={{ background: theme === 'light' ? '#fff' : '#666', padding: '20px', color: theme === 'light' ? '#333' : '#fff' }}>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dui vel libero condimentum luctus. Ut consequat mauris nec enim ultrices, ac blandit arcu dapibus. Sed at dolor ac ex elementum tempus. Duis quis faucibus lacus.</p>
//     </main>
//   );
// }

// // App component
// function App() {
//   return (
//     <ThemeProvider>
//       <div>
//         <Header />
//         <Main />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;


import React from 'react'
import CompA from './CompA'
import Cart from './Cart'
import { Route,Routes } from 'react-router-dom'
import ViewCart from './ViewCart'
const App = () => {
 
  return (
    <div>
      {/* <CompA /> */}
      {/* <Cart/> */}
      <Routes>
        <Route   path='/'  element={<Cart/>}  />
        <Route  path='/view'  element={<ViewCart/>}/>
      </Routes>
    </div>
  ) }

export default App


