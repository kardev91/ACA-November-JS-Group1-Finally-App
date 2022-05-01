import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { updateEmail, updatePassword } from "firebase/auth";
import { auth } from "../configurations/firebase";
import avatar from "../avatar.png";

const useStyles = makeStyles((theme) => ({
  box: {
    width: 360,
    height: 420,
    marginTop: 35,
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
    background: 'white',
    transition: "all 0.3s",
    "&:hover": {
      border: "none",
      color: "white",
      transform: "scale(1.1)",
      backgroundColor: "orange",
    },
  },
  userEmail: {
      fontWeight: 'bold'
  }
}));

export default function UpdateProfile({ modalOpen }) {
  const [open, setOpen] = useState(modalOpen);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [failError, setFailError] = useState("");
  const [success, setSuccess] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const onEmailInputChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const updateUserEmail = () => {
    if (email === "") {
      setError(`Please fill email field`);
    } else {
      updateEmail(auth.currentUser, email)
        .then(() => {
          setSuccess(`Your email is updated`);
        })
        .catch((error) => {
          setFailError(`Your email dont updated please try again`);
        });
    }
  };

  const updateProfile = () => {
    if (email && password) {
      updateUserEmail();
      updateUserPassword();
    } else if (email) {
      updateUserEmail();
    } else if(password) {
        updateUserPassword(); 
    } else {
        setError(`Please fill email or password fields`);
    }
  };

  const updateUserPassword = () => {
    if (password === "") {
      setError(`Please fill password field`);
    } else {
      updatePassword(auth.currentUser, password)
        .then(() => {
          setSuccess(`Your password is updated`);
        })
        .catch((error) => {
          setFailError(`Your paswword dont updated please try again`);
        });
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
      >
        {error ? (
          <Alert severity="error" variant="filled" style={{ marginBottom: 30, width: 290}}>
            {error}
          </Alert>
        ) : null}
        {failError ? (
          <Alert severity="error" variant="filled" style={{ marginBottom: 30,width: 290 }}>
            {failError}
          </Alert>
        ) : null}
        {success && (
          <Alert
            variant="filled"
            severity="success"
            style={{ width: 290 }}
          >
            {success}
          </Alert>
        )}
        <Grid item xs={10} sm={6}>
          <center>
            <div className={classes.box}>
              <img className={classes.img} src={avatar} alt="avatar"/>
              <p className={classes.userEmail}>{auth.currentUser.email}</p>
              <input
                className={classes.input}
                type="Email"
                placeholder="Email"
                onChange={onEmailInputChange}
              />
              <input
                className={classes.input}
                type="password"
                placeholder="Password"
                onChange={onPasswordInputChange}
              />

              <button
                className={classes.button}
                name="edit"
                onClick={updateProfile}
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
