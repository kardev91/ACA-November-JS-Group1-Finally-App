import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {messages} from "../../messages/Messages";

export default function ContactUsModal(){
    const [open, setOpen] = React.useState(false);
    const {contactUs} = messages;

    const contactUsText = (
        <p>{contactUs}</p>
    );
    return (
        <>
            <button onClick={() => setOpen(true)}>
                Contact Us
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Contact Us</h2>
                {contactUsText}
            </Modal>
        </>
    );
};
