import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";
import homepagePhoto from "../homepagePhoto.jpg";
import { SearchInputValueContext } from "../contexts/SearchInputValueContext";
import { makeStyles } from "@material-ui/core";
import nofound from "../nofound.svg";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    minHeight: "400px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  sorryText: {
    fontSize: "20px",
    margin: '10'
  },
});

export default function Homee() {
  const productList = useContext(ProductContext);
  const searchInputValue = useContext(SearchInputValueContext);
  const classes = useStyles();
  let value = searchInputValue[0].toLowerCase().trim();
  let count = 0;

  return (
    <>
      <NavigationBar />
      <img src={homepagePhoto} style={{ width: "100%" ,marginTop: '80px',}} />
      <div className={classes.wrapper}>
        {productList.map((product, index) => {
          if (value) {
            if (
              value === product.type ||
              value === product.name.toLowerCase()
            ) {
              count++;
              return <ProductCard key={product.id} product={product} />;
            }
            if (index === productList.length - 1 && count === 0) {
              return (
                <div>
                  <img style={{marginTop: '20px'}} src={nofound}/>
                  <h1 className={classes.sorryText}>No Results</h1>
                  <p>We’re working on getting more foods for you.</p>
                  <p>Please come back soon to try again.</p>
                </div>
              );
            }
            return null;
          }
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <Footer />
    </>
  );
}
