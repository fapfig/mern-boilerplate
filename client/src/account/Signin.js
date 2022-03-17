import * as React from "react";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Paper,
  Box,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";

import { accountService } from "../services";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const email = data.get("email");
    const password = data.get("password");

    // alertService.clear();
    accountService
      .login(email, password)
      .then(() => {
        // const { from } = location.state || { from: { pathname: "/" } };
        // history.push(from);
      })
      .catch((error) => {
        console.log(error);
        // setSubmitting(false);
        // alertService.error(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper>
        <Box
          sx={{
            p: 3,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value="fabiopf@live.com"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value="1234abcd"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  component={RouterLink}
                  to="/account/forgot"
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {"Don't have an account? "}
                <Link
                  component={RouterLink}
                  to="/account/signup"
                  variant="body2"
                >
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
