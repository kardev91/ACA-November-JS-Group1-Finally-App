import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import CheckoutModal from "./Modals/CheckoutModal";
import { makeStyles } from "@material-ui/core";
import cartImg from "../cart.jpeg";
import ProductCardForCart from "./ProductCardForCart";

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
    minHeight: "500px",
    marginTop: "80px",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  },
  imageBanner: {
    width: '100%'
  },
  productWrapper: {
    minHeight: '400px',
  },
  checkout: {
    width: '1000px',
    height: '100px',
    borderTop: '1px solid black',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '30px'
  },
  totalPrice:{
    fontSize: '25px',
    marginRight: '10px'
  }
});

export default function Cart({data}) {
  const classes = useStyles();
  let totalPrice = 0

  return (
    <div>
      <NavigationBar />
      <div className={classes.mainContainer}>
        <div className={classes.wrapper}>
          <img className={classes.imageBanner} alt='a' src={cartImg} />
          <p>Thank you for making your order</p>
          <div className={classes.productWrapper}>
            {data.map(item => {
              totalPrice += +(item.price*item.count)
              return <ProductCardForCart key={item.id} product={item}/>
            })
            }
          </div>
          <div className={classes.checkout}>
            <p className={classes.totalPrice}>Total price {totalPrice} AMD</p>
            <CheckoutModal />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
