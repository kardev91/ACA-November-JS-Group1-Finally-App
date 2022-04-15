import "./App.css";
import React from "react";
import Salad from "./components/Salad";
import Soup from "./components/Soup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { ProductContext } from "./contexts/ProductContext";
import { GetProducts } from "./components/GetProducts";
import { auth } from "./configurations/firebase";
import RessetPassword from "./components/forms/RessetPassword";
import Auth from "./components/Auth";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContext.Provider value={auth.currentUser}>
          <ProductContext.Provider value={GetProducts()}>
            <Route>
              <Route path="/" exact component={Home} />
              <Route path="/salad" exact component={Salad} />
              <Route path="/soup" exact component={Soup} />
              <Route path="/sign-in" component={Auth} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/reset-password" component={RessetPassword} />
              <Route path="/cart" component={Cart} />
            </Route>
          </ProductContext.Provider>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
