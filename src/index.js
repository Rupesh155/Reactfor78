// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from './Context';
const root = ReactDOM.createRoot(document.getElementById('root'));

 let data='hello'
root.render(
<Context.Provider   value={data}>   
    <App />
    </Context.Provider>
 


);

// npm i react-router-dom








































