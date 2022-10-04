import { Box, Typography } from "@mui/material";
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
      sx={{
        background: "linear-gradient(to right bottom, #EC9F05, #FF4E00)",
      }}
    >
      <Typography variant="h5">Login to our webstore</Typography>
      <LogInForm />
      <Box display="flex" width="200px" justifyContent="space-between">
        <Link to="/signup">
          <Typography>signup page</Typography>
        </Link>

        <Link to="/">
          <Typography> home page</Typography>
        </Link>
      </Box>
    </Box>
  );
};
