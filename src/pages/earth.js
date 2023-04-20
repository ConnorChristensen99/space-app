import React, { useState, useEffect } from "react";

function Earth() {
  const [formLat, setFormLat] = useState("40.2969")
  const [formLon, setFormLong] = useState("111.6946")
  const [formDate, setFormDate] = useState("2019-01-01")
  
  
  const handleSubmit = event => {
    event.preventDefault();
    setFormLat(event.target.lat.value)
    setFormLong(event.target.long.value)
    setFormDate(event.target.date.value)

    console.log(formLat)
    console.log(formLon)
    console.log(formDate)
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
      <label>
        Date
    <input type="date" name="date" />
      </label>
      <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
  
export default Earth;