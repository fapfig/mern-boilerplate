import * as React from "react";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Paper,
  Box,
  Container,
  Grid,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";

export default function Forgot() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box sx={{ p: 1 }}>
        <Grid container justifyContent="flex-start">
          <Grid item>
            {"Already have an account? "}
            <Link component={RouterLink} to="/account/signin" variant="body2">
              Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>

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
              Trouble signing in?
            </Typography>

            <Typography component="body1" variant="body1">
              Don't worry, we've got your back! Just enter your email address
              and we'll send you a link with which you can reset your password.
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
                value=""
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
