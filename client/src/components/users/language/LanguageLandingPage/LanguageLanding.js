import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Row,
  Col,
} from "reactstrap";
import "./LanguageLanding.css";
import book from "../../../../assets/img/tut.png";
import beg from "../../../../assets/img/beg.jpeg";
import int from "../../../../assets/img/int.jpeg";
import adv from "../../../../assets/img/adv.jpeg";
import LangNavbar from "../../navbars/LangNavbar";

function LanguageLanding() {
  return (
    <div className="languageLanding">
      {/* <p className="homeLogo" style={{ fontSize: "45px" }}>
        ሸጋ
      </p> */}
      <LangNavbar />
      <div className="langLandText"></div>
      <Row>
        <Col md="4">
          <Card>
            <CardHeader>
              <h3>BEGINNER</h3>
            </CardHeader>
            <CardBody className="begBody">
              <Row>
                <Col md="6">{/* <img alt="" src={beg} /> */}</Col>
                <Col md="6">
                  <h5 style={{ color: "violet", opacity: "0" }}>VOCAVULARY</h5>
                  <h5 style={{ color: "chartreuse", opacity: "0" }}>GRAMMER</h5>
                  <h5 style={{ color: "aqua", opacity: "0" }}>SPEEKING</h5>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              <h2>
                <Link
                  to="/begginer"
                  className="list-group-item list-group-item-action cardFoot "
                  style={{
                    backgroundColor: "transparent",
                    color: "rgba(0, 46, 102, 0.8)",
                    // outline: "none",
                    // border: "0px",
                  }}
                >
                  START
                </Link>
              </h2>
            </CardFooter>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardHeader>
              <h3>INTERMEDIATE</h3>
            </CardHeader>
            <CardBody className="intBody">
              <Row>
                <Col md="6">{/* <img alt="" src={int} /> */}</Col>
                <Col md="6">
                  <h5 style={{ color: "violet", opacity: "0" }}>VOCAVULARY</h5>
                  <h5 style={{ color: "chartreuse", opacity: "0" }}>GRAMMER</h5>
                  <h5 style={{ color: "aqua", opacity: "0" }}>SPEEKING</h5>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              <h2>
                <Link
                  to="/intermediet"
                  className="list-group-item list-group-item-action cardFoot "
                  style={{
                    backgroundColor: "transparent",
                    color: "rgba(0, 46, 102, 0.8)",
                    // outline: "none",
                    // border: "0px",
                  }}
                >
                  START
                </Link>
              </h2>
            </CardFooter>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardHeader>
              <h3>ADVANCED</h3>
            </CardHeader>
            <CardBody className="advBody">
              <Row>
                <Col md="6">{/* <img alt="" src={adv} /> */}</Col>
                <Col md="6">
                  <h5 style={{ color: "violet", opacity: "0" }}>VOCAVULARY</h5>
                  <h5 style={{ color: "chartreuse", opacity: "0" }}>GRAMMER</h5>
                  <h5 style={{ color: "aqua", opacity: "0" }}>SPEEKING</h5>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              <h2>
                <Link
                  to="/advanced"
                  className="list-group-item list-group-item-action cardFoot"
                  style={{
                    backgroundColor: "transparent",
                    color: "rgba(0, 46, 102, 0.8)",
                    // outline: "none",
                    // border: "0px",
                  }}
                >
                  START
                </Link>
              </h2>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default LanguageLanding;
