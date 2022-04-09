import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { messages } from "../../messages/Messages";


export default function AboutModal(){
    const [open, setOpen] = React.useState(false);
    const {about} = messages;

    const aboutText = (
        <p>{about}</p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Մեր մասին
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Մեր մասին</h2>
                {aboutText}
            </Modal>
        </>
    );
};
