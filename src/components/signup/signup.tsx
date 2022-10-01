import { Box } from "@mui/material";
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
      bgcolor="orange"
    >
      <h1>This is the sign up page</h1>
      <div>
        <Link to="/">Click to view home page</Link>
      </div>
      <div>
        <Link to="/login">Click to view login page</Link>
      </div>
      <SignUpForm />
    </Box>
  );
};
