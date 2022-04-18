import React, { useContext } from "react";
import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";
import pizzaImg from '../pizza.jpeg'


export default function Pizza() {
  const productList = useContext(ProductContext);

  return (
    <>
      <NavigationBar />
      <img src={pizzaImg} style={{width: '100%'}}/>
      <article>
        {productList.map(item => {
            if(item.type === 'pizza'){
                return (
                    <ProductCard product={item}/>
                )
            }
            return 
        })}
      </article>
      <Footer />
    </>
  );
}
