import React from "react";
import "../Language.css";
import Audio1X from "../../../../assets/mp3/sound1.mp3";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { createStore } from "redux";

// core components
import Footer from "../../footer/Footer";
import LangNavbar from "../../navbars/LangNavbar";

function vocLangX(state = 0, action) {
  switch (action.type) {
    case "INCREMENTX":
      return state + 1;
    case "DECREMENTX":
      return state - 1;
    default:
      return state;
  }
}
let vocStoreX = createStore(vocLangX);
///////////////////tens////////////////////////
function tensLangX(stateAX = 0, action) {
  switch (action.type) {
    case "INCREMENTAX":
      return stateAX + 1;
    case "DECREMENTAX":
      return stateAX - 1;
    default:
      return stateAX;
  }
}
let tensStoreX = createStore(tensLangX);
///////////////////test////////////////////////
function testLangX(stateWX = 0, action) {
  switch (action.type) {
    case "INCREMENTWX":
      return stateWX + 1;
    case "DECREMENTWX":
      return stateWX - 1;
    default:
      return stateWX;
  }
}
let storeTestX = createStore(testLangX);
///////////////////video////////////////////////
function videoLangX(stateWX = 0, action) {
  switch (action.type) {
    case "INCREMENTWX":
      return stateWX + 1;
    case "DECREMENTWX":
      return stateWX - 1;
    default:
      return stateWX;
  }
}
let storeVideoX = createStore(videoLangX);
///////////////////////////////////////////
const dataBoxX = {
  vocabX: [
    {
      englishX: "Ambitious",
      amharicX: "ጉጉ",
    },
    {
      englishX: "Extraordinary",
      amharicX: "እጅግ ጎበዝ",
    },
    {
      englishX: "Soulful",
      amharicX: "ጥልቅ ስሜት",
    },
    {
      englishX: "Relative",
      amharicX: "ዘመድ",
    },
  ],
  tensX: [
    {
      tenseTypeX: "Past Tense",
      structureX: "S + V3 + O",
      tenseExampleX: "I saw her",
    },
    {
      tenseTypeX: "Past Tense2",
      structureX: "S + V3 + O",
      tenseExampleX: "I saw her",
    },
    {
      tenseTypeX: "Past Tense3",
      structureX: "S + V3 + O",
      tenseExampleX: "I saw her",
    },
    {
      tenseTypeX: "Past Tense4",
      structureX: "S + V3 + O",
      tenseExampleX: "I saw her",
    },
  ],
  vidX: [
    { urlX: "https://www.youtube.com/embed/UyXqP3TklFc" },
    { urlX: "https://www.youtube.com/embed/ZDv9njERj0s" },
    { urlX: "https://www.youtube.com/embed/FfhZFRvmaVY" },
    { urlX: "https://www.youtube.com/embed/TR0JZiapxXM" },
  ],
  testX: [
    { testX: "what is the meaning of destiny?", answerX: "መዳረሻ" },
    { testX: "what is the meaning of destiny?2", answerX: "መዳረሻ2" },
    { testX: "what is the meaning of destiny?3", answerX: "መዳረሻ3" },
    { testX: "what is the meaning of destiny?4", answerX: "መዳረሻ4" },
  ],
};

class Advanced extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vocX: "Vocabulary",
      tensX: "Sentences",
      excX: "Exercice",
      englishX: "Delicious",
      amharicX: "ጣፋጭ",
      tenseTypeX: "Past Tense",
      structureX: "S + V3 + O",
      tenseExampleX: "I saw her",
      testX: "what is the meaning of destiny?",
      answerX: "መዳረሻ",
      dispQnX: "Click Qn to Start the test",
      dispAnsX: "",
      langVideoTitleX: "Tutorial Video",
      langVideoSrcX: "https://www.youtube.com/embed/HQSfLNnzpRk",
    };
  }

  nextVocHandleX = () => {
    this.setState({
      englishX: dataBoxX.vocabX[vocStoreX.getState()].englishX,
    });
    this.setState({
      amharicX: dataBoxX.vocabX[vocStoreX.getState()].amharicX,
    });

    if (vocStoreX.getState() < 3) {
      vocStoreX.dispatch({ type: "INCREMENTX" });
    }
  };

  prevVocHandleX = () => {
    this.setState({
      englishX: dataBoxX.vocabX[vocStoreX.getState()].englishX,
    });
    this.setState({
      amharicX: dataBoxX.vocabX[vocStoreX.getState()].amharicX,
    });
    if (vocStoreX.getState() > 0) {
      vocStoreX.dispatch({ type: "DECREMENTX" });
    }
  };
  ///////////////////Tense/////////////////////////
  nextTensHandleX = () => {
    this.setState({
      tenseTypeX: dataBoxX.tensX[tensStoreX.getState()].tenseTypeX,
    });
    this.setState({
      structureX: dataBoxX.tensX[tensStoreX.getState()].structureX,
    });
    this.setState({
      tenseExampleX: dataBoxX.tensX[tensStoreX.getState()].tenseExampleX,
    });

    if (tensStoreX.getState() < 3) {
      tensStoreX.dispatch({ type: "INCREMENTAX" });
    }
  };

  prevTensHandleX = () => {
    this.setState({
      tenseTypeX: dataBoxX.tensX[tensStoreX.getState()].tenseTypeX,
    });
    this.setState({
      structureX: dataBoxX.tensX[tensStoreX.getState()].structureX,
    });
    this.setState({
      tenseExampleX: dataBoxX.tensX[tensStoreX.getState()].tenseExampleX,
    });
    if (tensStoreX.getState() > 0) {
      tensStoreX.dispatch({ type: "DECREMENTAX" });
    }
  };
  /////////////////////Exercise//////////////////////////////////
  nextTestHandleX = () => {
    this.setState({ testX: dataBoxX.testX[storeTestX.getState()].testX });
    this.setState({ answerX: dataBoxX.testX[storeTestX.getState()].answerX });
    this.setState({ dispQnX: "Click Qn to see the next question" });
    this.setState({ dispAnsX: "" });

    if (storeTestX.getState() < 3) {
      storeTestX.dispatch({ type: "INCREMENTWX" });
    }
  };

  prevTestHandleX = () => {
    this.setState({ testX: dataBoxX.testX[storeTestX.getState()].testX });
    this.setState({ answerX: dataBoxX.testX[storeTestX.getState()].answerX });
    this.setState({ dispQnX: "Click Qn to see the previous question" });
    this.setState({ dispAnsX: "" });

    if (storeTestX.getState() > 0) {
      storeTestX.dispatch({ type: "DECREMENTWX" });
    }
  };

  displayQnX = () => {
    this.setState({ dispQnX: this.state.testX });
    this.setState({ dispAnsX: "Click Ans to see the answer" });
  };
  displayAnsX = () => {
    this.setState({ dispAnsX: this.state.answerX });
  };
  /////////////////////////////////////////////////////////////
  /////////////////////Video//////////////////////////////////
  nextlangVideoHandleX = () => {
    this.setState({
      langVideoSrcX: dataBoxX.vidX[storeVideoX.getState()].urlX,
    });

    if (storeVideoX.getState() < 3) {
      storeVideoX.dispatch({ type: "INCREMENTWX" });
    }
  };

  prevlangVideoHandleX = () => {
    this.setState({
      langVideoSrcX: dataBoxX.vidX[storeVideoX.getState()].urlX,
    });
    if (storeVideoX.getState() > 0) {
      storeVideoX.dispatch({ type: "DECREMENTWX" });
    }
  };
  /////////////////////////////////////////////////////////////////////

  render() {
    const { langVideoSrcX } = this.state;

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
                  Advanced Level
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
                <h2 className="vocTtl" id="vocTtl">{`${this.state.vocX}`}</h2>
                <div className="vocabulary">
                  <div className="vocBody">
                    <div className="rightSide">
                      <h2 className="vocEngDisplay">
                        {`${this.state.englishX}`}
                      </h2>
                      <h2 className="vocAmDisplay">
                        {`${this.state.amharicX}`}
                      </h2>
                      <audio controls>
                        <source src={Audio1X} type="audio/mpeg" />
                      </audio>
                    </div>
                    <div className="leftSide">
                      <h2 className="vocEnglish">English</h2>
                      <h2 className="vocAmharic">አማርኛ</h2>
                      <h2 className="pronounce">Pronounce</h2>
                    </div>
                  </div>
                  <div>
                    <Button className="prevVoc" onClick={this.prevVocHandleX}>
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button className="nextVoc" onClick={this.nextVocHandleX}>
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="tenseContainer">
                <h2
                  className="tensTtl"
                  id="tensTtl"
                >{`${this.state.tensX}`}</h2>
                <div className="tense">
                  <div className="tensBody">
                    <div className="rightSide">
                      <h2 className="tenstypeDisplay">{`${this.state.tenseTypeX}`}</h2>
                      <h2 className="tensStructureDisplay">{`${this.state.structureX}`}</h2>
                      <h2 className="tensEgDisplay">{`${this.state.tenseExampleX}`}</h2>
                    </div>
                    <div className="leftSide">
                      <h2 className="tensType">Tense Type</h2>
                      <h2 className="structure">Structure</h2>
                      <h2 className="tensExample">Example</h2>
                    </div>
                  </div>
                  <div>
                    <Button className="prevTens" onClick={this.prevTensHandleX}>
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button className="nextTens" onClick={this.nextTensHandleX}>
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="tenseContainer">
                <h2
                  className="langVideoTitle"
                  id="langVideoTitle"
                >{`${this.state.langVideoTitleX}`}</h2>
                <div className="tense">
                  <div className="langVideoBody">
                    <iframe
                      title="firstVideo"
                      src={`${langVideoSrcX}`}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div>
                    <Button
                      className="prevTens"
                      onClick={this.prevlangVideoHandleX}
                    >
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="nextTens"
                      onClick={this.nextlangVideoHandleX}
                    >
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="testContainer">
                <h2 className="testTtl" id="testTtl">{`${this.state.excX}`}</h2>
                <div className="test">
                  <div className="testBody">
                    <div className="rightSide">
                      <h2 className="questionDisplay">{`${this.state.dispQnX}`}</h2>
                      <h2 className="answerDisplay">{`${this.state.dispAnsX}`}</h2>
                    </div>
                    <div className="leftSide">
                      <h2>
                        <Button className="qn" onClick={this.displayQnX}>
                          Qn
                        </Button>
                      </h2>
                      <Button className="ans" onClick={this.displayAnsX}>
                        Ans
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Button className="prevTest" onClick={this.prevTestHandleX}>
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button className="nextTest" onClick={this.nextTestHandleX}>
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

export default Advanced;
