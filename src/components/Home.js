import Footer from "./Footer/Footer";
import NavigationBar from './NavigationBar/NavigationBar'
import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext"
import ProductCard from "./ProductCard";

export default function Home() {
  const  productList  = useContext(ProductContext);
  return (
    <>
      {productList.map((product) => {
       return <ProductCard key={product.id} product = {product} /> 
      })}
           <Footer/>
    </>
  );
}
