import React, { useState, useEffect } from "react";

function Earth() {
  const API_KEY = 'ubtDeq16oc6DaL16ddmYvUlEiRF5zGwnYRiYv7tn'

  const [formLat, setFormLat] = useState(40.2969)
  const [formLon, setFormLong] = useState(111.6946)
  
  async function getData() {
    const response = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${formLon}&lat=${formLat}&date=2014-02-01&api_key=${API_KEY}`)
   
    let data = await response.json()
  
   console.log(data)
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    setFormLat(event.target.lat.value)
    setFormLong(event.target.long.value)

    console.log(formLat)
    console.log(formLon)

    getData()

  }

  return (
    <div>
      <h1>
        EARTH
      </h1>
      <h4>Find a satellite Image!</h4>
      <form onSubmit={handleSubmit}>
      <label>
        Latitude:
    <input type="text" name="lat" />
      </label>
      <label>
        Longitude:
    <input type="text" name="long" />
      </label>
      <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
  
export default Earth;