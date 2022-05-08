import "./App.css";
import React, { useState, useEffect } from "react";
import Salad from "./components/ProductPages/Salad";
import Pizza from "./components/ProductPages/Pizza";
import Burger from "./components/ProductPages/Burger";
import Barbecue from "./components/ProductPages/Barbecue";
import Drink from "./components/ProductPages/Drink";
import Dessert from "./components/ProductPages/Dessert";
import Search from "./components/Header/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { ProductContext } from "./contexts/ProductContext";
import { CartDataContext } from "./contexts/CartDataContext";
import RessetPassword from "./components/Forms/RessetPassword";
import Auth from "./components/UserSignin/Auth";
import Home from "./components/Home";
import SignUp from "./components/UserSignin/SignUp";
import Cart from "./components/Header/Cart";
import { SearchInputValueContext } from "./contexts/SearchInputValueContext";
import { firestore, auth } from "./configurations/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

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

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const cartTableRef = query(
          collection(firestore, "cart"),
          where("userId", "==", currentUser.uid)
        );
        onSnapshot(cartTableRef, (querySnapshot) => {
          setCartData(
            querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
      }
    });
  }, []);

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
