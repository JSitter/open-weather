import React from 'react';

import './App.css';
import {getWeather} from './utils/fetch_weather.js';


function App() {
  //this needs to be on the backend
  let apiKey = 'api_key';
  
  return (
    <div className="App">
      
      <button onClick={()=>getWeather("San Francisco", 'us', apiKey)}>
      Click Me
      </button>
    </div>
  );
}

export default App;
