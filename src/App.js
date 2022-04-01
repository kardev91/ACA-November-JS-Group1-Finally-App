import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";
import Auth from './components/Auth'

function App() {


    return (
    <div className="App">
        <Router>
            <AuthProvider>
                <Route>
                    <Route path="/" exact component={Auth} />
                </Route>
            </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
