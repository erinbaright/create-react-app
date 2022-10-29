import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home.jsx'
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';

function App() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=wsocPvzImHobFSy9eqfISnL5LT3UCLNmCavydLOp`, {
        headers: { Accept: "application/json" },
      });
      setParks(response.data.data);
      // console.log(response.data.data)
    }

    getData();

  }, []);

  
  if (!parks) return <h2></h2>
  
  return (
    <div className="App">
      <Home parks={parks} />

    </div>
  );
}

export default App;
