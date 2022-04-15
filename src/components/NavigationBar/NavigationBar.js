import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { SIDE_BAR_DATA } from "../../constant/SiderBarData";
import "./NavigationBar.css";
import ListItem from "../Shared/ListItem/ListItem";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../configurations/firebase";
import logo from "../../logo.png";

function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  console.log(auth.currentUser);

  const showSidebar = () => setSidebar(!sidebar);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <MenuOpenIcon
            className={"icon"}
            onClick={showSidebar}
            titleAccess={"Open menu"}
          />
        </Link>
        <div className="headerSearch">
          <input className="headerSearchInput" type="text" />
        </div>
        <div className="headerLogo">
          <Link to="/">
            <img src={logo}  alt="" />
          </Link>
        </div>
        <div className="headerControls">
          {!user ? (
            <>
              <Link to="sign-in">
                <button className="headerControlsButton">Sign In</button>
              </Link>
              <Link to="sign-up">
                <button className="headerControlsButton">Register</button>
              </Link>
            </>
          ) : (
            <>
              <p>Loged in` {user.email}</p>
              <button onClick={logout} className="headerControlsButton">
                Log Out
              </button>
            </>
          )}
          <Link to='cart'>
            <ShoppingCartIcon
              fontSize="large"
              htmlColor="502314"
             ></ShoppingCartIcon>
          </Link>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <CloseIcon className={"icon"} titleAccess={"Close menu"} />
            </Link>
          </li>
          {SIDE_BAR_DATA.map((item, index) => {
            return <ListItem item={item} index={index}/>;
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
