import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Navbar,
  Container,
} from "reactstrap";
import './Navbar.css';

function LangNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 199 ||
        document.body.scrollTop > 199
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 200 ||
        document.body.scrollTop < 200
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor}>
        <Container>
         <h2 style={{fontSize: '45px'}}>ሸጋ</h2>
         <a  href="/home" tag={Link}><h2>Home</h2></a>
        </Container>
      </Navbar>
    </>
  );
}

export default LangNavbar;
