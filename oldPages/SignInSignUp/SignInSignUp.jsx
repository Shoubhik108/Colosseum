import React from "react";

import { Grid, Typography } from "@mui/material";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignInSignUp = () => {
  const [signIn, setSignIn] = React.useState(true);
  return (
    <>
      <Grid container sx={{ height: "100%", backgroundColor: "#ECF0F1" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {signIn ? (
            <SignIn setSignIn={setSignIn} />
          ) : (
            <SignUp setSignIn={setSignIn} />
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#16213E",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            color: "#ECF0F1",
          }}
        >
          <Typography variant="h1" component="div" gutterBottom sx={{ mb: 0 }}>
            App-Name
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ mt: 0, fontStyle: "italic", color: "#ECF0F1" }}
          >
            Some Catchphrase!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SignInSignUp;
