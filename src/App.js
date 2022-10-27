import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [parks, setParks] = useState();

  const getData = async () => {
    const response = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=wsocPvzImHobFSy9eqfISnL5LT3UCLNmCavydLOp`, {
      headers: { Accept: "application/json" },
    });
    setParks(response.data.data);
    console.log(response.data.data)
  }
  // console.log(parks[0].fullName);
  useEffect(() => {
    getData();
  }, []);

  if (!parks) return <h2></h2>
  
  return (
    <div className="parks">
      <header className="header">
        <h1>National Parks</h1>
        <h2>{parks[4].fullName}</h2>
      </header>
      <span className='pictures'>
      {}
      </span>
    </div>
  );
}

export default App;
