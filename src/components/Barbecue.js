import React, { useContext } from "react";
import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";

export default function Barbecue() {
  const productList = useContext(ProductContext);

  return (
    <>
      <NavigationBar />
      <article>
        {productList.map((item) => {
          if (item.type === "barbecue") {
            return <ProductCard product={item} />;
          }
          return null;
        })}
      </article>
      <Footer />
    </>
  );
}
