import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Button from "@material-ui/core/Button";
import { Grid, TextField, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import orderConfirmation from '../../images/orderConfirmation.png'

const useStyles = makeStyles((theme) => ({
  modalWrapper: {
    width: '600px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsWrapper: {
    maxWidth: 345,
    margin: "20px auto",
    marginRight: 15,
  },
  button: {
    width: '150px',
    height: '30px',
    borderRadius: '30px',
    margin: '0 10px',
    cursor: 'pointer',
    background: 'none',
    border: '2px solid #323232',
    fontSize: '15px',
    color: '#323232',
    fontWeight: 'bold',
    '& span': {
      margin: 0
    }
  },
  container: {
    backgroundColor: "#fafafa",
  },
  orderConfirmationImage: {
    width: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
  }
}));

export default function CheckoutModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleOrderConfirmation = () => {
    if (firstName === "" || lastName === "" || city === "" || address === "" || phoneNumber === "") {
      setError(`Please fill all fields`);
    } else {
      setOpen(false);
      setOpenConfirmation(true);
    }
  };

  const handleOrderCancel = () => {
    setError("");
    setOpen(false);
  };

  const handleOpenCheckout = () => {
    setError("");
    setOpen(true);
  };

  const onFirstNameInputChange = (event) => {
    setFirstName(event.target.value);
  };

  const onLastNameInputChange = (event) => {
    setLastName(event.target.value);
  };

  const onCityInputChange = (event) => {
    setCity(event.target.value);
  };
  const onAddressInputChange = (event) => {
    setAddress(event.target.value);
  };
  const onPhoneNumberInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <>
      <button onClick={() => handleOpenCheckout()} variant="outlined" className={classes.button}>
        CHECKOUT
      </button>

      <Modal
        open={openConfirmation}
        onClose={() => setOpenConfirmation(false)}
        center
      >
        <div classNames={classes.modalWrapper}>
          <img src={orderConfirmation} className={classes.orderConfirmationImage} alt='confImage'/>
          <Typography variant="h5" gutterBottom>
            Thank you for your order.
          </Typography>
          <Typography variant="subtitle1">
            We will send you an update when your order has shipped.
          </Typography>
        </div>
      </Modal>

      <Modal
        classNames={classes.container}
        open={open}
        onClose={() => setOpen(false)}
        center
      >
        <h2>Checkout</h2>
        <h4>Please fill out all fields</h4>
        {error ? (
          <Alert severity="error" variant="filled" >
            {error}
          </Alert>
        ) : null}
        <form autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={onFirstNameInputChange}
                label="First Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={onLastNameInputChange}
                label="Last Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={onCityInputChange}
                label="City"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={onPhoneNumberInputChange}
                label="Phone"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={onAddressInputChange}
                label="Address"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <div className={classes.buttonsWrapper}>
            <Button
              className={classes.button}
              onClick={() => handleOrderCancel()}
            >
              BACK
            </Button>
            <Button
              className={classes.button}
              onClick={() => handleOrderConfirmation()}
            >
              
              PLACE ORDER
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
