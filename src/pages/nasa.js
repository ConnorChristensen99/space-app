import React, { useState, useEffect } from "react";

function Nasa() {
const [engine1, setENGINE1] = useState("")
const [engine2, setENGINE2] = useState("")
const [engine3, setENGINE3] = useState("")

const [software1, setSOFTWARE1] = useState("")
const [software2, setSOFTWARE2] = useState("")
const [software3, setSOFTWARE3] = useState("")



const API_KEY = 'ubtDeq16oc6DaL16ddmYvUlEiRF5zGwnYRiYv7tn'

async function getSoftware() {
  const engine = await fetch(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=${API_KEY}`)
 
  let engines = await engine.json()

 console.log(engines.results)
  setENGINE1(engines.results[1][10])
  setENGINE2(engines.results[5][10])
  setENGINE3(engines.results[23][10])



 const software = await fetch(`https://api.nasa.gov/techtransfer/software/?propulsion&api_key=${API_KEY}`)
 
 let softwares = await software.json()

console.log(softwares.results)
  setSOFTWARE1(softwares.results[14][2])
  setSOFTWARE2(softwares.results[15][2])
  setSOFTWARE3(softwares.results[16][2])
}



getSoftware()



  return (
    <div>
      <h1>
        Engines and Parts used by NASA
      </h1>
      <div id="engine">
      <img class="enginePhoto" src={engine1} />
      <img class="enginePhoto" src={engine2} />
      <img class="enginePhoto" src={engine3} />
      </div>
      <h3>
       Propulsion Software Used by NASA
      </h3>
      <ul>
        <li>{software1}</li>
        <li>{software2}</li>
        <li>{software3}</li>
      </ul>
    </div>
  );
}
export default Nasa;
