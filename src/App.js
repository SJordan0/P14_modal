import './style.css';
import Modal from './lib/Modal';
import { useState } from 'react';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <div className="App">
      <div onClick={toggleModal}>
        Click here to open modal
      </div>

      <Modal isOpen={modalIsOpen} onConfirm={toggleModal}/>
    </div>
  );
}

export default App;
