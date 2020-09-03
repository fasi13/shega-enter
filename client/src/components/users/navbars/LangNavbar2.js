import React, { useState } from "react";
// reactstrap components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Navbar.css";

function LangNavbar2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar
        // color="white"
        backgroundColor="rgba(0, 46, 102, 0.8)"
        light
        expand="md"
        className={"fixed-top "}
      >
        <NavbarBrand style={{ color: "white" }} href="/">
          <h1>ሸጋ</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{ color: "white" }} href="/home/">
                <h2>Home</h2>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} href="/lang-land">
                <h2>Language</h2>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default LangNavbar2;
