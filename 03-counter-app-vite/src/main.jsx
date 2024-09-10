import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import {CounterApp} from './CounterApp'
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FistApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp  title1={'titulo'}/>  */}
        <CounterApp value={0} />
    </React.StrictMode>
);