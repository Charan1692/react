//TODO: DONE set NavbarBrand to go to home page and export Header

import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="secondary" light>
      <NavbarBrand tag={Link} to="/" className="text-white">
        <strong>Realtime Contact</strong>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
