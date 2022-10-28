import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Home from './Home.jsx'
// import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';

function App() {
  const [parks, setParks] = useState();
  const [current, setCurrent] = useState(0);

  const getData = async () => {
    const response = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=NY&api_key=A1CBdPvAMjo2mZbonnfGWdOQPUsDEafOQbdO4LTx`, {
      headers: { Accept: "application/json" },
    });
    // console.log(parkNames)
    const parkNames = Object.keys(response.data)
    const nyParks = Object.entries(response.data)
    setParks(response.data);
    console.log(response.data)
  }
  useEffect(() => {
    getData();
  }, []);
  
  if (current >= 33) {
    setCurrent(0)
  }

  let negative = () => {
    if (current - 1 === -1) {
      setCurrent(32)
    } else {
      setCurrent(current - 1)
    }
  }
  
  if (!parks) return <h2></h2>
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=wsocPvzImHobFSy9eqfISnL5LT3UCLNmCavydLOp`, {
  //       headers: { Accept: "application/json" },
  //     });
  //     setParks(response.data.data);
  //     // console.log(response.data.data)
  //   }

  //   getData();

  // }, []);
console.log(getData.parkNames)
  
  
  return (
    <div className="parks">
      {/* <Home parks={parks} /> */}
      <header className="header">
          <h1>National Parks of California</h1>
        <img id="nps-logo" src="https://i.imgur.com/atIvOpI.png" alt="National Park Service logo" width="80" height="100"></img>
          <h2>Highlights of The Golden State</h2>
      </header>
      <button className="btn" onClick={() =>negative()}>Previous Park</button>
      <button className="btn" onClick={() => (setCurrent(current + 1))}>Next Park</button>
      {/* {getData.nyParks.length > 0 && (
        name={}
      <span className='park-pic'>
        <div className='fullName'>{parks.fullName}</div>
        <img className='the-park-pic' src={parks.images[0]}></img>
        <div className='caption'>{ parks.caption}</div>
        <div className='description'>{parks.desription}</div>
        <div className='weather'>{ parks.weatherInfo}</div>
      </span>
      )} */}
      {/* <button className='button' onClick={getData}>Next Park</button> */}

    </div>
  );
}

export default App;

// import './App.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';

// function App() {
//   const [parks, setParks] = useState();

//   const [parkPic, setParkPic] = useState()
//   const [parkName, setParkName] = useState()
//   const [description, setDescription] = useState()
//   const [weather, setWeather] = useState()
//   const [designation, setDesignation] = useState()

//   // fullName
//       // description
//       // images[0].url
//       // image[0].caption
//       // weatherInfo

//   const getData = async () => {
//     const response = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=wsocPvzImHobFSy9eqfISnL5LT3UCLNmCavydLOp`, {
//       headers: { Accept: "application/json" },
//     });
//     setParks(response.data.data);
//     console.log(response.data.data)
//   }
//   // console.log(parks[0].fullName);
//   useEffect(() => {

//     if (parks) {

//       let np = parks.filter((park) => park.designation.includes ("National Park") || ("National and State Parks"))

//       setDesignation(np)
      
  
//       let testPic = parks[25].images[0].url
//       console.log(testPic);
//       setParkPic(testPic)
//     }


//     getData();
//   }, []);

  
//   if (!parks) return <h2></h2>
  
//   return (
//     <div className="parks">
//       <header className="header">
//         <h1>National Parks of California</h1>
//         <img id="nps-logo" src="https://i.imgur.com/atIvOpI.png" alt="National Park Service logo" width="80" height="100"></img>
       
//       </header>
      
//       <span className='grid'>
        
        
//         <div className="park-pic park-1"><img src={parks[4].images[0].url} width="125" height="100"/></div>
//         <div className="park-pic park-2"><img src={parks[6].images[0].url} width="125" height="100"/></div>
//         <div className="park-pic park-3"><img src={parks[12].images[0].url} width="125" height="100"/></div>
//         <div className="park-pic park-4"><img src={parks[29].images[0].url} width="125" height="100"/></div>
//         <div className="park-pic park-5"><img src={parks[14].images[0].url} width="125" height="100"/></div>
//         <div className="park-pic park-6"><img src={parks[20].images[0].url} width="125" height="100"/></div>
//         <div className="park-pic park-7"><img src={parks[25].images[0].url} width="125" height="100"/></div>
//         <div className="park-pic park-8"><img src={parks[32].images[0].url} width="125" height="100"/></div>
//         {/* <img src={parkPic}></img> */}
//       </span>
//     </div>
//   );
// }

// export default App;
