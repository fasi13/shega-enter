import React from "react";
import "../Language.css";
import Audio1 from "../../../../assets/mp3/sound1.mp3";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { createStore } from "redux";
import ReactDatatable from "@ashvin27/react-datatable";

// core components
import Footer from "../../footer/Footer";
import LangNavbar from "../../navbars/LangNavbar";

function vocLang(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
let vocStore = createStore(vocLang);
///////////////////tens////////////////////////
function tensLang(stateA = 0, action) {
  switch (action.type) {
    case "INCREMENTA":
      return stateA + 1;
    case "DECREMENTA":
      return stateA - 1;
    default:
      return stateA;
  }
}
let tensStore = createStore(tensLang);
///////////////////test////////////////////////
function testLang(stateW = 0, action) {
  switch (action.type) {
    case "INCREMENTW":
      return stateW + 1;
    case "DECREMENTW":
      return stateW - 1;
    default:
      return stateW;
  }
}
let storeTest = createStore(testLang);
///////////////////video////////////////////////
function videoLang(stateW = 0, action) {
  switch (action.type) {
    case "INCREMENTW":
      return stateW + 1;
    case "DECREMENTW":
      return stateW - 1;
    default:
      return stateW;
  }
}
let storeVideo = createStore(videoLang);
///////////////////////////////////////////
const dataBox = {
  vocab: [
    {
      english: "Ambitious",
      amharic: "ጉጉ",
    },
    {
      english: "Extraordinary",
      amharic: "እጅግ ጎበዝ",
    },
    {
      english: "Soulful",
      amharic: "ጥልቅ ስሜት",
    },
    {
      english: "Relative",
      amharic: "ዘመድ",
    },
  ],
  tens: [
    {
      tenseType: "Past Tense",
      structure: "S + V3 + O",
      tenseExample: "I saw her",
    },
    {
      tenseType: "Past Tense2",
      structure: "S + V3 + O",
      tenseExample: "I saw her",
    },
    {
      tenseType: "Past Tense3",
      structure: "S + V3 + O",
      tenseExample: "I saw her",
    },
    {
      tenseType: "Past Tense4",
      structure: "S + V3 + O",
      tenseExample: "I saw her",
    },
  ],
  vid: [
    { url: "https://www.youtube.com/embed/ZmUm29fc6nI" },
    { url: "https://www.youtube.com/embed/AVYfyTvc9KY" },
    { url: "https://www.youtube.com/embed/RUNj1jAouHA" },
    { url: "https://www.youtube.com/embed/Nd4MScADY94" },
  ],
  test: [
    { test: "what is the meaning of destiny?", answer: "መዳረሻ" },
    { test: "what is the meaning of destiny?2", answer: "መዳረሻ2" },
    { test: "what is the meaning of destiny?3", answer: "መዳረሻ3" },
    { test: "what is the meaning of destiny?4", answer: "መዳረሻ4" },
  ],
};

class Beginner extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        key: "english",
        text: "English",
        // className: "name",
        align: "left",
        sortable: false,
      },
      {
        key: "amharic",
        text: "አማርኛ",
        // className: "name",
        align: "left",
        sortable: false,
      },
      // {
      //   key: "pronounce",
      //   text: "Pronounce",
      //   className: "name",
      //   align: "left",
      //   sortable: false,
      // },
    ];
    this.state = {
      preRec: [],
      voc: "Vocabulary",
      tens: "Sentences",
      exc: "Exercice",
      english: "Delicious",
      amharic: "ጣፋጭ",
      tenseType: "Past Tense",
      structure: "S + V3 + O",
      tenseExample: "I saw her",
      test: "what is the meaning of destiny?",
      answer: "መዳረሻ",
      dispQn: "Click Qn to Start the test",
      dispAns: "",
      langVideoTitle: "Tutorial Video",
      langVideoSrc: "https://www.youtube.com/embed/ZmUm29fc6nI",
      records: [
        {
          english: "Relative",
          amharic: "ዘመድ",
        },
      ],
    };
  }

  nextVocHandle = () => {
    this.setState({
      english: dataBox.vocab[vocStore.getState()].english,
      records: dataBox.vocab,
    });
    // console.log(vocStore.getState(), this.state.records);
    this.setState({
      amharic: dataBox.vocab[vocStore.getState()].amharic,
      // records: this.state.amharic,
    });
    if (vocStore.getState() < 3) {
      vocStore.dispatch({ type: "INCREMENT" });
    }
  };

  prevVocHandle = () => {
    this.setState({
      english: dataBox.vocab[vocStore.getState()].english,
    });
    this.setState({
      amharic: dataBox.vocab[vocStore.getState()].amharic,
    });
    if (vocStore.getState() > 0) {
      vocStore.dispatch({ type: "DECREMENT" });
    }
  };
  ///////////////////Tense/////////////////////////
  nextTensHandle = () => {
    this.setState({ tenseType: dataBox.tens[tensStore.getState()].tenseType });
    this.setState({ structure: dataBox.tens[tensStore.getState()].structure });
    this.setState({
      tenseExample: dataBox.tens[tensStore.getState()].tenseExample,
    });

    if (tensStore.getState() < 3) {
      tensStore.dispatch({ type: "INCREMENTA" });
    }
  };

  prevTensHandle = () => {
    this.setState({ tenseType: dataBox.tens[tensStore.getState()].tenseType });
    this.setState({ structure: dataBox.tens[tensStore.getState()].structure });
    this.setState({
      tenseExample: dataBox.tens[tensStore.getState()].tenseExample,
    });
    if (tensStore.getState() > 0) {
      tensStore.dispatch({ type: "DECREMENTA" });
    }
  };
  /////////////////////Exercise//////////////////////////////////
  nextTestHandle = () => {
    this.setState({ test: dataBox.test[storeTest.getState()].test });
    this.setState({ answer: dataBox.test[storeTest.getState()].answer });
    this.setState({ dispQn: "Click Qn to see the next question" });
    this.setState({ dispAns: "" });

    if (storeTest.getState() < 3) {
      storeTest.dispatch({ type: "INCREMENTW" });
    }
  };

  prevTestHandle = () => {
    this.setState({ test: dataBox.test[storeTest.getState()].test });
    this.setState({ answer: dataBox.test[storeTest.getState()].answer });
    this.setState({ dispQn: "Click Qn to see the previous question" });
    this.setState({ dispAns: "" });

    if (storeTest.getState() > 0) {
      storeTest.dispatch({ type: "DECREMENTW" });
    }
  };

  displayQn = () => {
    this.setState({ dispQn: this.state.test });
    this.setState({ dispAns: "Click Ans to see the answer" });
  };
  displayAns = () => {
    this.setState({ dispAns: this.state.answer });
  };
  /////////////////////////////////////////////////////////////
  /////////////////////Video//////////////////////////////////
  nextlangVideoHandle = () => {
    this.setState({ langVideoSrc: dataBox.vid[storeVideo.getState()].url });
    console.log(this.state.langVideoSrc);
    if (storeVideo.getState() < 3) {
      storeVideo.dispatch({ type: "INCREMENTW" });
    }
  };

  prevlangVideoHandle = () => {
    this.setState({ langVideoSrc: dataBox.vid[storeVideo.getState()].url });
    if (storeVideo.getState() > 0) {
      storeVideo.dispatch({ type: "DECREMENTW" });
    }
  };
  /////////////////////////////////////////////////////////////////////

  render() {
    const { langVideoSrc } = this.state;

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
                  Beginner Level
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
              {/* <h1 className="slogan">Beginner Level</h1>
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
                <h2 className="vocTtl" id="vocTtl">{`${this.state.voc}`}</h2>
                <div className="vocabulary">
                  <div className="vocBody">
                    {/* <div className="bodyContainer">
                      <div className="topSide">
                        <div className="leftSideN">
                          <h2 className="rightSideN">English</h2>
                        </div>
                        <div className="rightSideN">
                          <h2 className="vocEngDisplay">
                            {`${this.state.english}`}
                          </h2>
                        </div>
                      </div>
                      <div className="lowSide">
                        <div className="leftSideN">
                          <h2 className="vocAmharic">አማርኛ</h2>
                        </div>
                        <div className="rightSideN">
                          <h2 className="vocAmDisplay">
                            {`${this.state.amharic}`}
                          </h2>
                        </div>
                      </div>
                    </div> */}

                    <div className="rightSide">
                      {/* <ReactDatatable
                        // config={this.config}
                        records={this.state.records}
                        columns={this.columns}
                        // onPageChange={this.pageChange.bind(this)}
                      /> */}
                      <h2 className="vocEngDisplay">
                        {`${this.state.english}`}
                      </h2>
                      <h2 className="vocAmDisplay">
                        {`${this.state.amharic}`}
                      </h2>
                      <audio controls>
                        <source src={Audio1} type="audio/mpeg" />
                      </audio>
                    </div>
                    <div className="leftSide">
                      <h2 className="vocEnglish">English</h2>
                      <h2 className="vocAmharic">አማርኛ</h2>
                      <h2 className="pronounce">Pronounce</h2>
                    </div>
                  </div>
                  <div>
                    <Button className="prevVoc" onClick={this.prevVocHandle}>
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button className="nextVoc" onClick={this.nextVocHandle}>
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="tenseContainer">
                <h2 className="tensTtl" id="tensTtl">{`${this.state.tens}`}</h2>
                <div className="tense">
                  <div className="tensBody">
                    <div className="rightSide">
                      <h2 className="tenstypeDisplay">{`${this.state.tenseType}`}</h2>
                      <h2 className="tensStructureDisplay">{`${this.state.structure}`}</h2>
                      <h2 className="tensEgDisplay">{`${this.state.tenseExample}`}</h2>
                    </div>
                    <div className="leftSide">
                      <h2 className="tensType">Tense Type</h2>
                      <h2 className="structure">Structure</h2>
                      <h2 className="tensExample">Example</h2>
                    </div>
                  </div>
                  <div>
                    <Button className="prevTens" onClick={this.prevTensHandle}>
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button className="nextTens" onClick={this.nextTensHandle}>
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="tenseContainer">
                <h2
                  className="langVideoTitle"
                  id="langVideoTitle"
                >{`${this.state.langVideoTitle}`}</h2>
                <div className="tense">
                  <div className="langVideoBody">
                    <iframe
                      title="firstVideo"
                      src={`${langVideoSrc}`}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div>
                    <Button
                      className="prevTens"
                      onClick={this.prevlangVideoHandle}
                    >
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="nextTens"
                      onClick={this.nextlangVideoHandle}
                    >
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="testContainer">
                <h2 className="testTtl" id="testTtl">{`${this.state.exc}`}</h2>
                <div className="test">
                  <div className="testBody">
                    <div className="rightSide">
                      <h2 className="questionDisplay">{`${this.state.dispQn}`}</h2>
                      <h2 className="answerDisplay">{`${this.state.dispAns}`}</h2>
                    </div>
                    <div className="leftSide">
                      <h2>
                        <Button className="qn" onClick={this.displayQn}>
                          Qn
                        </Button>
                      </h2>
                      <Button className="ans" onClick={this.displayAns}>
                        Ans
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Button className="prevTest" onClick={this.prevTestHandle}>
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button className="nextTest" onClick={this.nextTestHandle}>
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

export default Beginner;
