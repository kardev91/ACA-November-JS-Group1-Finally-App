import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import CheckoutModal from "./Modals/CheckoutModal";


export default function Cart() {

  return (
    <>
      <NavigationBar />
        <div className="item1">
            <CheckoutModal/>
        </div>

      <Footer />
    </>
  );

}
