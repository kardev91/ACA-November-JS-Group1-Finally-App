import React, { useContext } from "react";
import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";
import burgerImg from "../burger.jpeg";

export default function Burger() {
  const productList = useContext(ProductContext);

  return (
    <>
      <NavigationBar />
      <img src={burgerImg} style={{ width: "100%" }} />
      <article>
        {productList.map((item) => {
          if (item.type === "burger") {
            return <ProductCard product={item} />;
          }
          return null;
        })}
      </article>
      <Footer />
    </>
  );
}
