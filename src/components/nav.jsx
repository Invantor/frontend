import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/alcohols">Alcohol Catalog</Link>
      <Link to="/mixers">Mixers Catalog</Link>
      <Link to="/drinks">Drinks Catalog</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  );
};

export default Nav;
