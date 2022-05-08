import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import NavigationBar from "../Header/NavigationBar";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "../ProductCard";
import burgerImg from "../../images/burger.jpeg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  wrapper: {
    width: "100%",
    minHeight: "500px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: "100%",
    marginTop: "80px",
  },
  productName: {
    width: "80%",
    borderBottom: "0.5px solid #323232",
    borderOpacity: "10%",
    marginBottom: "20px",
    "& p": {
      color: "#323232",
      fontSize: "50px",
      fontWeight: "bold",
      margin: "20px 0",
    },
  },
});

export default function Burger() {
  const classes = useStyles();
  const productList = useContext(ProductContext);

  return (
    <div className={classes.container}>
      <NavigationBar />
      <img src={burgerImg} alt="burger" className={classes.image} />
      <div className={classes.productName}>
        <p>Burgers</p>
      </div>
      <div className={classes.wrapper}>
        {productList.map((item) => {
          if (item.type === "burger") {
            return <ProductCard product={item} pathName="burgers" />;
          }
          return null;
        })}
      </div>
      <Footer />
    </div>
  );
}