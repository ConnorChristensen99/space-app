import './App.css';
import Button from '@mui/material/Button';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Earth from './pages/earth';
import Mars from './pages/mars';
import NASA from './pages/nasa';
import Events from './pages/events';
import React, { useState, useEffect } from "react";



// BEGIN APP
function App() {
  const [potd, setPOTD] = useState("")
  const [potdTITLE, setPOTDTITLE] = useState("")
  const [potdDESC, setPOTDDESC] = useState("")
  const [setDATA, setData] = useState("")

  // API KEY FOR NASA
  const API_KEY = 'ubtDeq16oc6DaL16ddmYvUlEiRF5zGwnYRiYv7tn'

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
      // convert the data to json
      const json = await response.json();
  
      // set state with the result
      console.log(json)
          setPOTD(json.hdurl) 
          setPOTDTITLE(json.title) 
          setPOTDDESC(json.explanation)
    }
    fetchData()
  }, [])
 
  

  // HIDES THE MAIN LANDING PAGE WHEN USER CLICKS "EXPLORE"
  function hideLanding() {
    let landing = document.getElementById('landing')
    landing.style="display: none;"
  }


  // CREATES STATE FOR OTHER PAGES
  const [mainDisplay, setDisplay] = useState()

    
  // SHOW BUTTON THAT IS TIED TO EXPLORE - HIDES LANDING PAGE AND SHOWS APP
  const showButton = <Button className="exploreButton" variant="contained" onClick={()=>{
    setDisplay(<Router>
      <Navbar />
      <Routes>
          <Route index path='/earth' selected element={<Earth />} />
          <Route path='/mars' element={<Mars />} />
          <Route path='/nasa' element={<NASA />} />
          <Route path='/events' element={<Events />} />
      </Routes>
      </Router>); hideLanding(); 
  }} >Explore</Button>
  


  // CALLS FUNCTION TO GET POTD ON APP START


  return (
    <div className="App">
      <header className="App-header">
        {mainDisplay}
        <div id="landing">
          <div id="header">
        <h1>
      Welcome to Space
    </h1>
       {showButton}
       </div>
       <div id="potdALL">
        <h3>Astronomy Picture of the Day</h3>
    <img className="potd" src={potd}/>
    <div className="potdTEXT">
    <h4>{potdTITLE}</h4>
    <p>{potdDESC}</p>
    </div>
    </div>
       </div>
      </header>
    </div>
  );
}


export default App;
