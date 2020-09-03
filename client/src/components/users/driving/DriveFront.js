import React from "react";
import "./Drive.css";

//images
import image1 from "../../../assets/img/rule/1.png";
import image2 from "../../../assets/img//rule/2.png";
import image3 from "../../../assets/img//rule/3.png";
import image5 from "../../../assets/img//rule/5.png";
import image6 from "../../../assets/img//rule/6.png";
import image7 from "../../../assets/img//rule/7.png";
import image8 from "../../../assets/img//rule/8.png";
import image9 from "../../../assets/img//rule/15.png";

import sym1 from "../../../assets/img//rule/4.png";
import sym2 from "../../../assets/img//rule/10.png";
import sym3 from "../../../assets/img//rule/13.png";
import sym4 from "../../../assets/img//rule/14.png";
import sym5 from "../../../assets/img//rule/17.png";
import sym6 from "../../../assets/img//rule/18.png";
import sym7 from "../../../assets/img//rule/11.png";
import sym8 from "../../../assets/img//rule/9.png";
import sym9 from "../../../assets/img//rule/16.png";
import sym10 from "../../../assets/img//rule/12.png";

import part1 from "../../../assets/img/part/full.jpg";
import part2 from "../../../assets/img/part/gearbox-min.jpg";
import part3 from "../../../assets/img/part/filter.jpg";
import part4 from "../../../assets/img/part/gearbox.png";
import part5 from "../../../assets/img/part/engine.jpg";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { createStore } from "redux";

// core components
import Footer from "../footer/Footer";
import DriveNavbar from "../navbars/DriveNavbar";

function drivRule(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
let ruleStore = createStore(drivRule);
////////////////Symbol///////////////////////////
function drivSymbol(stateA = 0, action) {
  switch (action.type) {
    case "INCREMENTA":
      return stateA + 1;
    case "DECREMENTA":
      return stateA - 1;
    default:
      return stateA;
  }
}
let symbolStore = createStore(drivSymbol);
//////////////////Parts/////////////////////////
function drivPart(stateW = 0, action) {
  switch (action.type) {
    case "INCREMENTW":
      return stateW + 1;
    case "DECREMENTW":
      return stateW - 1;
    default:
      return stateW;
  }
}
let partStore = createStore(drivPart);
///////////////////video////////////////////////
function videoDrive(stateW = 0, action) {
  switch (action.type) {
    case "INCREMENTW":
      return stateW + 1;
    case "DECREMENTW":
      return stateW - 1;
    default:
      return stateW;
  }
}
let storeDrvVideo = createStore(videoDrive);
///////////////////////////////////////////
const drivBox = {
  traficRule: [
    {
      ruleD: "",
      meaningD: "Closed to motor vehicles on more than two wheels",
      ruleImgD: image1,
    },
    {
      ruleD: "",
      meaningD: "Closed to bicycle",
      ruleImgD: image2,
    },
    {
      ruleD: "",
      meaningD: "Closed to motor vehicles",
      ruleImgD: image3,
    },

    {
      ruleD: "",
      meaningD: "Maximum allowable speed is 35 rpm",
      ruleImgD: image5,
    },
    {
      ruleD: "",
      meaningD: "Stop",
      ruleImgD: image6,
    },
    {
      ruleD: "",
      meaningD: "Closed to motorcycles",
      ruleImgD: image7,
    },
    {
      ruleD: "",
      meaningD: "Closed to motor vehicles",
      ruleImgD: image8,
    },
    {
      ruleD: "",
      meaningD: "Closed to bicycles",
      ruleImgD: image9,
    },
  ],
  traficSymbol: [
    {
      symbolD: "Symbol",
      meaningSymbD: "Closed to vehicle a total weight above 6 tons",
      eymImgD: sym1,
    },
    {
      symbolD: "Symbol2",
      meaningSymbD: "No Left turn",
      eymImgD: sym2,
    },
    {
      symbolD: "Symbol3",
      meaningSymbD: "Closed to vehicles of total height exceeding 3 Meter",
      eymImgD: sym3,
    },
    {
      symbolD: "Symbol4",
      meaningSymbD: "Closed to vehicles of total width exceeding 18 Meter",
      eymImgD: sym4,
    },
    {
      symbolD: "",
      meaningSymbD: "Closed to handcarts",
      eymImgD: sym5,
    },
    {
      symbolD: "",
      meaningSymbD: "Closed to pedestrians ",
      eymImgD: sym6,
    },
    {
      symbolD: "",
      meaningSymbD: "Prohibition of use of audible warning appliances",
      eymImgD: sym7,
    },
    {
      symbolD: "",
      meaningSymbD: "Closed to animal drawn vehicles and animals ",
      eymImgD: sym8,
    },
    {
      symbolD: "",
      meaningSymbD: "No pass",
      eymImgD: sym9,
    },
    {
      symbolD: "",
      meaningSymbD: "No overtaking to motor vehicle on more than two wheel",
      eymImgD: sym10,
    },
  ],
  traficPart: [
    {
      partD: "Engine",
      meaningPrtD: " Exploded view",
      partImgD: part1,
    },
    {
      partD: "Gear Box (Transmission)",
      meaningPrtD:
        "The Gear Box, or transmission, comes in at a close second to the engine and is what commonly needs attention when vehicles fail.      The transmission is what contains the different gears that the vehicle needs to shift into depending on speed. These gears transfer the engine’s power to the wheels of the vehicle. There are many types of gearbox parts in different cars.",
      partImgD: part2,
    },
    {
      partD: "Oil Filter",
      meaningPrtD:
        "Filters are essential in removing dust and abrasive particles from the engine oil. Such particles can harm the engine and prevent proper functioning. Oil filters are mainly used to segregate the engine oil from unwanted debris and dust particles. Most of the oil filters are classified as high-efficiency filters as it segregates abrasive materials from the engine oil.",
      partImgD: part3,
    },
    {
      partD: "Gear Box parts and oil filter",
      meaningPrtD:
        "There are quite a variety of gearbox parts included in the transmission. Most of these parts can be purchased from the online stores for replacement but that’s less than half the battle, you’ll need technical expertise to fix a transmission. Some of the parts include the gearbox cover, the shifter fork, the shifter rod, gearbox fork, and synchronizer rings or hubs.",
      partImgD: part4,
    },
    {
      meaningPrtD:
        "One of the most important components of a vehicle includes the engine. This is the most important component of an automobile by all accords. The performance of a vehicle depends on its engine and it is the heart of every car.",
      partD: "Engine",
      partImgD: part5,
    },
  ],
  drvVid: [
    { urlDr: "https://www.youtube.com/embed/ZmUm29fc6nI" },
    { urlDr: "https://www.youtube.com/embed/_1CZYJFRT08" },
    { urlDr: "https://www.youtube.com/embed/ZmUm29fc6nI" },
    { urlDr: "https://www.youtube.com/embed/_1CZYJFRT08" },
  ],
};

class DriveFront extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ruleTitle: "Traffic Rules",
      partTitle: "Vehicle Body",
      symbolTitle: "Traffic Symbols",
      qnA: "የትራፊክ መብራት ምልክቶችን ትርጉም ያብራሩ",
      qnB: "",
      rule: "የትራፊክ መብራት ቀይ ሲበራ",
      meaning: "Closed to bicycles",
      ruleImg: image9,
      img2: "",
      symbol: "30",
      symbolMeaning: "No pass",
      symbolImg: sym9,
      part: "Engine",
      partMeaning:
        "One of the most important components of a vehicle includes the engine. This is the most important component of an automobile by all accords. The performance of a vehicle depends on its engine and it is the heart of every car.",
      partImg: part5,
      videoTitle: "ቪዲዮ መርጃ",
      drvVideoSrc: "https://www.youtube.com/embed/_1CZYJFRT08",
    };
  }

  nextRuleHandle = () => {
    this.setState({ rule: drivBox.traficRule[ruleStore.getState()].ruleD });

    this.setState({
      meaning: drivBox.traficRule[ruleStore.getState()].meaningD,
    });
    this.setState({
      ruleImg: drivBox.traficRule[ruleStore.getState()].ruleImgD,
    });
    console.log(drivBox.traficRule[ruleStore.getState()].ruleImgD);
    if (ruleStore.getState() < drivBox.traficRule.length - 1) {
      ruleStore.dispatch({ type: "INCREMENT" });
    }
  };

  prevRuleHandle = () => {
    this.setState({ rule: drivBox.traficRule[ruleStore.getState()].ruleD });
    this.setState({
      meaning: drivBox.traficRule[ruleStore.getState()].meaningD,
    });
    this.setState({
      ruleImg: drivBox.traficRule[ruleStore.getState()].ruleImgD,
    });
    if (ruleStore.getState() > 0) {
      ruleStore.dispatch({ type: "DECREMENT" });
    }
  };
  ////////////////Symbol////////////////////////////
  nextSymbolHandle = () => {
    this.setState({
      symbol: drivBox.traficSymbol[symbolStore.getState()].symbolD,
    });
    this.setState({
      symbolMeaning: drivBox.traficSymbol[symbolStore.getState()].meaningSymbD,
    });
    this.setState({
      symbolImg: drivBox.traficSymbol[symbolStore.getState()].eymImgD,
    });

    if (symbolStore.getState() < drivBox.traficSymbol.length - 1) {
      symbolStore.dispatch({ type: "INCREMENTA" });
    }
  };

  prevSymbolHandle = () => {
    this.setState({
      symbol: drivBox.traficSymbol[symbolStore.getState()].symbolD,
    });
    this.setState({
      symbolMeaning: drivBox.traficSymbol[symbolStore.getState()].meaningSymbD,
    });
    this.setState({
      symbolImg: drivBox.traficSymbol[symbolStore.getState()].eymImgD,
    });
    if (symbolStore.getState() > 0) {
      symbolStore.dispatch({ type: "DECREMENTA" });
    }
  };
  ///////////////////////Parts/////////////////////////////////
  nextPartHandle = () => {
    this.setState({ part: drivBox.traficPart[partStore.getState()].partD });
    this.setState({
      partMeaning: drivBox.traficPart[partStore.getState()].meaningPrtD,
    });
    this.setState({
      partImg: drivBox.traficPart[partStore.getState()].partImgD,
    });

    if (partStore.getState() < drivBox.traficPart.length - 1) {
      partStore.dispatch({ type: "INCREMENTW" });
    }
  };

  prevPartHandle = () => {
    this.setState({ part: drivBox.traficPart[partStore.getState()].partD });
    this.setState({
      partMeaning: drivBox.traficPart[partStore.getState()].meaningPrtD,
    });
    this.setState({
      partImg: drivBox.traficPart[partStore.getState()].partImgD,
    });
    if (partStore.getState() > 0) {
      partStore.dispatch({ type: "DECREMENTW" });
    }
  };

  /////////////////////Video//////////////////////////////////
  nextlangVideoHandle = () => {
    this.setState({
      drvVideoSrc: drivBox.drvVid[storeDrvVideo.getState()].drvVid,
    });
    if (storeDrvVideo.getState() < drivBox.drvVid.length - 1) {
      storeDrvVideo.dispatch({ type: "INCREMENTW" });
    }
  };

  prevlangVideoHandle = () => {
    this.setState({
      drvVideoSrc: drivBox.drvVid[storeDrvVideo.getState()].drvVid,
    });
    if (storeDrvVideo.getState() > 0) {
      storeDrvVideo.dispatch({ type: "DECREMENTW" });
    }
  };
  /////////////////////////////////////////////////////////////////////
  /////////Array of binary to a Base64 string////////////////////
  arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  /////////////////////////////////////////////////////////////

  render() {
    const { ruleImg, symbolImg, partImg, drvVideoSrc } = this.state;
    // var base64Flag = "data:image/jpeg;base64,";
    return (
      <>
        <DriveNavbar />
        <div className="driveContainer">
          <Container>
            <div className="driveHeaderContainer">
              <div className="content-center">
                <h2 className="slogan">በቀላሉ ይማሩ መንዳት ይቻሉ</h2>
                <div className="listContainer">
                  <a className="list1" href="#traficRuleTitle">
                    የትራፊክ ህጎች
                  </a>
                  <a className="list2" href="#traficSymbolTitle">
                    የትራፊክ ምልክቶች
                  </a>
                  <a className="list3" href="#traficPartTitle">
                    የመኪና ክፍሎች
                  </a>
                </div>
                <h4 className="shegaDriveLanding">Shega Entertainment</h4>
              </div>
            </div>

            <div className="driveCards">
              <div className="traficRuleContainer">
                <h2 className="traficRuleTitle" id="traficRuleTitle">
                  {`${this.state.ruleTitle}`}
                </h2>

                <div className="traficRule">
                  <div className="ruleBody">
                    <Row>
                      <Col
                        md="6"
                        style={{
                          borderRight: "1px rgba(0, 46, 102, 0.8) solid",
                        }}
                      >
                        <h2 className="ruleMeaningDisplay">
                          {`${this.state.meaning}`}
                        </h2>
                      </Col>
                      <Col md="6">
                        <div className="rulePictorial">
                          <img src={ruleImg} alt="" />
                        </div>
                      </Col>
                    </Row>
                    {/* <div className="rightSide">
                      <h2 className="ruleDisplay">{`${this.state.rule}`}</h2>
                      <h2 className="ruleMeaningDisplay">
                        {`${this.state.meaning}`}
                      </h2>
                      <div className="rulePictorial">
                        <img src={ruleImg} alt="" />
                      </div>
                    </div>
                    <div className="leftSide">
                      <h2 className="rule">ህጎች</h2>
                      <h2 className="meaning">ትርጉም</h2>
                      <h2 className="pictorial">ምስል</h2>
                    </div> */}
                  </div>
                  <div>
                    <Button className="prevRule" onClick={this.prevRuleHandle}>
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button className="nextRule" onClick={this.nextRuleHandle}>
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="traficRuleContainer">
                <h2
                  className="traficRuleTitle"
                  id="traficSymbolTitle"
                >{`${this.state.symbolTitle}`}</h2>
                <div className="traficRule">
                  <div className="ruleBody">
                    <Row>
                      <Col
                        md="6"
                        style={{
                          borderRight: "1px rgba(0, 46, 102, 0.8) solid",
                        }}
                      >
                        <h2 className="ruleMeaningDisplay">{`${this.state.symbolMeaning}`}</h2>
                      </Col>
                      <Col md="6">
                        <div className="rulePictorial">
                          <img src={symbolImg} alt="" />
                        </div>
                      </Col>
                    </Row>
                    {/* <div className="rightSide">
                      <h2 className="symbolDisplay">{`${this.state.symbol}`}</h2>
                      <h2 className="symbolMeaningDisplay">{`${this.state.symbolMeaning}`}</h2>
                      <div className="symbolPictorial">
                        <img src={symbolImg} alt="" />
                      </div>
                    </div>
                    <div className="leftSide">
                      <h2 className="symbol">ምልክቶች</h2>
                      <h2 className="symbolMeaning">ትርጉም</h2>
                      <h2 className="symbolPictorial">ምስል</h2>
                    </div> */}
                  </div>
                  <div>
                    <Button
                      className="prevRule"
                      onClick={this.prevSymbolHandle}
                    >
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="nextRule"
                      onClick={this.nextSymbolHandle}
                    >
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="traficRuleContainer">
                <h2
                  className="traficRuleTitle"
                  id="traficPartTitle"
                >{`${this.state.partTitle}`}</h2>
                <div className="traficRule">
                  <div className="ruleBody">
                    <Row>
                      <Col
                        md="6"
                        style={{
                          borderRight: "1px rgba(0, 46, 102, 0.8) solid",
                        }}
                      >
                        <h2 className="symbolDisplay">{`${this.state.part}`}</h2>
                        <h6
                          className="ruleMeaningDisplay"
                          style={{ marginTop: "0" }}
                        >{`${this.state.partMeaning}`}</h6>
                      </Col>
                      <Col md="6">
                        <div className="rulePictorial">
                          <img src={partImg} alt="" />
                        </div>
                      </Col>
                    </Row>
                    {/* <div className="rightSide">
                      <h2 className="symbolDisplay">{`${this.state.part}`}</h2>
                      <h2 className="symbolMeaningDisplay">{`${this.state.partMeaning}`}</h2>
                      {console.log(partStore.getState(), this.state.part)}
                      <div className="symbolPictorial">
                        <img src={partImg} alt="" />
                      </div>
                    </div>
                    <div className="leftSide">
                      <h2 className="symbol">ክፍሎች</h2>
                      <h2 className="symbolMeaning">ትርጉም</h2>
                      <h2 className="symbolPictorial">ምስል</h2>
                    </div> */}
                  </div>
                  <div>
                    <Button className="prevRule" onClick={this.prevPartHandle}>
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button className="nextRule" onClick={this.nextPartHandle}>
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="traficSymbolContainer">
                <h2
                  className="youtubeVideoTitle"
                  id="youtubeVideoTitle"
                >{`${this.state.videoTitle}`}</h2>
                <div className="traficSymbol">
                  <div className="videoBody">
                    <iframe
                      title="firstVideo"
                      src={drvVideoSrc}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div>
                    <Button
                      className="prevSymbol"
                      onClick={this.prevVideoHandle}
                    >
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="nextSymbol"
                      onClick={this.nextVideoHandle}
                    >
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Footer />
        </div>
      </>
    );
  }
}

export default DriveFront;
