import {
  Button,
  Grid,
  Typography,
  Box,
  Paper,
  CssBaseline,
  TextField,
  makeStyles,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import { auth } from "../../configurations/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useHistory } from "react-router-dom";

const theme = createTheme();
const useStyles = makeStyles({
  wrapper: {
    margin: "20% 20% 2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  main: {
    height: '100vh'
  }
})

export default function RessetPassword() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const classes = useStyles()

  function reset(email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage("Please chek yor inbox");
        setError("");
        setTimeout(() => {
          history.push("/sign-in");
        }, 3000);
      })
      .catch((error) => {
        setError(error.message);
        setSuccessMessage("");
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.main}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          style={{ margin: "0 auto" }}
        >
          <Box
            className={classes.wrapper}
          >
            <Typography component="h1" variant="h5">
              Resset Password
            </Typography>
            <Box component="form" noValidate >
              {error ? (
                <Alert
                  severity="error"
                  variant="filled"
                >
                  {error}
                </Alert>
              ) : null}
              {successMessage ? (
                <Alert
                  severity="success"
                  variant="filled"
                >
                  {successMessage}
                </Alert>
              ) : null}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="outlined"
                onChange={(event) => setEmail(event.target.value)}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => reset(email)}
              >
                Resset Password
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
