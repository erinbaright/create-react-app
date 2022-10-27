import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';

function App() {
  const [parks, setParks] = useState();

  const [parkPic, setParkPic] = useState()
  const [parkName, setParkName] = useState()
  const [description, setDescription] = useState()
  const [weather, setWeather] = useState()
  const [designation, setDesignation] = useState()

  // fullName
      // description
      // images[0].url
      // image[0].caption
      // weatherInfo

  const getData = async () => {
    const response = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=wsocPvzImHobFSy9eqfISnL5LT3UCLNmCavydLOp`, {
      headers: { Accept: "application/json" },
    });
    setParks(response.data.data);
    console.log(response.data.data)
  }
  // console.log(parks[0].fullName);
  useEffect(() => {

    if (parks) {

      let np = parks.filter((park) => park.designation.includes ("National Park") || ("National and State Parks"))

      setDesignation(np)
      
  
      let testPic = parks[25].images[0].url
      console.log(testPic);
      setParkPic(testPic)
    }


    getData();
  }, []);

  
  if (!parks) return <h2></h2>

  console.log(designation[0].images[0].url)
  
  return (
    <div className="parks">
      <header className="header">
        <h1>National Parks of California</h1>
        <img id="nps-logo" src="https://i.imgur.com/atIvOpI.png" alt="National Park Service logo" width="80" height="100"></img>
        {/* <h2>{parks[4].fullName}</h2> */}
      </header>
      {/* <div className='des'>{designation.map((des) => {
        <p>{designation.weatherInfo}</p>
        // <img src={des.images[0].url}></img>
      }) }</div> */}
      <span className='grid'>
        
        
        <div className="park-pic park-1">{parks[4].images[0].url}</div>
        <div className="park-pic park-2">{parks[6].images[0].url}</div>
        <div className="park-pic park-3">{parks[12].images[0].title}</div>
        <div className="park-pic park-4">{parks[29].images[0].title}</div>
        <div className="park-pic park-5">{parks[14].images[0].title}</div>
        <div className="park-pic park-6">{parks[20].images[0].title}</div>
        <div className="park-pic park-7">{parks[25].images[0].title}</div>
        <div className="park-pic park-8">{parks[32].images[0].title}</div>
        <img src={parkPic}></img>
      </span>
    </div>
  );
}

export default App;
