import React from "react";
import "../Language.css";
import Audio1I from "../../../../assets/mp3/sound1.mp3";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { createStore } from "redux";

// core components
import Footer from "../../footer/Footer";
import LangNavbar from "../../navbars/LangNavbar";

function vocLangI(state = 0, action) {
  switch (action.type) {
    case "INCREMENTI":
      return state + 1;
    case "DECREMENTI":
      return state - 1;
    default:
      return state;
  }
}
let vocStoreI = createStore(vocLangI);
///////////////////tens////////////////////////
function tensLangI(stateAI = 0, action) {
  switch (action.type) {
    case "INCREMENTAI":
      return stateAI + 1;
    case "DECREMENTAI":
      return stateAI - 1;
    default:
      return stateAI;
  }
}
let tensStoreI = createStore(tensLangI);
///////////////////test////////////////////////
function testLangI(stateWI = 0, action) {
  switch (action.type) {
    case "INCREMENTWI":
      return stateWI + 1;
    case "DECREMENTWI":
      return stateWI - 1;
    default:
      return stateWI;
  }
}
let storeTestI = createStore(testLangI);
///////////////////video////////////////////////
function videoLangI(stateWI = 0, action) {
  switch (action.type) {
    case "INCREMENTWI":
      return stateWI + 1;
    case "DECREMENTWI":
      return stateWI - 1;
    default:
      return stateWI;
  }
}
let storeVideoI = createStore(videoLangI);
///////////////////////////////////////////
const dataBoxI = {
  vocabI: [
    {
      englishI: "Ambitious",
      amharicI: "ጉጉ",
    },
    {
      englishI: "Extraordinary",
      amharicI: "እጅግ ጎበዝ",
    },
    {
      englishI: "Soulful",
      amharicI: "ጥልቅ ስሜት",
    },
    {
      englishI: "Relative",
      amharicI: "ዘመድ",
    },
  ],
  tensI: [
    {
      tenseTypeI: "Past Tense",
      structureI: "S + V3 + O",
      tenseExampleI: "I saw her",
    },
    {
      tenseTypeI: "Past Tense2",
      structureI: "S + V3 + O",
      tenseExampleI: "I saw her",
    },
    {
      tenseTypeI: "Past Tense3",
      structureI: "S + V3 + O",
      tenseExampleI: "I saw her",
    },
    {
      tenseTypeI: "Past Tense4",
      structureI: "S + V3 + O",
      tenseExampleI: "I saw her",
    },
  ],
  vidI: [
    { urlI: "https://www.youtube.com/embed/HIFzQdKcGNg" },
    { urlI: "https://www.youtube.com/embed/SJOnhWiJArM" },
    { urlI: "https://www.youtube.com/embed/taOQboGLPfg" },
    { urlI: "https://www.youtube.com/embed/VL363_dpaHc" },
  ],
  testI: [
    { testI: "what is the meaning of destiny?", answerI: "መዳረሻ" },
    { testI: "what is the meaning of destiny?2", answerI: "መዳረሻ2" },
    { testI: "what is the meaning of destiny?3", answerI: "መዳረሻ3" },
    { testI: "what is the meaning of destiny?4", answerI: "መዳረሻ4" },
  ],
};

class Intermediet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vocI: "Vocabulary",
      tensI: "Sentences",
      excI: "Exercice",
      englishI: "Delicious",
      amharicI: "ጣፋጭ",
      tenseTypeI: "Past Tense",
      structureI: "S + V3 + O",
      tenseExampleI: "I saw her",
      testI: "what is the meaning of destiny?",
      answerI: "መዳረሻ",
      dispQnI: "Click Qn to Start the test",
      dispAnsI: "",
      langVideoTitleI: "Tutorial Video",
      langVideoSrcI: "https://www.youtube.com/embed/isMpyCkKuDU",
    };
  }

  nextVocHandleI = () => {
    this.setState({
      englishI: dataBoxI.vocabI[vocStoreI.getState()].englishI,
    });
    this.setState({
      amharicI: dataBoxI.vocabI[vocStoreI.getState()].amharicI,
    });

    if (vocStoreI.getState() < 3) {
      vocStoreI.dispatch({ type: "INCREMENTI" });
    }
  };

  prevVocHandleI = () => {
    this.setState({
      englishI: dataBoxI.vocabI[vocStoreI.getState()].englishI,
    });
    this.setState({
      amharicI: dataBoxI.vocabI[vocStoreI.getState()].amharicI,
    });
    if (vocStoreI.getState() > 0) {
      vocStoreI.dispatch({ type: "DECREMENTI" });
    }
  };
  ///////////////////Tense/////////////////////////
  nextTensHandleI = () => {
    this.setState({
      tenseTypeI: dataBoxI.tensI[tensStoreI.getState()].tenseTypeI,
    });
    this.setState({
      structureI: dataBoxI.tensI[tensStoreI.getState()].structureI,
    });
    this.setState({
      tenseExampleI: dataBoxI.tensI[tensStoreI.getState()].tenseExampleI,
    });

    if (tensStoreI.getState() < 3) {
      tensStoreI.dispatch({ type: "INCREMENTAI" });
    }
  };

  prevTensHandleI = () => {
    this.setState({
      tenseTypeI: dataBoxI.tensI[tensStoreI.getState()].tenseTypeI,
    });
    this.setState({
      structureI: dataBoxI.tensI[tensStoreI.getState()].structureI,
    });
    this.setState({
      tenseExampleI: dataBoxI.tensI[tensStoreI.getState()].tenseExampleI,
    });
    if (tensStoreI.getState() > 0) {
      tensStoreI.dispatch({ type: "DECREMENTAI" });
    }
  };
  /////////////////////Exercise//////////////////////////////////
  nextTestHandleI = () => {
    this.setState({ testI: dataBoxI.testI[storeTestI.getState()].testI });
    this.setState({ answerI: dataBoxI.testI[storeTestI.getState()].answerI });
    this.setState({ dispQnI: "Click Qn to see the next question" });
    this.setState({ dispAnsI: "" });

    if (storeTestI.getState() < 3) {
      storeTestI.dispatch({ type: "INCREMENTWI" });
    }
  };

  prevTestHandleI = () => {
    this.setState({ testI: dataBoxI.testI[storeTestI.getState()].testI });
    this.setState({ answerI: dataBoxI.testI[storeTestI.getState()].answerI });
    this.setState({ dispQnI: "Click Qn to see the previous question" });
    this.setState({ dispAnsI: "" });

    if (storeTestI.getState() > 0) {
      storeTestI.dispatch({ type: "DECREMENTWI" });
    }
  };

  displayQnI = () => {
    this.setState({ dispQnI: this.state.testI });
    this.setState({ dispAnsI: "Click Ans to see the answer" });
  };
  displayAnsI = () => {
    this.setState({ dispAnsI: this.state.answerI });
  };
  /////////////////////////////////////////////////////////////
  /////////////////////Video//////////////////////////////////
  nextlangVideoHandleI = () => {
    this.setState({
      langVideoSrcI: dataBoxI.vidI[storeVideoI.getState()].urlI,
    });

    if (storeVideoI.getState() < 3) {
      storeVideoI.dispatch({ type: "INCREMENTWI" });
    }
  };

  prevlangVideoHandleI = () => {
    this.setState({
      langVideoSrcI: dataBoxI.vidI[storeVideoI.getState()].urlI,
    });
    if (storeVideoI.getState() > 0) {
      storeVideoI.dispatch({ type: "DECREMENTWI" });
    }
  };
  /////////////////////////////////////////////////////////////////////

  render() {
    const { langVideoSrcI } = this.state;

    return (
      <>
        <LangNavbar />
        <div className="languageContainer">
          <div className="languageTitle">
            <Row>
              <Col md="4" className="levelInd">
                <h1
                  style={{
                    color: "rgba(0, 46, 102, 0.8)",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                >
                  Intermediet Level
                </h1>
              </Col>
              <Col md="8">
                <Row className="frontList">
                  <Col md="8">
                    <h1>
                      <a className="list" href="#vocTtl4">
                        English Vocabulary
                      </a>
                    </h1>
                    <h1>
                      <a
                        className="list1"
                        href="#vocTtl4"
                        style={{
                          color: "rgba(0, 46, 102, 0.8)",
                          backgroundColor: "white",
                          borderRadius: "5px",
                        }}
                      >
                        Grammar
                      </a>
                    </h1>
                    <h1>
                      <a
                        className="list2"
                        href="#vocTtl4a"
                        style={{
                          color: "rgba(0, 46, 102, 0.8)",
                          backgroundColor: "white",
                          borderRadius: "5px",
                        }}
                      >
                        Self Test
                      </a>
                    </h1>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="langHeaderContainer">
            <div className="content-center">
              {/* <h1 className="slogan">Advanced Level</h1>
              <div className="listContainer">
                <a className="list1" href="#vocTtl">
                  English Vocabulary
                </a>
                <a className="list2" href="#tensTtl">
                  Types of Tences
                </a>
                <a className="list3" href="#testTtl">
                  Self Test
                </a>
              </div> */}
              <h4 className="shegaLangLang">Shega Entertainment</h4>
            </div>
          </div>

          <div className="languageCards">
            <Container>
              <div className="vocabularyContainer">
                <h2 className="vocTtl" id="vocTtl">{`${this.state.vocI}`}</h2>
                <div className="vocabulary">
                  <div className="vocBody">
                    <div className="rightSide">
                      <h2 className="vocEngDisplay">
                        {`${this.state.englishI}`}
                      </h2>
                      <h2 className="vocAmDisplay">
                        {`${this.state.amharicI}`}
                      </h2>
                      <audio controls>
                        <source src={Audio1I} type="audio/mpeg" />
                      </audio>
                    </div>
                    <div className="leftSide">
                      <h2 className="vocEnglish">English</h2>
                      <h2 className="vocAmharic">አማርኛ</h2>
                      <h2 className="pronounce">Pronounce</h2>
                    </div>
                  </div>
                  <div>
                    <Button className="prevVoc" onClick={this.prevVocHandleI}>
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button className="nextVoc" onClick={this.nextVocHandleI}>
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="tenseContainer">
                <h2
                  className="tensTtl"
                  id="tensTtl"
                >{`${this.state.tensI}`}</h2>
                <div className="tense">
                  <div className="tensBody">
                    <div className="rightSide">
                      <h2 className="tenstypeDisplay">{`${this.state.tenseTypeI}`}</h2>
                      <h2 className="tensStructureDisplay">{`${this.state.structureI}`}</h2>
                      <h2 className="tensEgDisplay">{`${this.state.tenseExampleI}`}</h2>
                    </div>
                    <div className="leftSide">
                      <h2 className="tensType">Tense Type</h2>
                      <h2 className="structure">Structure</h2>
                      <h2 className="tensExample">Example</h2>
                    </div>
                  </div>
                  <div>
                    <Button className="prevTens" onClick={this.prevTensHandleI}>
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button className="nextTens" onClick={this.nextTensHandleI}>
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="tenseContainer">
                <h2
                  className="langVideoTitle"
                  id="langVideoTitle"
                >{`${this.state.langVideoTitleI}`}</h2>
                <div className="tense">
                  <div className="langVideoBody">
                    <iframe
                      title="firstVideo"
                      src={`${langVideoSrcI}`}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div>
                    <Button
                      className="prevTens"
                      onClick={this.prevlangVideoHandleI}
                    >
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="nextTens"
                      onClick={this.nextlangVideoHandleI}
                    >
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="testContainer">
                <h2 className="testTtl" id="testTtl">{`${this.state.excI}`}</h2>
                <div className="test">
                  <div className="testBody">
                    <div className="rightSide">
                      <h2 className="questionDisplay">{`${this.state.dispQnI}`}</h2>
                      <h2 className="answerDisplay">{`${this.state.dispAnsI}`}</h2>
                    </div>
                    <div className="leftSide">
                      <h2>
                        <Button className="qn" onClick={this.displayQnI}>
                          Qn
                        </Button>
                      </h2>
                      <Button className="ans" onClick={this.displayAnsI}>
                        Ans
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Button className="prevTest" onClick={this.prevTestHandleI}>
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button className="nextTest" onClick={this.nextTestHandleI}>
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

export default Intermediet;
