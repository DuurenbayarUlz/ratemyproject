import { Box, Button, TextField } from "@mui/material";

export const SignUpForm = () => {
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
      <TextField variant="standard" label="First Name" />
      <TextField variant="standard" label="Last Name" />
      <TextField variant="standard" label="Email" />
      <TextField variant="standard" label="Password" />
      <Box marginTop="20px">
        <Button variant="contained">Sign Up</Button>
      </Box>
    </Box>
  );
};
