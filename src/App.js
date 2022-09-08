import { useState } from "react";
import Modal from "./lib/components/Modal";

function App() {
  const myTheme = {
    containerBg: "grey",
    messageBg: "grey",
    borderColor: "black",
    buttonBg: "grey",
    buttonHoverBg: "white",
    buttonHoverTxt: "black",
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const onOpenModal = () => setModalIsOpen(true);
  const onCloseModal = () => setModalIsOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenModal();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <button type="submit" className="submit">
          Clic to open Modal
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
