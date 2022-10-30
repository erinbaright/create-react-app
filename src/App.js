import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home.jsx';
import Modal from './Modal.jsx';
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';

function App() {
  const [parks, setParks] = useState([]);
  const [show, setShow] = useState(false)

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
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
        <p>{ parks.fullName }</p>
      </Modal>  
    </div>
  );
}

export default App;
