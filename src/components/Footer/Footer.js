import React from "react";
import ContactUsModal from "../Modals/ContactUsModal";
import Facebook from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import AboutModal from "../Modals/AboutModal";
import NewsModal from "../Modals/NewsModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  information: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    color: "red",
    borderBottom: "0.5px solid white",
    "&: hover": {
      textDecoration: "none",
      color: "red",
      cursor: "pointer",
    },
    "& button": {
      border: "none",
      width: "150px",
      height: "30px",
      backgroundColor: "#323232",
      fontSize: "15px",
      color: "white",
      "&: hover": {
        cursor: "pointer",
      },
    },
  },
  copyright: {
    color: "white",
    fontSize: "10px",
    opacity: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
  footer: {
    width: "100%",
    height: "160px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#323232",
  },
  paymentMethod: {
    color: "white",
    fontSize: "25px",
  },
  socialLogo: {
    fontSize: "35px",
    margin: "10px",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.information}>
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
          <Facebook className={classes.socialLogo} htmlColor="white" />
        </a>
        <a
          title={"Join us in Instagram"}
          href="https://www.instagram.com/"
          rel="noopener"
        >
          <InstagramIcon className={classes.socialLogo} htmlColor="white" />
        </a>
        <a
          title={"Join us in Youtube"}
          href="https://www.youtube.com/"
          rel="noopener"
        >
          <YouTubeIcon className={classes.socialLogo} htmlColor="white" />
        </a>
      </div>
      <div className={classes.paymentMethod}>
        <FontAwesomeIcon icon={faCcVisa} />{" "}
        <FontAwesomeIcon icon={faCcMastercard} />{" "}
      </div>
      <div className={classes.copyright}>
        <FontAwesomeIcon icon={faCopyright} />{" "}
        <span>
          {new Date().getFullYear()} All rights reserved
        </span>
      </div>
    </footer>
  );
}
