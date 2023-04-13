
import React, { useState, useEffect } from "react";


const API_KEY = 'ubtDeq16oc6DaL16ddmYvUlEiRF5zGwnYRiYv7tn'

async function getForecast() {
  const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`)
 
  let forecast = await response.json()

 console.log(forecast)
}

async function getPictures() {
  const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`)
 
  let pictures = await response.json()

 console.log(pictures)
}

getForecast()
getPictures()
  
const Mars = () => {
  return (
    <div>
      <h1>
        Forecast on Mars
      </h1>

      <h3>
        Mars Rover Photos
      </h3>
    </div>
  );
};
  
export default Mars;