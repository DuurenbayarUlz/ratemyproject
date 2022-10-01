import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <h1>This is the login page</h1>
      <div>
        <Link to="/signup">Click to view signup page</Link>
      </div>
      <div>
        <Link to="/">Click to view home page</Link>
      </div>
    </div>
  );
};
