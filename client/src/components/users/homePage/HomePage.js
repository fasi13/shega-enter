import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import "./HomePage.css";

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
        <Container>
          <p className="homeLogo" style={{ fontSize: "45px" }}>
            ሸጋ
          </p>
          <div className="homeHeading">
            <h1>Welcome to Shega Entertainment</h1>
            <h4 style={{ opacity: "0" }}>
              You can get Language and Driving License here
            </h4>
          </div>
          <div className="homeButtons">
            {/* <Button
            className="btn btn-outline-secondary"
            href="/suhbesgcarEbnetdejrotkainment"
          >
            Joke
          </Button> */}
            {/* <Button
            className="btn btn-outline-secondary"
            href="/suhbesgcarEbnetdelratnagiunamgeent"
          >
            Language
          </Button> */}
            <Row>
              <Col md="1"></Col>
              <Col md="5">
                <Link
                  to="/lang-land"
                  className="list-group-item list-group-item-action btn btn-outline-secondary"
                  style={{
                    backgroundColor: "white",
                    color: "rgba(0, 46, 102, 0.8)",
                  }}
                >
                  Language
                </Link>
              </Col>
              <Col md="5">
                <Link
                  className="list-group-item list-group-item-action btn btn-outline-secondary "
                  to="/suhbesgcarEbnetdedrrtiavinment"
                  style={{
                    backgroundColor: "white",
                    color: "rgba(0, 46, 102, 0.8)",
                  }}
                >
                  Driving License
                </Link>
              </Col>
            </Row>
          </div>
          {/* <Link to="/login" className="homeAdminBtn">Admin</Link> */}
          <div className="main"></div>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
