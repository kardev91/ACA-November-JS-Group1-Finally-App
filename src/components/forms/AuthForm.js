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

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useState } from "react";

const theme = createTheme();

export default function AuthForm({ loginHandle, forgotPassword }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" style={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            style={{
              margin: "20% 20% 2%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar style={{ margin: 1, backgroundColor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate style={{ mrginTop: 2 }}>
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
                type="submit"
                fullWidth
                variant="contained"
                style={{ marginTop: 3, marginBottom: 2 }}
                color="primary"
                onClick={() => loginHandle(email, password)}
              >
                Sign In
              </Button>
              <Grid container style={{ marginTop: 10 }}>
                <Grid item xs>
                  <Link  variant="body2">
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
