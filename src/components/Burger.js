import React, { useContext } from "react";
import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";
import burgerImg from "../burger.jpeg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  wrapper: {
    width: "100%",
    minHeight: '600px',
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: '100%',
    marginTop: '80px'
  },
  productName: {
    width: '80%',
    borderBottom: '0.5px solid #502314',
    borderOpacity: '10%',
    marginBottom: '20px',
    '& p': {
      color: '#533d35',
      fontSize: '50px',
      fontWeight: 'bold',
      margin: '20px 0'
    }
  }
})

export default function Burger() {
  const classes = useStyles()
  const productList = useContext(ProductContext);

  return (
    <div className={classes.container}>
      <NavigationBar />
      <img src={burgerImg} className={classes.image}/>
      <div className={classes.productName}>
        <p>Burger</p>
      </div>
      <div className={classes.wrapper}>
        {productList.map((item) => {
          if (item.type === "burger") {
            return <ProductCard product={item} />;
          }
          return null;
        })}
      </div>
      <Footer />
    </div>
  );
}