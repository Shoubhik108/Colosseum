import React from "react";

import { Typography, TextField, Box, Button, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const SignUp = ({ setSignIn }) => {
  return (
    <Box>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#16213E" }}
      >
        Register
      </Typography>

      <TextField
        required
        variant="standard"
        placeholder="Name"
        sx={{ width: "45ch", mt: 0 }}
      />
      <br />
      <TextField
        required
        variant="standard"
        placeholder="Email Id"
        sx={{ width: "45ch", mt: 2 }}
      />
      <br />
      <TextField
        variant="standard"
        type="password"
        placeholder="Password"
        sx={{ width: "45ch", mt: 2 }}
      />
      <br />
      <TextField
        variant="standard"
        type="password"
        placeholder="Confirm Password"
        sx={{ width: "45ch", mt: 2 }}
      />
      <br />
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "#E94560",
          width: "25rem",
        }}
      >
        Register
      </Button>

      <Typography sx={{ mt: 2, mb: 2, textAlign: "center" }}>OR</Typography>
      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        sx={{
          width: "25rem",
        }}
      >
        Register with Google
      </Button>
      <Divider sx={{ mt: 6, mb: 4 }} />
      <Typography gutterBottom>
        Do you want to Login?
        <Button sx={{ color: "#E94560" }} onClick={() => setSignIn(true)}>
          Click here
        </Button>
      </Typography>
    </Box>
  );
};

export default SignUp;
