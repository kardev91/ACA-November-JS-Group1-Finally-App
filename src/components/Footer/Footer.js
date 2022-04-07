import React from "react";
import "./Footer.css";
import ContactUsModal from "../Modals/ContactUsModal";
import Facebook from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import AboutModal from "../Modals/AboutModal";
import NewsModal from '../Modals/AboutModal'

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
                        {new Date().getFullYear()} Բոլոր իրավունքները պաշտպանված են
                    </span>
                    <a title={"Միացեք Մեզ Facebook-ում"} href="https://www.facebook.com/" target="_blank" className="item1">
                       <Facebook/>
                    </a>
                    <a title={"Միացեք Մեզ Instagram-ում"} href="https://www.instagram.com/" target="_blank" className="item1">
                        <InstagramIcon/>
                    </a>
                    <a title={"Դիտեք Մեզ Youtube-ում"} href="https://www.youtube.com/" target="_blank" className="item1">
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
