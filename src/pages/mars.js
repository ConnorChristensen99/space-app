import React, { useState, useEffect } from "react";

function Mars() {
const [mars1, setMARS1] = useState("")
const [mars2, setMARS2] = useState("")
const [mars3, setMARS3] = useState("")
const [mars4, setMARS4] = useState("")
const [mars5, setMARS5] = useState("")
const [mars6, setMARS6] = useState("")
const [mars7, setMARS7] = useState("")
const [mars8, setMARS8] = useState("")
const [mars9, setMARS9] = useState("")
const [mars11, setMARS11] = useState("")
const [mars12, setMARS12] = useState("")
const [mars13, setMARS13] = useState("")

const API_KEY = 'ubtDeq16oc6DaL16ddmYvUlEiRF5zGwnYRiYv7tn'


// useEffect(() => {
//   const fetchData = async () => {
//   const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`)

//   let forecast = await response.json()

//  console.log(forecast)
// }
// fetchData()
// }, [])



useEffect(() => {
  const fetchData = async () => {
  const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2018-6-3&api_key=${API_KEY}`)
 
  let pictures = await response.json()
  console.log(pictures)

 setMARS1(pictures.photos[0].img_src)
 setMARS2(pictures.photos[1].img_src)
 setMARS3(pictures.photos[2].img_src)
 setMARS4(pictures.photos[3].img_src)
 setMARS5(pictures.photos[19].img_src)
 setMARS6(pictures.photos[21].img_src)
 setMARS7(pictures.photos[22].img_src)
 setMARS8(pictures.photos[65].img_src)
 setMARS9(pictures.photos[20].img_src)
 setMARS11(pictures.photos[43].img_src)
 setMARS12(pictures.photos[23].img_src)
 setMARS13(pictures.photos[54].img_src)
}
fetchData()
}, [])


  return (
    <div class="mainPage">
      

      <h3>
        Mars Rover Photos
      </h3>
      <div id="marsPhotoss">
      <img class="marsPhoto" src = {mars1}/>
      <img class="marsPhoto" src = {mars2}/>
      <img class="marsPhoto" src = {mars3}/>
      <img class="marsPhoto" src = {mars4}/>
      <img class="marsPhoto" src = {mars5}/>
      <img class="marsPhoto" src = {mars6}/>
      <img class="marsPhoto" src = {mars7}/>
      <img class="marsPhoto" src = {mars8}/>
      <img class="marsPhoto" src = {mars9}/>
      <img class="marsPhoto" src = {mars11}/>
      <img class="marsPhoto" src = {mars12}/>
      <img class="marsPhoto" src = {mars13}/>
      </div>
    </div>
  );
}
export default Mars;
