import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { updatePassword } from "firebase/auth";
import { auth } from "../configurations/firebase";
import avatar from "../avatar.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  box: {
    width: 360,
    height: 310,
  },

  img: {
    boxSizing: "border-box",
    width: 149,
    height: 149,
    borderRadius: "50%",
    padding: 3,
    backgroundColor: "white",
    margin: "20px 30%",
  },

  input: {
    display: "block",
    boxSizing: "border-box",
    color: "black",
    marginBottom: 30,
    padding: 10,
    width: 220,
    height: 32,
    border: "1px solid black",
    borderradius: 7,
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
    fontSize: 15,
    background: "none",
  },

  button: {
    border: "1px solid black",
    borderRadius: 7,
    color: "black",
    height: 30,
    width: 100,
    left: 0,
    margin: 0,
    background: "white",
    transition: "all 0.3s",
    "&:hover": {
      border: "none",
      color: "white",
      transform: "scale(1.1)",
      backgroundColor: "orange",
    },
  },
  userEmail: {
    fontWeight: "bold",
  },

  avatar: {
    cursor: "pointer",
  },

  alertStyle: {
    marginTop: 45, 
    width: 360
  }
}));

export default function UpdatePassword() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [failError, setFailError] = useState("");
  const [success, setSuccess] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const onPasswordInputChange = (event) => {
    setPassword(event.target.value);
  };


  const updateUserPassword = () => {
    if (password === "") {
      setError(`Please fill password field`);
    } else {
      updatePassword(auth.currentUser, password)
        .then(() => {
          setSuccess(`Your password is updated`);
          setTimeout(function() {setOpen(false);setSuccess("")}, 2000)
        })
        .catch((error) => {
          setFailError(`Your paswword dont updated please try again`);
          setTimeout(function() {setOpen(false);setFailError("")}, 2000)
        });
    }
   
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>
        <AccountCircleIcon
          htmlColor="#323232"
          fontSize="large"
          className={classes.avatar}
        />
      </div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        {error ? (
          <Alert
            severity="error"
            variant="filled"
           className={classes.alertStyle}
          >
            {error}
          </Alert>
        ) : null}
        {failError ? (
          <Alert
            severity="error"
            variant="filled"
            className={classes.alertStyle}
          >
            {failError}
          </Alert>
        ) : null}
        {success && (
          <Alert variant="filled" severity="success" className={classes.alertStyle}>
            {success}
          </Alert>
        )}
        <Grid item xs={10} sm={6}>
          <center>
            <div className={classes.box}>
              <img className={classes.img} src={avatar} alt="avatar" />

              <input
                className={classes.input}
                type="password"
                placeholder="Password"
                onChange={onPasswordInputChange}
              />

              <button
                className={classes.button}
                name="edit"
                onClick={updateUserPassword}
              >
                EDIT
              </button>
            </div>
          </center>
        </Grid>
      </Modal>
    </>
  );
}
