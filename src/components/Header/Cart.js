import React from "react";
import NavigationBar from "../Header/NavigationBar";
import Footer from "../Footer/Footer";
import CheckoutModal from "../Modals/CheckoutModal";
import { makeStyles } from "@material-ui/core";
import cartImg from "../../images/cart.jpg";
import ProductCardForCart from "../ProductCardForCart";
import emptyBagImg from "../../images/nofound.svg";
import { Link } from "react-router-dom";

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
    minHeight: "800px",
    marginTop: "80px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  imageBanner: {
    width: "100%",
  },
  productWrapper: {
    minHeight: "300px",
  },
  checkoutWrapper: {
    width: "1000px",
    height: "100px",
    borderTop: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: "30px 0",
  },
  totalPrice: {
    fontSize: "25px",
    marginRight: "10px",
  },
  checkoutButton: {
    width: "180px",
    height: "30px",
    borderRadius: "30px",
    margin: "0 10px !important",
    cursor: "pointer",
    background: "none",
    border: "2px solid #323232",
    fontSize: "15px",
    color: "#323232",
    fontWeight: "bold",
  },
  image: {
    width: "200px",
    margin: "30px",
  },
});

export default function Cart({ data }) {
  const classes = useStyles();
  let totalPrice = 0;
  let empty = null;
  data.length ? (empty = false) : (empty = true);

  return (
    <div>
      <NavigationBar />
      <div className={classes.mainContainer}>
        <div className={classes.wrapper}>
          <img className={classes.imageBanner} alt="a" src={cartImg} />
          {empty ? (
            <div>
              <img alt="empty" className={classes.image} src={emptyBagImg} />
              <h2>Your bag is empty.</h2>
              <p>Please add something, to make the order.</p>
            </div>
          ) : (
            <>
              <div className={classes.productWrapper}>
                {data.map((item) => {
                  totalPrice += +(item.price * item.count);
                  return <ProductCardForCart key={item.id} product={item} />;
                })}
              </div>
              <div className={classes.checkoutWrapper}>
                <p className={classes.totalPrice}>
                  Total price <b>{totalPrice} AMD</b>
                </p>
                <div>
                  <Link to="/">
                    <button className={classes.checkoutButton}>
                      CONTINUE SHOPPING
                    </button>
                  </Link>
                  <CheckoutModal cartData={data} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
