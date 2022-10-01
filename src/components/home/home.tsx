import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../features/product/Product";

export const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <div>
        <Link to="/login">Click to view login page</Link>
      </div>
      <div>
        <Link to="/signup">Click to view signup page</Link>
      </div>
      <Product />
    </div>
  );
};
