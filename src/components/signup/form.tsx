import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      display="flex"
      maxWidth="400px"
      height="50vh"
      borderRadius={3}
      flexDirection="column"
      bgcolor="white"
      justifyContent="center"
      alignItems="center"
      paddingX="50px"
      marginTop="20px"
    >
      <TextField
        variant="standard"
        label="First Name"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <TextField
        variant="standard"
        label="Last Name"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <TextField
        variant="standard"
        label="Email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        variant="standard"
        label="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Box marginTop="20px">
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            console.log(firstName, lastName, email, password);
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};
