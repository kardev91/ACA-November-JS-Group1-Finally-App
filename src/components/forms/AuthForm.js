import {
  Avatar,
  Button,
  FormControlLabel,
  Grid,
  Typography,
  Box,
  Paper,
  Checkbox,
  CssBaseline,
  TextField,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const theme = createTheme();
const useStyles = makeStyles({
  root: {
    "&$focused $notchedOutline": {
      borderColor: "black",
      label: "black",
    },
  },
  main: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg)",
    backgroundRepeat: "no-repeat",
  },
  avatar: {
    margin: 1,
    backgroundColor: "secondary.main",
  },
  wrapper: {
    margin: "20% 20% 2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function AuthForm({ loginHandle, forgotPassword }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const classes = useStyles();

  const loginUser = async () => {
    try {
      await loginHandle(email, password);
      history.push("/");
      setError("");
    } catch (error) {
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        setError("Please enter valid email");
      } else if (error.message === "Firebase: Error (auth/wrong-password).") {
        setError("Your password is wrong");
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.main}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box className={classes.wrapper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate>
              {error ? (
                <Alert
                  severity="error"
                  variant="filled"
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
                InputProps={{
                  classes: {
                    root: classes.root,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                InputLabelProps={{ style: { color: "black" } }}
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
                InputProps={{
                  classes: {
                    root: classes.root,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                InputLabelProps={{ style: { color: "black" } }}
                onChange={(event) => setPassword(event.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
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
