import Footer from "../Footer/Footer";
import NavigationBar from "../Header/NavigationBar";
import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "./../ProductCard";
import homepagePhoto from "../../images/homepagePhoto1.jpg";
import { SearchInputValueContext } from "../../contexts/SearchInputValueContext";
import { makeStyles } from "@material-ui/core";
import nofound from "../../images/nofound.svg";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    minHeight: "500px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "10px",
  },
  sorryText: {
    fontSize: "20px",
    margin: "10",
  },
  homepagePhoto: {
    width: "100%",
    marginTop: "80px",
  },
});

export default function Search() {
  const productList = useContext(ProductContext);
  const searchInputValue = useContext(SearchInputValueContext);
  const classes = useStyles();
  let value = searchInputValue[0].toLowerCase();
  let count = 0;

  return (
    <>
      <NavigationBar />
      <img
        src={homepagePhoto}
        alt="homeImage"
        className={classes.homepagePhoto}
      />
      <div className={classes.wrapper}>
        {productList.map((product, index) => {
          if (value) {
            if (
              value === product.type ||
              value === product.name.toLowerCase()
            ) {
              count++;
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  pathName="search"
                />
              );
            }
            if (index === productList.length - 1 && count === 0) {
              return (
                <div key={1}>
                  <img alt="noFound" src={nofound} />
                  <h1 className={classes.sorryText}>No Results</h1>
                  <p>We’re working on getting more foods for you.</p>
                  <p>Please come back soon to try again.</p>
                </div>
              );
            }
            return null;
          }
          return (
            <ProductCard key={product.id} product={product} pathName="search" />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
