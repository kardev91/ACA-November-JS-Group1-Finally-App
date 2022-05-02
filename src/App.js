import "./App.css";
import React, { useState, useEffect } from "react";
import Salad from "./components/Salad";
import Pizza from "./components/Pizza";
import Burger from "./components/Burger";
import Barbecue from "./components/Barbecue";
import Drink from "./components/Drink";
import Dessert from "./components/Dessert";
import Search from "./components/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { ProductContext } from "./contexts/ProductContext";
import { CartDataContext } from "./contexts/CartDataContext";
import { auth } from "./configurations/firebase";
import RessetPassword from "./components/forms/RessetPassword";
import Auth from "./components/Auth";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import { firestore } from "./configurations/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { SearchInputValueContext } from "./contexts/SearchInputValueContext";

function App() {
  const [productList, setProductList] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [cartData, setCartData] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(firestore, "product_table"), (snapshot) =>
        setProductList(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  useEffect(
    () =>
      onSnapshot(collection(firestore, "cart"), (snapshot) =>
        setCartData(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  return (
    <div className="App">
      <Router>
        <AuthContext.Provider value={auth.currentUser}>
          <ProductContext.Provider value={productList}>
            <CartDataContext.Provider value={cartData}>
              <SearchInputValueContext.Provider
                value={[searchInputValue, setSearchInputValue]}
              >
                <Route>
                  <Route path="/" exact component={Home} />
                  <Route path="/sign-in" component={Auth} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route path="/reset-password" component={RessetPassword} />
                  <Route path="/cart">
                    <Cart data={cartData} />
                  </Route>
                  <Route path="/salads" exact component={Salad} />
                  <Route path="/pizza" exact component={Pizza} />
                  <Route path="/burgers" exact component={Burger} />
                  <Route path="/barbecue" exact component={Barbecue} />
                  <Route path="/drinks" exact component={Drink} />
                  <Route path="/dessert" exact component={Dessert} />
                  <Route path="/search" exact component={Search} />
                </Route>
              </SearchInputValueContext.Provider>
            </CartDataContext.Provider>
          </ProductContext.Provider>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
