import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";
import React, { Suspense } from 'react';
import Home from './components/Home'
import Salad from "./components/Salad";
import Soup from "./components/Soup"

function App() {


    return (
    <div className="App">
        <Router>
            <Suspense fallback={<Home/>}>
            <AuthProvider>
                <Route>
                    <Route path="/" exact component={Home} />
                    <Route path="/salad" exact component={Salad} />
                    <Route path="/soup" exact component={Soup} />
                </Route>
            </AuthProvider>
            </Suspense>
        </Router>
    </div>
  );
}

export default App;
