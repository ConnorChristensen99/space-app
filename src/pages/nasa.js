import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import ReadMoreReact from 'read-more-react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

let favoritedSoftware = []

function Nasa() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

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


const [open, setOpen] = React.useState(false);
const [opeN, setOpeN] = React.useState(false);
const handleClose = () => setOpen(false);
const handleClosE = () => setOpeN(false);


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


function callFunctions(softwareName) {
  addToFavorites(softwareName)
  setOpen(true)
}

function callOtherFunctions() {
  setOpen(false);
  setOpeN(true)
}
const removeElement = (name) => {
  const newSoftware = list.filter(item => item !== name);
  setList(newSoftware);
};

function addToFavorites(softwareName){
    let tempArr = list;

    tempArr.push(softwareName);

    setList(tempArr);

    setValue("");
}

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

const minimumLength = 20
const idealLength = 400
const maxLength = 800
const readMoreText = `Read More` 



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
          <Button id="favNASA4" variant="contained" color="error" onClick={() => callFunctions(software1Name)}>Favorite</Button>
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
          <Button id="favNASA3" variant="contained" color="error" onClick={() => callFunctions(software2Name)}>Favorite</Button>
        </div>
        <div id="card3">
          <h3>{software3Name}</h3>
          <ReadMoreReact text={software3Desc}
            min={minimumLength}
            ideal={idealLength}
            max={maxLength}
            readMoreText={readMoreText}/>
          <span class="type">Release Type: &nbsp; <strong>{software3Type}</strong></span>
          <Button id="favNASA2" variant="contained" color="error" onClick={() => callFunctions(software3Name)}>Favorite</Button>
        </div>
        <div id="card4">
          <h3>{software4Name}</h3>
          <ReadMoreReact text={software4Desc}
            min={minimumLength}
            ideal={idealLength}
            max={maxLength}
            readMoreText={readMoreText}/>
         <span class="type">Release Type: &nbsp; <strong>{software4Type}</strong></span>
         <Button id="favNASA1" variant="contained" color="error" onClick={() => callFunctions(software4Name)}>Favorite</Button>
        </div>
        <div id="card5">
          <h3>{software5Name}</h3>
          <ReadMoreReact text={software5Desc}
            min={minimumLength}
            ideal={idealLength}
            max={maxLength}
            readMoreText={readMoreText}/>
          <span class="type">Release Type: &nbsp; <strong>{software5Type}</strong></span>
          <Button id="favNASA" variant="contained" color="error" onClick={() => callFunctions(software5Name)}>Favorite</Button>
        </div>
      </div>


      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Favorited NASA Software:
      <ul>{list.length > 0 && list.map((item) => <li id="NASAITEM"> <span id="x" onClick={() => removeElement(item)}>&#10005; </span> {item}</li>)}</ul>
    </Typography>
    <Button id="sendButton" variant="contained" color="error" onClick={() => callOtherFunctions()}>
  Share the List!
</Button>
  </Box>
</Modal>


<Modal
  open={opeN}
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
    <Button id="sendButton" variant="contained" color="error" onClick={handleClosE}>
  Share the List!
</Button>
  </Box>
</Modal>

    </div>
  );
}
export default Nasa;
