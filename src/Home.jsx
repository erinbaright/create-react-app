import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import './App.js';

export default function Home({ parks }) {


console.log(parks, 'Overhere')


if(!parks) return <h1></h1>


  return (
    <div>
       <div className="parks">
      <header className="header">
          <h1>National Parks of California</h1>
        <img id="nps-logo" src="https://i.imgur.com/atIvOpI.png" alt="National Park Service logo" width="80" height="100"></img>
          <h2>Highlights of The Golden State</h2>
        </header>
        
        <div>
          {parks.map((park) => (
            <div className='park-grid'> 
              <img className='the-park-pic' src={park.images[0].url}></img>
            </div>
          ))}
        </div>

        

{/* 
      <span className='grid'>
        <div className="park-pic park-1">{parks[4].images[0].url}</div>
        <div className="park-pic park-2">{parks[6].images[0].url}</div>
        <div className="park-pic park-3">{parks[12].images[0].title}</div>
        <div className="park-pic park-4">{parks[29].images[0].title}</div>
        <div className="park-pic park-5">{parks[14].images[0].title}</div>
        <div className="park-pic park-6">{parks[20].images[0].title}</div>
        <div className="park-pic park-7">{parks[25].images[0].title}</div>
        <div className="park-pic park-8">{parks[32].images[0].title}</div>
      </span> */}
    </div>

    </div>
  )
}