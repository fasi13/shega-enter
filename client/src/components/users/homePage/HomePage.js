import React from "react";
import {Link} from "react-router-dom";
import './HomePage.css';

// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { Button, } from "reactstrap";

function HomePage() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      {/* <ExamplesNavbar /> */}
      <div className="homeContainer">
          <p className="homeLogo" style={{fontSize: '45px',  }}>ሸጋ</p>
          <div className="homeHeading">
            <h1>Welcome to Shega Entertainment</h1>
            <h4>You can get Jokes, Language and Driving License</h4>
          </div>
          <div className="homeButtons">
            <Button
                className="btn btn-outline-secondary"
                href="/suhbesgcarEbnetdejrotkainment"
            >
                Joke 
            </Button> 
            <Button
                className="btn btn-outline-secondary"
                href="/suhbesgcarEbnetdelratnagiunamgeent"
            >
                Language 
            </Button> 
            <Button
                className="btn btn-outline-secondary "
                href="/suhbesgcarEbnetdedrrtiavinment"
            >
                Driving License 
            </Button> 
        </div>
        <Link to="/login" className="homeAdminBtn">Admin</Link>
        <div className="main">
        </div>
      </div>
    </>
  );
}

export default HomePage;
