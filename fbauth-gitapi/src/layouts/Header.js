import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <strong>
          <Link to="/" className="text-decoration-none text-white ms-3">
            GitSearchFireAuth
          </Link>
        </strong>
      </NavbarBrand>
      <NavbarText className="text-white">
        {user?.email ? user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          {user ? (
            <NavItem>
              <NavLink
                onClick={() => setUser(null)}
                tag={Link}
                to="/"
                className="text-white"
              >
                <strong>Signout</strong>
              </NavLink>
            </NavItem>
          ) : (
            <React.Fragment>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  <strong>Signup</strong>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white">
                  <strong>Signin</strong>
                </NavLink>
              </NavItem>
            </React.Fragment>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
