import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { messages } from "../../constant/Messages";

export default function NewsModal() {
  const [open, setOpen] = React.useState(false);
  const { news } = messages;

  const newsText = <p>{news}</p>;
  return (
    <>
      <button onClick={() => setOpen(true)}>News</button>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <h2>News</h2>
        {newsText}
      </Modal>
    </>
  );
}
