import React, { createRef } from "react";
import Modal from "../Modal";

function ModalBox() {
  const modalEl = createRef();
  const onCloseModal = () => (modalEl.current.style.display = "none");
  const onShowModal = () => (modalEl.current.style.display = "block");

  return (
    <>
      <Modal ref={modalEl} onClose={onCloseModal} />
      <button onClick={onShowModal}>Open Modal Box</button>
    </>
  );
}

export default ModalBox;
