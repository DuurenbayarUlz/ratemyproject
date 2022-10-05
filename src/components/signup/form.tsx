import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      display="flex"
      maxWidth="500px"
      minHeight="400px"
      borderRadius={3}
      flexDirection="column"
      bgcolor="white"
      justifyContent="center"
      alignItems="center"
      paddingX="50px"
      marginTop="20px"
    >
      <Box display="flex" flexDirection="column">
        <TextField
          variant="standard"
          label="First Name"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
          value={firstName}
        />
        <TextField
          variant="standard"
          label="Last Name"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
          value={lastName}
        />
        <TextField
          variant="standard"
          label="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <TextField
          variant="standard"
          label="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <Box marginTop="20px">
          <Button
            disabled={
              firstName.length === 0 ||
              lastName.length === 0 ||
              email.length === 0 ||
              password.length === 0
            }
            fullWidth
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              console.log(firstName, lastName, email, password);
              setFirstName("");
              setLastName("");
              setPassword("");
              setEmail("");
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
