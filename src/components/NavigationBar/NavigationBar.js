import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { SIDE_BAR_DATA } from "../../constant/SiderBarData";
import "./NavigationBar.css";
import ListItem from "../Shared/ListItem/ListItem";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../configurations/firebase";
import logo from "../../logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { SearchInputValueContext } from "../../contexts/SearchInputValueContext";
import LoginPopUpModal from "../Modals/LoginPopUpModal";
import { UserLogin } from "../../helper/UserAuth";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const searchValueData = useContext(SearchInputValueContext);
  const [searchValue, setSearchValue] = searchValueData;
  let history = useHistory();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const showSidebar = () => setSidebar(!sidebar);

  const logout = async () => {
    await signOut(auth);
    setUser(null)
    localStorage.clear();
  };

  const inputChangeHandler = (e) => {
    return setInputValue(e.target.value);
  };

  const searchButton = () => {
    setSearchValue(inputValue);
    setInputValue("");
  };

  const enterHendler = (e) => {
    if (e.key === "Enter") {
      searchButton();
      history.push("/search");
    }
  };

  return (
    <div>
      <div className="navbar">
        <div className="headerSearch">
          <Link to="#" className="menu-bars">
            <MenuOpenIcon
              className={"icon"}
              onClick={showSidebar}
              titleAccess={"Open menu"}
            />
          </Link>
          <label>
            <Link to="search">
              <SearchIcon onClick={searchButton} className="headerSearchIcon" htmlColor="#323232"/>
            </Link>
            <input
              value={inputValue}
              className="headerSearchInput"
              onChange={(e) => inputChangeHandler(e)}
              onKeyPress={enterHendler}
              placeholder="Search food"
              type="text"
            />
          </label>
        </div>
        <div
          onClick={() => {
            setInputValue("");
          }}
          className="headerLogo"
        >
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="headerControls">
          {!user ? (
            <>
              <Link to="sign-in">
                <button className="headerControlsButton">Sign In</button>
              </Link>
              <Link to="sign-up">
                <button className="headerControlsButton">Sign Up</button>
              </Link>
            </>
          ) : (
            <>
              <AccountCircleIcon htmlColor="#323232" fontSize="large" />
              {user.email}
              <button onClick={logout} className="headerControlsButton">
                Log Out
              </button>
            </>
          )}

          {!user ? (
            <>
              <LoginPopUpModal loginHandle={UserLogin}/>
            </>
          ) : (
            <>
              <Link to="cart">
                <ShoppingCartIcon
                  fontSize="large"
                  htmlColor="#323232"
                ></ShoppingCartIcon>
              </Link>
            </>
          )}
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          
          {SIDE_BAR_DATA.map((item, index) => {
            return <ListItem key={item.title} item={item} index={index} />;
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
