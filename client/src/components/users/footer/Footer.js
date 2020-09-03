/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import "./Footer.css";
// core components

function FooterBlackSocial() {
  return (
    <>
      <footer className="footer">
        <Container>
          <div className="content">
            <Row>
              <Col md="4">
                <h6>About Us</h6>
                <ul className="links-vertical">
                  <li>
                    <a
                      className="text-muted footerContents"
                      href="https://elpida.netlify.app/"
                      // onClick={(e) => e.preventDefault()}
                    >
                      Elpida Trading PLC
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted footerContents"
                      target="blank"
                      href="https://www.google.com/maps/search/Addis+Ababa,+Ethiopia+Kirkos+Sub-City,+Woreda+01,+On+AB-Zone+Business+Center+5th+floor,+Office+No.+182%2F183%2FF-5%2F110/@9.0094253,38.7730714,17z/data=!3m1!4b1"
                    >
                      Our Office
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md="4">
                <h6>Contact Us</h6>
                <ul className="links-vertical">
                  <li>
                    <a className="text-muted footerPhone" href="tel:0944336661">
                      +251 944 336 661
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted footerEmail"
                      href="mailto:elpidatradingplc@gmail.com"
                    >
                      elpidatradingplc@gmail.com<br></br>
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md="4">
                <h6>Follow Us</h6>
                <ul className="social-buttons">
                  <li>
                    <Button
                      id="msg"
                      className="btn-icon btn-neutral btn-round mr-1"
                      href="sms:+251944336661"
                      target="_blank"
                    >
                      <i className="fas fa-sms"></i>
                      {/* <a href="sms:+251912501949&body=OK%2520">Text us!</a> */}
                    </Button>
                  </li>
                  <li>
                    <Button
                      id="fsbk"
                      className="btn-icon btn-neutral btn-round mr-1"
                      color="facebook"
                      href="https://www.facebook.com/Shega-Intertainment-625447708085322/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon btn-neutral btn-round mr-1"
                      id="tg"
                      href="https://t.me/shegaEnt"
                      target="_blank"
                    >
                      <i class="fab fa-telegram-plane"></i>
                    </Button>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div className="copyright text-center " id="copyright">
            © {new Date().getFullYear()}, Developed by{" "}
            <a
              href="https://www.epana.tech"
              target="_blank"
              className="text-muted"
            >
              ePana Technologies
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlackSocial;
