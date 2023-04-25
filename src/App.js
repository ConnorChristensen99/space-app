import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Earth from './pages/earth';
import Mars from './pages/mars';
import NASA from './pages/nasa';
import Events from './pages/events';
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



// BEGIN APP
function App() {
  const [potd, setPOTD] = useState("")
  const [potdTITLE, setPOTDTITLE] = useState("")
  const [potdDESC, setPOTDDESC] = useState("")
  const [setDATA, setData] = useState("")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
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
          <Route index path='/earth' element={<Earth />} />
          <Route path='/mars' element={<Mars />} />
          <Route path='/nasa' element={<NASA />} />
          <Route path='/events' element={<Events />} />
      </Routes>
      </Router>); hideLanding(); 
  }} >Explore</Button>
  


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
    <div id="shareButton">
    <Button variant="contained" color="error" onClick={handleOpen}>
  Share
</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Share with your friends!
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      <label>Please enter an email:</label> <br/>
      <input type="email" placeholder="joe@joseph.com"/>
    </Typography>
    <Button id="sendButton" variant="contained" color="error" onClick={handleClose}>
  Send the Image!
</Button>
  </Box>
</Modal>
</div>
       </div>
      </header>
    </div>
  );
}


export default App;
