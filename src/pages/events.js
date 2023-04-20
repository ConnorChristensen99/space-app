import React, { useState, useEffect } from "react";

function EVENTS() {
  const [geomagnetic, setGeomagnetic] = useState("")
  const [solarflare, setSolarflare] = useState("")
  const [radiationbelt, setRadbelt] = useState("")
  const API_KEY = 'ubtDeq16oc6DaL16ddmYvUlEiRF5zGwnYRiYv7tn'



useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`https://api.nasa.gov/DONKI/GST?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${API_KEY}`);
    const response1 = await fetch(`https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${API_KEY}`);
    const response2 = await fetch(`https://api.nasa.gov/DONKI/RBE?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${API_KEY}`);

    const json = await response.json();
    console.log(json[0])

    const json1 = await response1.json();
    console.log(json1[0])

    const json2 = await response2.json();
    console.log(json2[0])
    // setRadbelt(json2[0].link)
  }
  fetchData()
}, [])

//NOW THAT YOU HAVE DATA, TURN IT INTO CARDS

  return (
    <div>
      <h1>
        Month of Space Events
      </h1>
    </div>
  );
};
  
export default EVENTS;

