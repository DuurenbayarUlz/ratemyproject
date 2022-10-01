import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div>
      <h1>This is the sign up page</h1>
      <div>
        <Link to="/">Click to view home page</Link>
      </div>
      <div>
        <Link to="/login">Click to view login page</Link>
      </div>
    </div>
  );
};
