import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';


function EVENTS() {
  const [geomagnetic, setGeomagnetic] = useState("")
  const [geomagneticTime, setGeomagneticTime] = useState("")
  const [geomagneticLinks, setGeomagneticLinks] = useState("")

  const [solarflare, setSolarflare] = useState("")
  const [solarflareTime, setSolarflareTime] = useState("")
  const [solarflareLinks, setSolarflareLinks] = useState("")

  const [radiationbelt, setRadbelt] = useState("")
  const [radiationbeltTime, setRadbeltTime] = useState("")
  const [radiationbeltLinks, setRadbeltLinks] = useState("")
  const API_KEY = 'ubtDeq16oc6DaL16ddmYvUlEiRF5zGwnYRiYv7tn'



useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`https://api.nasa.gov/DONKI/GST?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${API_KEY}`);
    const response1 = await fetch(`https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${API_KEY}`);
    const response2 = await fetch(`https://api.nasa.gov/DONKI/RBE?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${API_KEY}`);

    const json = await response.json();
    console.log(json[0])
    setGeomagnetic(json[0].link)
    setGeomagneticTime(json[0].startTime)
    setGeomagneticLinks(json[0].linkedEvents.length)

    const json1 = await response1.json();
    console.log(json1[0])
    setSolarflare(json1[0].link)
    setSolarflareTime(json1[0].startTime)
    setSolarflareLinks(json1[0].linkedEvents.length)

    const json2 = await response2.json();
    console.log(json2[0])
    setRadbelt(json2[0].link)
    setRadbeltTime(json2[0].startTime)
    setRadbeltLinks(json2[0].linkedEvents.length)
    


  }
  fetchData()
}, [])

//NOW THAT YOU HAVE DATA, TURN IT INTO CARDS

  return (
    <div>
      <h1>
        Month of Space Events
      </h1>


<div class="events">
      <h2>GeoMagnetic Storms</h2>
      <p>Start Time: {geomagneticTime}</p>
      <p># of events linked to this one: {geomagneticLinks}</p>
      <form action={geomagnetic}>
      <Button variant="contained" type="submit" >View Event</Button>
      </form>
      </div>


      <div class="events">
      <h2>Solar Flares</h2>
      <p>Start Time: {solarflareTime}</p>
      <p># of events linked to this one: {solarflareLinks}</p>
      <form action={solarflare}>
      <Button variant="contained" type="submit" >View Event</Button>
      </form>
</div>


<div class="events">
      <h2>Radiation Belt Enhancements</h2>
      <p>Start Time: {radiationbeltTime}</p>
      <p># of events linked to this one: {radiationbeltLinks}</p>
      <form action={radiationbelt}>
      <Button variant="contained" type="submit" >View Event</Button>
      </form>
</div>

    </div>
  );
};
  
export default EVENTS;

