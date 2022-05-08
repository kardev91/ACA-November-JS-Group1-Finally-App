import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { SIDE_BAR_DATA } from "../../constant/SiderBarData";
import ListItem from "../Shared/ListItem";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../configurations/firebase";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { SearchInputValueContext } from "../../contexts/SearchInputValueContext";
import LoginPopUpModal from "../Modals/LoginPopUpModal";
import { UserLogin } from "../../helper/UserAuth";
import { CartDataContext } from "../../contexts/CartDataContext";
import UpdatePassword from "./UpdatePassword";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navBar: {
    backgroundColor: "white",
    width: "100%",
    height: "80px",
    display: "flex",
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "0.5px solid #323232",
    zIndex: "10",
  },
  menuBars: {
    background: "none",
    display: "flex",
    "& svg": {
      color: "#323232",
      width: "40px",
      height: "40px",
    },
  },
  navMenu: {
    backgroundColor: "white",
    width: "250px",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: "0",
    left: "-100%",
    transition: "850ms",
    zIndex: "9",
    borderRight: "0.5px solid #323232",
  },
  navMenuActive: {
    left: 0,
    transition: "350ms",
    width: "250px",
    position: "fixed",
    backgroundColor: "white",
    height: "100%",
    zIndex: 9,
    paddingTop: "80px",
    borderRight: "0.5px solid #323232",
  },
  navMenuItems: {
    width: "80%",
    margin: 0,
  },
  span: {
    marginLeft: "16px",
  },
  icon: {
    color: "white",
  },
  headerSearch: {
    width: "27%",
    height: "50px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    position: "relative",
  },
  headerLogo: {
    width: "30%",
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "160px",
    },
  },
  headerControls: {
    width: "27%",
    height: "50px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  headerControlsButton: {
    width: "100px",
    height: "30px",
    borderRadius: "30px",
    margin: "0 10px",
    cursor: "pointer",
    background: "none",
    border: "2px solid #323232",
    fontSize: "14px",
    color: "#323232",
    fontWeight: "bold",
  },
  headerSearchInput: {
    width: "240px",
    height: "30px",
    borderRadius: "30px",
    border: "2px solid #323232",
    marginLeft: "20px",
    outline: "none",
    paddingLeft: "40px",
  },
  headerSearchIcon: {
    position: "absolute",
    left: "30px",
    top: "13px",
    cursor: "pointer",
  },
  userEmail: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  orderCount: {
    width: "17px",
    height: "17px",
    display: "flex",
    position: "absolute",
    right: 0,
    top: 0,
    margin: 0,
    backgroundColor: "red",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "13px",
    color: "white",
  },
  "@media screen and (max-width: 900px)": {
    headerSearchInput: {
      width: "200px",
    },
  },
  "@media screen and (max-width: 800px)": {
    headerSearchInput: {
      width: "160px",
    },
    userEmail: {
      display: "none",
    },
  },
  "@media screen and (max-width: 700px)": {
    headerControlsButton: {
      display: "none",
    },
    headerSearchInput: {
      display: "none",
    },
    headerSearchIcon: {
      display: "none",
    },
  },
});

function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const searchValueData = useContext(SearchInputValueContext);
  const [searchValue, setSearchValue] = searchValueData;
  const cartData = useContext(CartDataContext);
  const [cartCount, setCartCount] = useState(cartData.length);
  const classes = useStyles();
  let history = useHistory();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    setCartCount(cartData.length);
  }, [cartData]);

  const showSidebar = () => setSidebar(!sidebar);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    history.push("/");
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
      <div className={classes.navBar}>
        <Link to="#" className={classes.menuBars}>
          <MenuOpenIcon
            className={classes.icon}
            onClick={showSidebar}
            titleAccess={"Open menu"}
          />
        </Link>
        <div className={classes.headerSearch}>
          <label>
            <Link to="search">
              <SearchIcon
                onClick={searchButton}
                className={classes.headerSearchIcon}
                htmlColor="#323232"
              />
            </Link>
            <input
              value={inputValue}
              className={classes.headerSearchInput}
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
          className={classes.headerLogo}
        >
          <Link to="/">
            <img src={logo} alt="a" />
          </Link>
        </div>
        <div className={classes.headerControls}>
          {!user ? (
            <>
              <Link to="sign-in">
                <button className={classes.headerControlsButton}>
                  Sign In
                </button>
              </Link>
              <Link to="sign-up">
                <button className={classes.headerControlsButton}>
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <>
              <UpdatePassword />
              <span className={classes.userEmail}>{user.email}</span>
              <button onClick={logout} className={classes.headerControlsButton}>
                Log Out
              </button>
            </>
          )}

          {!user ? (
            <>
              <LoginPopUpModal loginHandle={UserLogin} />
            </>
          ) : (
            <>
              <Link to="cart">
                {cartCount ? (
                  <p className={classes.orderCount}>{cartCount}</p>
                ) : null}
                <ShoppingCartIcon
                  fontSize="large"
                  htmlColor="#323232"
                ></ShoppingCartIcon>
              </Link>
            </>
          )}
        </div>
      </div>
      <nav className={sidebar ? classes.navMenuActive : classes.navMenu}>
        <ul className={classes.navMenuItems} onClick={showSidebar}>
          {SIDE_BAR_DATA.map((item, index) => {
            return <ListItem key={item.title} item={item} index={index} />;
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
