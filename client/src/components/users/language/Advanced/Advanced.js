import React from "react";
import "../Language.css";
// import "./Advanced.css";
import Audio1X from "../../../../assets/mp3/adv/insular.mp3";
import Audio2X from "../../../../assets/mp3/adv/aberattion.mp3";
import Audio3X from "../../../../assets/mp3/adv/abhor.mp3";
import Audio4X from "../../../../assets/mp3/adv/acquiece.mp3";
import Audio5X from "../../../../assets/mp3/adv/alacrity.mp3";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { createStore } from "redux";

// core components
import Footer from "../../footer/Footer";
import LangNavbar2 from "../../navbars/LangNavbar2";

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
      Word: "aberration",
      Translation: "deviance",
      Sound: Audio2X,
    },
    {
      Word: "abhor",
      Translation: "abominate",
      Sound: Audio3X,
    },
    {
      Word: "acquiesce",
      Translation: "agree",
      Sound: Audio4X,
    },
    {
      Word: "alacrity",
      Translation: "smartness",
      Sound: Audio5X,
    },
    {
      Word: "appease",
      Translation: "propitiate",
      Sound: "",
    },
    {
      Word: "amiable",
      Translation: "cordial",
      Sound: "",
    },
    {
      Word: "arcane",
      Translation: "esoteric",
      Sound: "",
    },
    {
      Word: "brazen",
      Translation: "audacious",
      Sound: "",
    },
    {
      Word: "brusque",
      Translation: "snippy",
      Sound: "",
    },
    {
      Word: "cajole",
      Translation: "blamey",
      Sound: "",
    },
    {
      Word: "callous",
      Translation: "indurate",
      Sound: "",
    },
    {
      Word: "candor",
      Translation: "honest",
      Sound: "",
    },
    {
      Word: "chide",
      Translation: "scold",
      Sound: "",
    },
    {
      Word: "circumspect",
      Translation: "discreet",
      Sound: "",
    },
    {
      Word: "coerce",
      Translation: "force",
      Sound: "",
    },
    {
      Word: "coherent",
      Translation: "ordered",
      Sound: "",
    },
    {
      Word: "complacency",
      Translation: "self-satisfaction",
      Sound: "",
    },
    {
      Word: "confidant",
      Translation: "intimate",
      Sound: "",
    },
    {
      Word: "cumulative",
      Translation: "additive",
      Sound: "",
    },
    {
      Word: "debase",
      Translation: "corrupt",
      Sound: "",
    },
    {
      Word: "decry",
      Translation: "condemn",
      Sound: "",
    },
    {
      Word: "demure",
      Translation: "coy",
      Sound: "",
    },
    {
      Word: "despot",
      Translation: "cruel ",
      Sound: "",
    },
    {
      Word: "diligent",
      Translation: "persevering",
      Sound: "",
    },
    {
      Word: "elated",
      Translation: "joyful",
      Sound: "",
    },
    {
      Word: "eloquent",
      Translation: "fluent",
      Sound: "",
    },
    {
      Word: "empathy",
      Translation: "sympathy",
      Sound: "",
    },
    {
      Word: "extol",
      Translation: "praise",
      Sound: "",
    },
    {
      Word: "forsake",
      Translation: "abandon",
      Sound: "",
    },
    {
      Word: "furtive",
      Translation: "secret",
      Sound: "",
    },
    {
      Word: "gratuitous",
      Translation: "unnecessary",
      Sound: "",
    },
    {
      Word: "haughty",
      Translation: "arrogant",
      Sound: "",
    },
    {
      Word: "impeccable",
      Translation: "without fault",
      Sound: "",
    },
    {
      Word: "impertinent",
      Translation: "fresh",
      Sound: "",
    },
    {
      Word: "inept",
      Translation: "ineffectual",
      Sound: "",
    },
    {
      Word: "infamy",
      Translation: "dishonor",
      Sound: "",
    },
    {
      Word: "inhibit",
      Translation: "limit",
      Sound: "",
    },
    {
      Word: "innate",
      Translation: "hereditary",
      Sound: "",
    },
    {
      Word: "insatiable",
      Translation: "impossible",
      Sound: "",
    },
    {
      Word: "insular",
      Translation: "restricted",
      Sound: Audio1X,
    },
  ],
  tensX: [
    {
      Grammar: "Compound subject",
      Form: "conjunction joints of simple subjects ",
      Example: "Cheetahs and lions travel in prides. ",
    },
    {
      Grammar: "Compound predicate",
      Form: "Verbs or verb phrases having the same subject. ",
      Example: "Hyenas sometimes watch and follow the big cats.",
    },
    {
      Grammar: "Complex Sentences",
      Form: "Compound subject and a compound predicate ",
      Example:
        "The students and their parents stood and applauded the speaker.",
    },
    {
      Grammar: "Object complement",
      Form: "Direct Object + Complemet [Pro(Noun)/Adjective]",
      Example: "Dad makes common courtesy mandatory ",
    },
    {
      Grammar: "Predicate nominative",
      Form: "Nouns describes the subject",
      Example: "My neighbor is a plumber.",
    },
    {
      Grammar: "Predicate adjective",
      Form: "Adjective describes the subject ",
      Example: "Gail feels confident about the test.",
    },
    {
      Grammar: "declarative sentence",
      Form: "Statement ends with a period ",
      Example: "The eggs are in the refrigerator.",
    },
    {
      Grammar: "imperative sentence",
      Form: "Command or request",
      Example: "Bring me the eggs from the refrigerator.",
    },
    {
      Grammar: "interrogative sentence",
      Form: "Question ",
      Example: "Will you bring me the eggs? ",
    },
    {
      Grammar: "Exclamatory sentence",
      Form: "Strong emotion ",
      Example: "Bring me the eggs now!",
    },
    {
      Grammar: "Conditional Sentence Type 1",
      Form: "if + Simple Present, will-Future",
      Example: "If I find her address, I’ll send her an invitation.",
    },
    {
      Grammar: "Conditional Sentence Type 2",
      Form: "if + Simple Past, Conditional I(= would Participle) ",
      Example: "If I found her address, I would send her an invitation.",
    },
    {
      Grammar: "Conditional Sentence Type 3",
      Form:
        "if + Past Perfect, Conditional II(= would + have + Past Participle)",
      Example:
        "If I had found her address, I would have sent her an invitation.",
    },
  ],
  vidX: [
    { urlX: "https://www.youtube.com/embed/UyXqP3TklFc" },
    { urlX: "https://www.youtube.com/embed/ZDv9njERj0s" },
    { urlX: "https://www.youtube.com/embed/FfhZFRvmaVY" },
    { urlX: "https://www.youtube.com/embed/TR0JZiapxXM" },
  ],
  testX: [
    {
      questionX: "Where ___ he live?",
      alternativesX: "a) on  b) to  c)	of",
      answerX: "Answer: c)	of",
    },
    {
      questionX: "John doesn't come ____ the afternoon.",
      alternativesX: "a)	on b)	in  c)	at ",
      answerX: "Answer: b)	in",
    },
    {
      questionX: "She saw me ____.",
      alternativesX: "a)	last Friday b)	the last Friday",
      answerX: "Answer: a)	last Friday",
    },
    {
      questionX: "I saw it ___ the television.",
      alternativesX: "a)	inb)	at c)	on",
      answerX: "Answer: c)	on",
    },
    {
      questionX:
        "The Ebola virus _______ thousands of people since its outbreak.",
      alternativesX: "A.	Killed B.	Has killed C.	Will kill  D.	Is killed  ",
      answerX: "Answer: B.	Has killed",
    },
  ],
};

class Advanced extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vocX: "Vocabulary",
      tensX: "Grammar",
      excX: "Exercice",
      englishX: "insular",
      amharicX: "restricted",
      soundX: Audio1X,
      tenseTypeX: "imperative sentence",
      structureX: "Command or request",
      tenseExampleX: "Bring me the eggs from the refrigerator.",
      questionX:
        "The Ebola virus _______ thousands of people since its outbreak.",
      alternativesX: "A.	Killed B.	Has killed C.	Will kill  D.	Is killed",
      answerX: "Answer: B.	Has killed",
      dispQnX: "Click Qn to Start the test",
      dispAnsX: "",
      langVideoTitleX: "Tutorial Video",
      langVideoSrcX: "https://www.youtube.com/embed/HQSfLNnzpRk",
    };
  }

  nextVocHandleX = () => {
    this.setState({
      englishX: dataBoxX.vocabX[vocStoreX.getState()].Word,
      amharicX: dataBoxX.vocabX[vocStoreX.getState()].Translation,
    });
    this.setState(
      { soundX: dataBoxX.vocabX[vocStoreX.getState()].Sound },
      function () {
        this.refs.audio.pause();
        this.refs.audio.load();
      }
    );

    if (vocStoreX.getState() < dataBoxX.vocabX.length - 1) {
      vocStoreX.dispatch({ type: "INCREMENTX" });
    }
  };

  prevVocHandleX = () => {
    this.setState({
      englishX: dataBoxX.vocabX[vocStoreX.getState()].Word,
      amharicX: dataBoxX.vocabX[vocStoreX.getState()].Translation,
    });
    this.setState(
      { soundX: dataBoxX.vocabX[vocStoreX.getState()].Sound },
      function () {
        this.refs.audio.pause();
        this.refs.audio.load();
      }
    );
    if (vocStoreX.getState() > 0) {
      vocStoreX.dispatch({ type: "DECREMENTX" });
    }
  };
  ///////////////////Tense/////////////////////////
  nextTensHandleX = () => {
    this.setState({
      tenseTypeX: dataBoxX.tensX[tensStoreX.getState()].Grammar,
    });
    this.setState({
      structureX: dataBoxX.tensX[tensStoreX.getState()].Form,
    });
    this.setState({
      tenseExampleX: dataBoxX.tensX[tensStoreX.getState()].Example,
    });

    if (tensStoreX.getState() < dataBoxX.tensX.length - 1) {
      tensStoreX.dispatch({ type: "INCREMENTAX" });
    }
  };

  prevTensHandleX = () => {
    this.setState({
      tenseTypeX: dataBoxX.tensX[tensStoreX.getState()].Grammar,
    });
    this.setState({
      structureX: dataBoxX.tensX[tensStoreX.getState()].Form,
    });
    this.setState({
      tenseExampleX: dataBoxX.tensX[tensStoreX.getState()].Example,
    });
    if (tensStoreX.getState() > 0) {
      tensStoreX.dispatch({ type: "DECREMENTAX" });
    }
  };
  /////////////////////Exercise//////////////////////////////////
  nextTestHandleX = () => {
    this.setState({
      questionX: dataBoxX.testX[storeTestX.getState()].questionX,
    });
    this.setState({
      alternativesX: dataBoxX.testX[storeTestX.getState()].alternativesX,
    });
    this.setState({ answerX: dataBoxX.testX[storeTestX.getState()].answerX });
    this.setState({ dispQnX: "Click Qn to see the next question" });
    this.setState({ dispAnsX: "" });
    this.setState({ dispAltX: "" });

    if (storeTestX.getState() < dataBoxX.testX.length - 1) {
      storeTestX.dispatch({ type: "INCREMENTWX" });
    }
  };

  prevTestHandleX = () => {
    this.setState({
      questionX: dataBoxX.testX[storeTestX.getState()].questionX,
    });
    this.setState({
      alternativesX: dataBoxX.testX[storeTestX.getState()].alternativesX,
    });
    this.setState({ answerX: dataBoxX.testX[storeTestX.getState()].answerX });
    this.setState({ dispQnX: "Click Qn to see the previous question" });
    this.setState({ dispAnsX: "" });
    this.setState({ dispAltX: "" });

    if (storeTestX.getState() > 0) {
      storeTestX.dispatch({ type: "DECREMENTWX" });
    }
  };

  displayQnX = () => {
    this.setState({ dispQnX: this.state.questionX });
    this.setState({ dispAltX: this.state.alternativesX });
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
        <LangNavbar2 />
        <div className="languageContainer">
          <Container>
            <div className="languageTitle">
              <Row>
                <Col xs="4" className="levelInd">
                  <h1 className="advancedLevel">Advanced Level</h1>
                </Col>
                <Col xs="8">
                  <Row className="frontList">
                    <Col xs="10">
                      <h1>
                        <a className="list" href="#vocTtl">
                          Vocabulary
                        </a>
                      </h1>
                      <h1>
                        <a className="list1" href="#tensTtl">
                          Grammar
                        </a>
                      </h1>
                      <h1>
                        <a className="list2" href="#testTtl">
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
              <div className="vocabularyContainer">
                <h2 className="vocTtl" id="vocTtl">{`${this.state.vocX}`}</h2>
                <div className="vocabulary">
                  <div className="vocBody">
                    {/* <div className="vocTop">
                      <div className="lSide">
                        <h2 className="vocEnglish">English</h2>
                      </div>
                      <div className="rSide">
                        <h2 className="vocEngDisplay">
                          {`${this.state.englishX}`}
                        </h2>
                      </div>
                    </div>
                    <div className="vocMid">
                      <div className="lSide">
                        <h2 className="vocAmharic">አማርኛ</h2>
                      </div>
                      <div className="rSide">
                        <h2 className="vocAmDisplay">
                          {`${this.state.amharicX}`}
                        </h2>
                      </div>
                    </div>
                    <div className="vocBottom">
                      <div className="lSide">
                        <h2 className="pronounce">Sound</h2>
                      </div>
                      <div className="rSide">
                        <audio controls ref="audio">
                          <source
                            src={`${this.state.soundX}`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                    </div> */}
                    <div className="rightSide">
                      <h2 className="vocEngDisplay">
                        {`${this.state.englishX}`}
                      </h2>
                      <h2 className="vocAmDisplay">
                        {`${this.state.amharicX}`}
                      </h2>
                      <audio controls ref="audio">
                        <source
                          src={`${this.state.soundX}`}
                          type="audio/mpeg"
                        />
                      </audio>
                    </div>
                    <div className="leftSide">
                      <h2 className="vocEnglish">Word</h2>
                      <h2 className="vocAmharic">Translation</h2>
                      <h2 className="sound">Sound</h2>
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
                      <h2 className="tensType">Grammar</h2>
                      <h2 className="structure">Form</h2>
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
                      <h2 className="alternativesDisplay">{`${this.state.dispAltX}`}</h2>
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
            </div>
          </Container>
          <Footer />
        </div>
      </>
    );
  }
}

export default Advanced;
