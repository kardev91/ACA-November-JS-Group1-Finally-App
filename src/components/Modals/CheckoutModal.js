import React, {useState} from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Button from '@material-ui/core/Button';
import {Grid, TextField, Typography} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    buttons: {
        maxWidth: 345,
        margin:'20px auto',
        display:'inline-block',
        marginRight: 10
    },
}));

export default function CheckoutModal(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openConfirmation, setOpenConfirmation] = React.useState(false);
    const [error, setError] = useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [city, setCity] = React.useState("");
    const [address, setAddress] = React.useState("");


    const handleOrderConfirmation = () => {
        if (firstName === "" || lastName ==="" || city === "" ||  address === ""){
            setError(`Please fill all fields`);
        }else {
            setOpen(false);
            setOpenConfirmation(true);
        }
    };

    const handleOrderCancel = () => {
        setError("");
        setOpen(false)
    };

    const handleOpenCheckout = () => {
        setError("");
        setOpen(true)
    };

    const onFirstNameInputChange = (event) =>{
        setFirstName(event.target.value);
    };

    const onLastNameInputChange = (event) =>{
        setLastName(event.target.value);
    };

    const onCityInputChange = (event) =>{
        setCity(event.target.value);
    };
    const onAddressInputChange = (event) =>{
        setAddress(event.target.value);
    };

    return (

        <>
            <Button onClick={() => handleOpenCheckout()} variant="outlined">Checkout</Button>

            <Modal open={openConfirmation} onClose={() => setOpenConfirmation(false)} center>
                <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                        Thank you for your order.
                    </Typography>
                    <Typography variant="subtitle1">
                        We will send you an update when your order has shipped.
                    </Typography>
                </React.Fragment>
            </Modal>

            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Checkout</h2>
                {error ? (
                    <Alert
                        severity="error"
                        variant="filled"
                        style={{ marginBottom: 20 }}
                    >
                        {error}
                    </Alert>
                ) : null}
                <form autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={onFirstNameInputChange} label="First Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={onLastNameInputChange} label="Last Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField onChange={onCityInputChange} label="City" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={onAddressInputChange} label="Address" variant="outlined" fullWidth />
                        </Grid>
                    </Grid>
                    <div>
                        <Button className={classes.buttons} onClick={() => handleOrderCancel()} variant="outlined">BACK</Button>
                        <Button className={classes.buttons} onClick={() => handleOrderConfirmation()} variant="outlined">  PLACE ORDER</Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};
