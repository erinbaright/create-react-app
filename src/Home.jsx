import React from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import "./App.js";
import Modal from "./Modal.jsx";

export default function Home({ parks }) {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState();

  console.log(parks, "Overhere");
  console.log(show);

  if (!parks) return <h1></h1>;

  return (
    <div>
      <div className="parks">
        <header className="header">
          <h1>National Parks of California</h1>
          <img
            id="nps-logo"
            src="https://i.imgur.com/atIvOpI.png"
            alt="National Park Service logo"
            width="80"
            height="100"
          ></img>
          <h2>Highlights of The Golden State</h2>
        </header>

        <div className="flex-container">
          {parks.map((park) => (
            <div onClick={() => setShow(true)} key={parks.id}>
              <img
                className="the-park-pic"
                src={park.images[0].url}
                alt=""
                onClick={() => {
                  setModalData(park);
                }}
              ></img>
            </div>
          ))}
        </div>

        {/* <div>
          {parks.map(park => (
            <div className="park-item" key={park.id}>
              <h3>{park.fullName}</h3>
            </div>
          ))}
        </div> */}

        <Modal
          setShow={setShow}
          show={show}
          onClose={() => setShow(false)}
          modalData={modalData}
        />

      </div>
    </div>
  );
}
