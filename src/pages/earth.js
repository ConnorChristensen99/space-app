import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import SimpleImageSlider from "react-simple-image-slider";

function Earth() {
  const API_KEY = 'ubtDeq16oc6DaL16ddmYvUlEiRF5zGwnYRiYv7tn'

  const [formLat, setFormLat] = useState(1.5)
  const [formLon, setFormLong] = useState(100.75)



 
  let images = [{url: 'https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY'}]
  
  useEffect(() => {
   
    const fetchData = async () => {
    const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${API_KEY}`)

   
    let earthImage = await response.json()
  
   console.log(earthImage)

   for (let index = 0; index < earthImage.length; index++) {
    const picture = earthImage[index];

    console.log(picture.image)

    images.push({url: `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${picture.image}.png?api_key=${API_KEY}`})

    console.log(images)
   }
  }
  fetchData()
  }, [])





  function getImage(formLat, formLon) {
    const imageURL = `https://api.nasa.gov/planetary/earth/imagery?lon=${formLon}&lat=${formLat}&date=2014-02-01&api_key=${API_KEY}`

    return(
      <img id="latImage" src={imageURL} alt="image of entered location"/>
    )
  }


  const handleSubmit = event => {
    event.preventDefault();
    setFormLat(event.target.lat.value)
    setFormLong(event.target.long.value)

    console.log(formLat)
    console.log(formLon)

    getImage(formLat, formLon)

  }


  return (
    <div class="mainPage">
      
      <h1>
        EARTH
      </h1>

      <div class="imageSlider">
      <SimpleImageSlider
        width={896}
        height={904}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      </div>

      <h4>Find a satellite Image!</h4>
      <form onSubmit={handleSubmit}>
      <TextField id="filled-basic" label="Enter Latitude" variant="filled" type="text" name="lat"/>
      <TextField id="filled-basic" label="Enter Longitude" variant="filled" type="text" name="long"/>
      <input type="submit" value="Find Image" id="submitLong" />
      </form>
      <div id="satelliteImage">
        {getImage(formLat, formLon)}
      </div>
    </div>
  );
};
  
export default Earth;