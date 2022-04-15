import React from "react";
import "./Footer.css";
import ContactUsModal from "../Modals/ContactUsModal";
import Facebook from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import AboutModal from "../Modals/AboutModal";
import NewsModal from '../Modals/NewsModal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {faCcVisa, faCcMastercard, faApplePay} from "@fortawesome/free-brands-svg-icons";



export default function Footer(){
    return (
        <footer className="footer" >
            <div className="footer-container">
                <div className="item1">
                    <img className={"logo"} src={'/img.png'} alt={'There is no logo'}/>
                    <AboutModal/>
                    <p>|</p>
                    <NewsModal />
                    <p>|</p>
                    <ContactUsModal/>
                </div>
                <div className="item2">
                       <FontAwesomeIcon icon={faCopyright} />{" "}
                       <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} All rights reserved
                    </span>
                    <a title={"Join us in Facebook"} href="https://www.facebook.com/" rel="noopener" className="item1">
                       <Facebook/>
                    </a>
                    <a title={"Join us in Instagram"} href="https://www.instagram.com/" rel="noopener" className="item1">
                        <InstagramIcon/>
                    </a>
                    <a title={"Join us in Youtube"} href="https://www.youtube.com/" rel="noopener" className="item1">
                       <YouTubeIcon/>
                    </a>
                </div>
            </div>
            <div className={"payment-method"} >
                <FontAwesomeIcon icon={faCcVisa}/>{" "}
                <FontAwesomeIcon icon={faCcMastercard}/>{" "}
                <FontAwesomeIcon icon={faApplePay}/>{" "}
            </div>
        </footer>
    );
};
