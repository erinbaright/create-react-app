import React from 'react';
import './modal.css';
import './App.js';

const Modal = parks => {

  if (!parks.show) {
    return null
  }

  return (
    <div className='modal' onClick={parks.onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h4 className='modal-title'>Park Name</h4>
        </div>
        <div className='modal-body'>
          <p>info about parks</p>
        </div>
        <div className='modal-footer'>
          <button onClick={parks.onClose} className='modal-button'>More Parks</button>
        </div>
      </div>
    </div>
  )
}

export default Modal