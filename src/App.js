import './style.css';
import Modal from './Modal.js';
import { useState } from 'react';

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal () {
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
