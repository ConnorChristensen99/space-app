import React, { useState, useEffect } from "react";

function Mars() {
const [mars1, setMARS1] = useState("")
const [mars2, setMARS2] = useState("")
const [mars3, setMARS3] = useState("")
const [mars4, setMARS4] = useState("")

const API_KEY = 'ubtDeq16oc6DaL16ddmYvUlEiRF5zGwnYRiYv7tn'

async function getForecast() {
  const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`)
 
  let forecast = await response.json()

 console.log(forecast)
}

async function getPictures() {
  const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`)
 
  let pictures = await response.json()

 setMARS1(pictures.photos[0].img_src)
 setMARS2(pictures.photos[1].img_src)
 setMARS3(pictures.photos[2].img_src)
 setMARS4(pictures.photos[3].img_src)
}
getForecast()
getPictures()
  

  return (
    <div>
      <h1>
        Forecast on Mars
      </h1>

      <h3>
        Mars Rover Photos
      </h3>
      <div id="marsPhotoss">
      <img class="marsPhoto" src = {mars1}/>
      <img class="marsPhoto" src = {mars2}/>
      <img class="marsPhoto" src = {mars3}/>
      <img class="marsPhoto" src = {mars4}/>
      </div>
    </div>
  );
}
export default Mars;
