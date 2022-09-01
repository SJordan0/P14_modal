import React, { useState } from 'react';
import Modal from './lib/components/Modal';
import './style.css';

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className="App">
      <div onClick={toggleModal}>
        Click here to open modal
      </div>

      <Modal isOpen={modalIsOpen} onConfirm={toggleModal}/>
    </div>
  );
}
