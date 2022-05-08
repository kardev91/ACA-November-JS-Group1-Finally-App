import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { messages } from "../../constant/Messages";

export default function AboutModal() {
  const [open, setOpen] = React.useState(false);
  const { about } = messages;

  const aboutText = <p>{about}</p>;
  return (
    <>
      <button onClick={() => setOpen(true)}>About us</button>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <h2>About us</h2>
        {aboutText}
      </Modal>
    </>
  );
}
