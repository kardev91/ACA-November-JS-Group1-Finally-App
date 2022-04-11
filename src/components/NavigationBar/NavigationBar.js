import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { SidebarData } from "../../data/SiderBarData";
import "./NavigationBar.css";
import ListItem from "../SharedComponents/ListItem";
import { AuthContext } from "../../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../configurations/firebase";

function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);
  let user = useContext(AuthContext);

  const showSidebar = () => setSidebar(!sidebar);

  const logout = async () => {
    user = null;
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
        <div className="headerLogo">Logo here</div>
        <div className="headerControls">
          {!user ? (
            <>
              <button className="headerControlsButton">
                <Link to="sign-in">Log In</Link>
              </button>
              <button className="headerControlsButton">
                <Link to="sign-up">Register</Link>
              </button>
            </>
          ) : (
            <>
              <p>Hi ` {user.email}</p>
              <button onClick={logout} className="headerControlsButton">
                Log Out
              </button>
            </>
          )}
          <ShoppingCartIcon
            fontSize="large"
            htmlColor="white"
          ></ShoppingCartIcon>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <CloseIcon className={"icon"} titleAccess={"Close menu"} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return <ListItem item={item} index={index} />;
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
