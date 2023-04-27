import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import ReadMoreReact from 'read-more-react';



function Nasa() {
const [engine1, setENGINE1] = useState("")
const [engine2, setENGINE2] = useState("")
const [engine3, setENGINE3] = useState("")
const [engine4, setENGINE4] = useState("")
const [engine5, setENGINE5] = useState("")
const [engine6, setENGINE6] = useState("")
const [engine7, setENGINE7] = useState("")
const [engine8, setENGINE8] = useState("")
const [engine9, setENGINE9] = useState("")
const [engine10, setENGINE10] = useState("")

const [software1Name, setSOFTWARE1Name] = useState("")
const [software1Desc, setSOFTWARE1Desc] = useState("")
const [software1Type, setSOFTWARE1Type] = useState("")
const [software2Name, setSOFTWARE2Name] = useState("")
const [software2Desc, setSOFTWARE2Desc] = useState("")
const [software2Type, setSOFTWARE2Type] = useState("")
const [software3Name, setSOFTWARE3Name] = useState("")
const [software3Desc, setSOFTWARE3Desc] = useState("")
const [software3Type, setSOFTWARE3Type] = useState("")
const [software4Name, setSOFTWARE4Name] = useState("")
const [software4Desc, setSOFTWARE4Desc] = useState("")
const [software4Type, setSOFTWARE4Type] = useState("")
const [software5Name, setSOFTWARE5Name] = useState("")
const [software5Desc, setSOFTWARE5Desc] = useState("")
const [software5Type, setSOFTWARE5Type] = useState("")


const API_KEY = 'ubtDeq16oc6DaL16ddmYvUlEiRF5zGwnYRiYv7tn'

useEffect(() => {
const fetchData = async () => {
  const engine = await fetch(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=${API_KEY}`)
 
  let engines = await engine.json()

 console.log(engines.results)
  setENGINE1(engines.results[1][10])
  setENGINE2(engines.results[5][10])
  setENGINE3(engines.results[23][10])
  setENGINE4(engines.results[30][10])
  setENGINE5(engines.results[40][10])
  setENGINE6(engines.results[3][10])
  setENGINE7(engines.results[39][10])
  setENGINE8(engines.results[45][10])
  setENGINE9(engines.results[33][10])
  setENGINE10(engines.results[21][10])



 const software = await fetch(`https://api.nasa.gov/techtransfer/software/?propulsion&api_key=${API_KEY}`)
 
 let softwares = await software.json()

  console.log(softwares.results)
  setSOFTWARE1Name(softwares.results[14][2])
  setSOFTWARE1Desc(softwares.results[14][3])
  setSOFTWARE1Type(softwares.results[14][6])

  setSOFTWARE2Name(softwares.results[18][2])
  setSOFTWARE2Desc(softwares.results[18][3])
  setSOFTWARE2Type(softwares.results[18][6])

  setSOFTWARE3Name(softwares.results[15][2])
  setSOFTWARE3Desc(softwares.results[15][3])
  setSOFTWARE3Type(softwares.results[15][6])

  setSOFTWARE4Name(softwares.results[16][2])
  setSOFTWARE4Desc(softwares.results[16][3])
  setSOFTWARE4Type(softwares.results[16][6])

  setSOFTWARE5Name(softwares.results[21][2])
  setSOFTWARE5Desc(softwares.results[21][3])
  setSOFTWARE5Type(softwares.results[21][6])
}
fetchData()
}, [])

const images = [
  {url: engine1},
  {url: engine2},
  {url: engine3},
  {url: engine4},
  {url: engine5},
  {url: engine6},
  {url: engine7},
  {url: engine8},
  {url: engine9},
  {url: engine10}
]

const minimumLength = 80
const idealLength = 100
const maxLength = 200
const readMoreText = "Read More"

  return (
    <div class="mainPage">
      
      <h1>
        NASA's Assets
      </h1>
      <div class="imageSlider">
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      </div>
      <h3>
       Varying Softwares used by NASA
      </h3>

      <div class="softwareCards">
        <div id="card1">
          <h3>{software1Name}</h3>
          <ReadMoreReact 
            text={software1Desc}
            min={minimumLength}
            ideal={idealLength}
            max={maxLength}
            readMoreText={readMoreText}/>
          <span class="type">Release Type: &nbsp; <strong>{software1Type}</strong></span>
        </div>
        <div id="card2">
         <h3>{software2Name}</h3>
         <ReadMoreReact 
         text={software2Desc}
            min={minimumLength}
            ideal={idealLength}
            max={maxLength}
            readMoreText={readMoreText}/>
          <span class="type">Release Type: &nbsp; <strong>{software2Type}</strong></span>
        </div>
        <div id="card3">
          <h3>{software3Name}</h3>
          <ReadMoreReact text={software3Desc}
            min={minimumLength}
            ideal={idealLength}
            max={maxLength}
            readMoreText={readMoreText}/>
          <span class="type">Release Type: &nbsp; <strong>{software3Type}</strong></span>
        </div>
        <div id="card4">
          <h3>{software4Name}</h3>
          <ReadMoreReact text={software4Desc}
            min={minimumLength}
            ideal={idealLength}
            max={maxLength}
            readMoreText={readMoreText}/>
         <span class="type">Release Type: &nbsp; <strong>{software4Type}</strong></span>
        </div>
        <div id="card5">
          <h3>{software5Name}</h3>
          <ReadMoreReact text={software5Desc}
            min={minimumLength}
            ideal={idealLength}
            max={maxLength}
            readMoreText={readMoreText}/>
          <span class="type">Release Type: &nbsp; <strong>{software5Type}</strong></span>
        </div>
      </div>

    </div>
  );
}
export default Nasa;
