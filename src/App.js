import { BrowserRouter as Router, Route } from "react-router-dom";
import { SignUpContext } from "./contexts/SignUpContext";
import { AuthContext } from "./contexts/AuthContext";
import { ProductContext } from "./contexts/ProductContext";
import { GetProducts } from "./components/GetProducts";
import { UserLogin } from "./components/UserLogin";
import { UserSignUp } from "./components/UserSignUp";
import Auth from "./components/Auth";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <SignUpContext.Provider value={UserSignUp}>
          <AuthContext.Provider value={UserLogin}>
            <ProductContext.Provider value={GetProducts()}>
              <Route>
                <Route path="/" exact component={Home} />
                <Route path="/sign-in" component={Auth} />
                <Route path="/sign-up" component={SignUp} />
              </Route>
            </ProductContext.Provider>
          </AuthContext.Provider>
        </SignUpContext.Provider>
      </Router>
    </div>
  );
}

export default App;
