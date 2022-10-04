import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SignUpForm } from "./form";

export const Signup = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{
        background: "linear-gradient(to right bottom, #EC9F05, #FF4E00)",
      }}
    >
      <Typography variant="h5">Signup to our webstore</Typography>
      <SignUpForm />
      <Box display="flex" width="200px" justifyContent="space-between">
        <Link to="/">
          <Typography>home page</Typography>
        </Link>
        <Link to="/login">
          <Typography>login page</Typography>
        </Link>
      </Box>
    </Box>
  );
};
