import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";
import homepagePhoto from "../homepagePhoto.jpg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

export default function Home() {
  const productList = useContext(ProductContext);
  const classes = useStyles();

  return (
    <>
      <NavigationBar />
      <img src={homepagePhoto} style={{ width: "100%" ,marginTop: '80px',}} />
      <div className={classes.wrapper}>
        {productList.map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </div>
      <Footer />
    </>
  );
}
