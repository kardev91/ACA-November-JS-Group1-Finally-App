import {
  Avatar,
  Button,
  FormControlLabel,
  Grid,
  Typography,
  Box,
  Paper,
  Checkbox,
  TextField,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const theme = createTheme();

export default function AuthPopForm({ loginHandle, forgotPassword, pathName }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const loginUser = async () => {
    try {
      await loginHandle(email, password);
      history.push(pathName);
      setError("");
    } catch (error) {
      console.log(error.message)
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        setError("Please enter valid email");
      } else if (
        error.message ===
        "Firebase: Error (auth/wrong-password)."
      ) {
        setError("Your password is wrong");
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" style={{ height: "100vh" }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}  style={{
          display: "contents",
        }} square >
          <Box
            style={{
              margin: "20% 20% 2%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar style={{ margin: 1, backgroundColor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              You need to Sign in for adding product in the basket
            </Typography>
            <Box component="form" noValidate style={{ mrginTop: 2 }}>
              {error ? (
                <Alert
                  severity="error"
                  variant="filled"
                  style={{ marginBottom: 20 }}
                >
                  {error}
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={(event) => setPassword(event.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                style={{ marginTop: 3, marginBottom: 2 }}
                color="primary"
                onClick={loginUser}
              >
                Sign In
              </Button>
              <Grid container style={{ marginTop: 10 }}>
                <Grid item xs>
                  <Link to="/reset-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
