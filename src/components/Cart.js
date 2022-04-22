import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import CheckoutModal from "./Modals/CheckoutModal";
import { makeStyles } from "@material-ui/core";
import cartImg from "../cart.jpeg";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  wrapper: {
    width: "100%",
    minHeight: "700px",
    marginTop: "80px",
  },
});

export default function Cart() {
  const classes = useStyles();

  return (
    <div>
      <NavigationBar />
      <div className={classes.mainContainer}>
        <div className={classes.wrapper}>
          <img src={cartImg} />
          <p>Thank you for making your order</p>
          <div>
            {/* This div is for drawing data */}
          </div>
        </div>
        <CheckoutModal />
      </div>

      <Footer />
    </div>
  );
}
