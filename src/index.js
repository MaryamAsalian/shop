import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

// axios.interceptors.request.use((request)=>{
//   console.log(request);
//   return request ;
// },
// (error)=>{
//   console.log(error);
//   return Promise.reject(error);
// }
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <App />
    </BrowserRouter>
);


