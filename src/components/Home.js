import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";
import homepagePhoto from "../homepagePhoto.jpg";
import { SearchInputValueContext } from "../contexts/SearchInputValueContext";

export default function Home() {
  const productList = useContext(ProductContext);
  const searchInputValue = useContext(SearchInputValueContext);
  return (
    <>
      <NavigationBar />
      <img src={homepagePhoto} style={{ width: "100%" }} />
      {productList.map((product) => {
        let value = searchInputValue[0].toLowerCase()
        
        if(value){
          if(value === product.type || value === product.name.toLowerCase()){
            return <ProductCard key={product.id} product={product} />;
          }
          return null
        }
        return <ProductCard key={product.id} product={product} />;
      })}
      <Footer />
    </>
  );
}
