import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
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
import SearchIcon from "@material-ui/icons/Search";
import { SearchInputValueContext } from "../../contexts/SearchInputValueContext";
import LoginPopUpModal from "../Modals/LoginPopUpModal";
import { UserLogin } from "../../helper/UserAuth";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import UpdateProfile from "../UpdateProfile";
import { Grow, MenuItem, MenuList } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menu: {
    position: "fixed",
    top: 57,
    right: 285,
  },
  menuHeader: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 12,
  },
}));

function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const searchValueData = useContext(SearchInputValueContext);
  const classes = useStyles();
  const [searchValue, setSearchValue] = searchValueData;
  let history = useHistory();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const showSidebar = () => setSidebar(!sidebar);

  const logout = async () => {
    await signOut(auth);
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

  const updatePopUp = () => {
    setOpenMenu(!openMenu);
    setOpenUpdateModal(true);
  }

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
              <SearchIcon onClick={searchButton} className="headerSearchIcon" />
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
              <div onClick={() => setOpenMenu(!openMenu)}>
                <AccountCircleIcon
                  htmlColor="#533d35"
                  fontSize="large"
                  style={{ cursor: "pointer" }}
                />
                <div className={classes.root}>
                  <Popper
                    open={openMenu}
                    role={undefined}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement !== "bottom"
                              ? "center top"
                              : "center bottom",
                        }}
                      >
                        <Paper className={classes.menu}>
                          <MenuList>
                            <MenuItem onClick={() => updatePopUp()}>
                            Profile Settings
                            </MenuItem>
                          </MenuList>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </div>

              {user.email}
              <button onClick={logout} className="headerControlsButton">
                Log Out
              </button>
            </>
          )}

          {!openMenu ? (
            <UpdateProfile
              modalOpen={openUpdateModal}
           
            />
          ) : null}

          {!user ? (
            <>
              <LoginPopUpModal loginHandle={UserLogin} />
            </>
          ) : (
            <>
              <Link to="cart">
                <ShoppingCartIcon
                  fontSize="large"
                  htmlColor="#533d35"
                ></ShoppingCartIcon>
              </Link>
            </>
          )}
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
            return <ListItem key={item.title} item={item} index={index} />;
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
