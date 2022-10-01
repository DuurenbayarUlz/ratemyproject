import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box
      display="flex"
      maxWidth="500px"
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
          variant="contained"
          fullWidth
          onClick={() => {
            console.log(email, password);
          }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
};
