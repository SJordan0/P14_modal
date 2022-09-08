import { useState } from "react";
import Modal from "./lib/components/Modal";

function App() {

  //define css for modale
  const myTheme = {
    containerBg: "grey",
    messageBg: "grey",
    borderColor: "black",
    buttonBg: "grey",
    buttonHoverBg: "white",
    buttonHoverTxt: "black",
  };

  //State of the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //State for open the modal
  const onOpenModal = () => setModalIsOpen(true);
  //State reset for closing the modal
  const onCloseModal = () => setModalIsOpen(false);
  //Open the modal
  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenModal();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <button type="submit" className="submit">
          Click to open Modal
        </button>
      </form>

      {modalIsOpen && (
        <Modal
          theme={myTheme}
          close={onCloseModal}
          text="Write here whatever you want!"
        />
      )}
    </div>
  );
}

export default App;
