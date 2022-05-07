import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navText: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "8px 0px 8px 16px",
    listStyle: "none",
    height: "60px",
    "& a": {
      textDecoration: "none",
      color: "#323232",
      fontSize: "15px",
      width: "95%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
      borderRadius: "4px",
      "&:hover": {
        backgroundColor: "#323232",
        color: "#f5ebdc",
      },
    },
  },
});

function ListItem({ item, index }) {
  const classes = useStyles();

  return (
    <li key={index} className={classes.navText}>
      <Link to={item.path}>
        {item.icon}
        <span>{item.title}</span>
      </Link>
    </li>
  );
}

export default ListItem;
