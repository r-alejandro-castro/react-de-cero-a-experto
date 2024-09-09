import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FistApp';
import './style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        <FirstApp title={'Hola'} title1={123}/> 
    </React.StrictMode>
);