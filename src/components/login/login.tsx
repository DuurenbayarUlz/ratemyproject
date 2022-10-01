import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { LogInForm } from "./form";

export const Login = () => {
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
      <h1>This is the login page</h1>
      <div>
        <Link to="/signup">Click to view signup page</Link>
      </div>
      <div>
        <Link to="/">Click to view home page</Link>
      </div>
      <LogInForm />
    </Box>
  );
};
