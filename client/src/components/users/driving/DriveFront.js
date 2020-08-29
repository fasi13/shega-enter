import React from "react";
import "./Drive.css";

//images
import image1 from "../../../assets/img/logo.png";
import image2 from "../../../assets/img/men.png";
import image3 from "../../../assets/img/tut.png";
import image4 from "../../../assets/img/login.jpg";

// reactstrap components
import { Button, Container } from "reactstrap";
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
      ruleD: "Rule",
      meaningD: "Meaning",
      ruleImgD: image1,
    },
    {
      ruleD: "Rule2",
      meaningD: "Meaning2",
      ruleImgD: image2,
    },
    {
      ruleD: "Rule3",
      meaningD: "Meaning3",
      ruleImgD: image3,
    },
    {
      ruleD: "Rule4",
      meaningD: "Meaning4",
      ruleImgD: image4,
    },
  ],
  traficSymbol: [
    {
      symbolD: "Symbol",
      meaningSymbD: "Meaning Symbol",
      eymImgD: image1,
    },
    {
      symbolD: "Symbol2",
      meaningSymbD: "Meaning Symbol2",
      eymImgD: image2,
    },
    {
      symbolD: "Symbol3",
      meaningSymbD: "Meaning Symbol3",
      eymImgD: image3,
    },
    {
      symbolD: "Symbol4",
      meaningSymbD: "Meaning Symbol4",
      eymImgD: image4,
    },
  ],
  traficPart: [
    {
      partD: "Part",
      meaningPrtD: "Meaning Part",
      partImgD: image1,
    },
    {
      partD: "Part2",
      meaningPrtD: "Meaning Part2",
      partImgD: image2,
    },
    {
      partD: "Part3",
      meaningPrtD: "Meaning Part3",
      partImgD: image3,
    },
    {
      partD: "Part4",
      meaningPrtD: "Meaning Part4",
      partImgD: image4,
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
      ruleTitle: "የትራፊክ ህጎች",
      partTitle: "የመኪና ክፍሎች",
      symbolTitle: "የትራፊክ ምልክቶች",
      qnA: "የትራፊክ መብራት ምልክቶችን ትርጉም ያብራሩ",
      qnB: "",
      rule: "የትራፊክ መብራት ቀይ ሲበራ",
      meaning: "ቁም ማለት ነው",
      ruleImg: image4,
      img2: "",
      symbol: "30",
      symbolMeaning: "ከፍተኛ የፍጥነት መጠን 30 ማለት ነው",
      symbolImg: image4,
      part: "ስፖኪዮ",
      partMeaning: "የመኪና መስታወት",
      partImg: image4,
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
    if (ruleStore.getState() < 3) {
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

    if (symbolStore.getState() < 3) {
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

    if (partStore.getState() < 3) {
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
    if (storeDrvVideo.getState() < 3) {
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
    var base64Flag = "data:image/jpeg;base64,";
    return (
      <>
        <DriveNavbar />
        <div className="driveContainer">
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
            <Container>
              <div className="traficRuleContainer">
                <h2 className="traficRuleTitle" id="traficRuleTitle">
                  {`${this.state.ruleTitle}`}
                </h2>
                <div className="traficRule">
                  <div className="ruleBody">
                    <div className="rightSide">
                      <h2 className="ruleDisplay">{`${this.state.rule}`}</h2>
                      <h2 className="ruleMeaningDisplay">
                        {`${this.state.meaning}`}
                      </h2>
                      <div className="rulePictorial">
                        {/* <img src={base64Flag + `${img1}`} alt="" /> */}
                        <img src={ruleImg} alt="" />
                      </div>
                    </div>
                    <div className="leftSide">
                      <h2 className="rule">ህጎች</h2>
                      <h2 className="meaning">ትርጉም</h2>
                      <h2 className="pictorial">ምስል</h2>
                    </div>
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

              <div className="traficSymbolContainer">
                <h2
                  className="traficSymbolTitle"
                  id="traficSymbolTitle"
                >{`${this.state.symbolTitle}`}</h2>
                <div className="traficSymbol">
                  <div className="symbolBody">
                    <div className="rightSide">
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
                    </div>
                  </div>
                  <div>
                    <Button
                      className="prevSymbol"
                      onClick={this.prevSymbolHandle}
                    >
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="nextSymbol"
                      onClick={this.nextSymbolHandle}
                    >
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="traficSymbolContainer">
                <h2
                  className="traficSymbolTitle"
                  id="traficPartTitle"
                >{`${this.state.partTitle}`}</h2>
                <div className="traficSymbol">
                  <div className="symbolBody">
                    <div className="rightSide">
                      <h2 className="symbolDisplay">{`${this.state.part}`}</h2>
                      <h2 className="symbolMeaningDisplay">{`${this.state.partMeaning}`}</h2>
                      {console.log(partStore.getState(), this.state.part)}
                      <div className="symbolPictorial">
                        {/* <img src={base64Flag + `${partImg}`} alt="" /> */}
                        <img src={partImg} alt="" />
                      </div>
                    </div>
                    <div className="leftSide">
                      <h2 className="symbol">ክፍሎች</h2>
                      <h2 className="symbolMeaning">ትርጉም</h2>
                      <h2 className="symbolPictorial">ምስል</h2>
                    </div>
                  </div>
                  <div>
                    <Button
                      className="prevSymbol"
                      onClick={this.prevPartHandle}
                    >
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="nextSymbol"
                      onClick={this.nextPartHandle}
                    >
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
            </Container>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default DriveFront;
