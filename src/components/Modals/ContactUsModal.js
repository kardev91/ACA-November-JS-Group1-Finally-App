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
            <button className="item1" onClick={() => setOpen(true)}>
                Հետադարձ կապ
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Հետադարձ կապ</h2>
                {contactUsText}
            </Modal>
        </>
    );
};
