import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Box, Grid, Link } from "@mui/material";
import { Outlet } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        My Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function account() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />

      <Outlet />

      <Box
        component="footer"
        sx={{
          py: 3,
          // px: 20,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Copyright />
        </Grid>
      </Box>
    </Box>
  );
}
