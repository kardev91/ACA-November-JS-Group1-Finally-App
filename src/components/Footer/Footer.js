import React from "react";
import "./Footer.css";
import ContactUsModal from "../Modals/ContactUsModal";
import Facebook from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import AboutModal from "../Modals/AboutModal";
import NewsModal from "../Modals/NewsModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faCcVisa,
  faCcMastercard,
  faApplePay,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="information">
        <AboutModal />
        <NewsModal />
        <ContactUsModal />
      </div>
      <div>
        <a
          title={"Join us in Facebook"}
          href="https://www.facebook.com/"
          rel="noopener"
        >
          <Facebook style={{fontSize: '35px', margin: '10px'}} htmlColor="white"/>
        </a>
        <a
          title={"Join us in Instagram"}
          href="https://www.instagram.com/"
          rel="noopener"
        >
          <InstagramIcon style={{fontSize: '35px', margin: '10px'}} htmlColor="white"/>
        </a>
        <a
          title={"Join us in Youtube"}
          href="https://www.youtube.com/"
          rel="noopener"
        >
          <YouTubeIcon style={{fontSize: '35px', margin: '10px'}} htmlColor="white"/>
        </a>
      </div>
      <div className="paymentMethod">
        <FontAwesomeIcon icon={faCcVisa} />{" "}
        <FontAwesomeIcon icon={faCcMastercard} />{" "}
      </div>
      <div className="copyright">
        <FontAwesomeIcon icon={faCopyright} />{" "}
        <span style={{ paddingLeft: 5 }}>
          {new Date().getFullYear()} All rights reserved
        </span>
      </div>
    </footer>
  );
}
