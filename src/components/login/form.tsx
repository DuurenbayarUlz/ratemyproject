import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box
      display="flex"
      maxWidth="500px"
      borderRadius={3}
      flexDirection="column"
      bgcolor="white"
      alignItems="center"
      justifyContent="center"
      paddingX="50px"
      marginTop="20px"
      minHeight="320px"
    >
      <Box display="flex" flexDirection="column">
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
            disabled={email.length === 0 || password.length === 0}
            variant="contained"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              console.log(email, password);
              setEmail("");
              setPassword("");
            }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
