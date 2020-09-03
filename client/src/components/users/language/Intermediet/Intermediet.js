import React from "react";
import "../Language.css";
// import "./Intermediet.css";
import Audio1I from "../../../../assets/mp3/int/cold.mp3";
import Audio2I from "../../../../assets/mp3/int/work.mp3";
import Audio3I from "../../../../assets/mp3/int/manager.mp3";
import Audio4I from "../../../../assets/mp3/int/supervisor.mp3";
import Audio5I from "../../../../assets/mp3/int/secratory.mp3";
import Audio6I from "../../../../assets/mp3/int/banker.mp3";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { createStore } from "redux";

// core components
import Footer from "../../footer/Footer";
import LangNavbar2 from "../../navbars/LangNavbar2";

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
let storequestionI = createStore(testLangI);
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
      Word: "Work",
      Translation: "ስራ",
      Sound: Audio2I,
    },
    {
      Word: "Manager",
      Translation: "ስራ አስኪያጅ",
      Sound: Audio3I,
    },
    {
      Word: "Supervisor",
      Translation: "ተቆጣጣሪ/አማካሪ",
      Sound: Audio4I,
    },
    {
      Word: "Secretary",
      Translation: "ጽሃፊ",
      Sound: Audio5I,
    },
    {
      Word: "Banker",
      Translation: "ባለ ባንክ",
      Sound: Audio6I,
    },
    {
      Word: "Salesman",
      Translation: "ሻጭ",
      Sound: "",
    },

    {
      Word: "Accountant",
      Translation: "የሂሳብ ባለሞያ",
      Sound: "",
    },
    {
      Word: "Cashier",
      Translation: "ገንዘብ ተቀባይ",
      Sound: "",
    },
    {
      Word: "Butcher",
      Translation: "ስጋ አራጅ",
      Sound: "",
    },
    {
      Word: "Baker",
      Translation: "ዳቦ ጋጋሪ",
      Sound: "",
    },
    {
      Word: "Doctor",
      Translation: "ዶክተር/ዋና ሀኪም",
      Sound: "",
    },
    {
      Word: "Nurse",
      Translation: "ነርስ/ሀኪም",
      Sound: "",
    },
    {
      Word: "Teacher",
      Translation: "መምህር",
      Sound: "",
    },
    {
      Word: "Astronomer",
      Translation: "የስነ ፈለክ ተመራማሪ",
      Sound: "",
    },
    {
      Word: "Archaeologist",
      Translation: "አርኪኦሎጂስት/ቅሬተአካል ተመራማሪ",
      Sound: "",
    },
    {
      Word: "Artist",
      Translation: "አርቲስት",
      Sound: "",
    },
    {
      Word: "Writer",
      Translation: "ጽሃፊ",
      Sound: "",
    },
    {
      Word: "Transportation",
      Translation: "መጓጓዣ",
      Sound: "",
    },
    {
      Word: "Walk",
      Translation: "መራመድ/እርምጃ",
      Sound: "",
    },
    {
      Word: "Taxi",
      Translation: "ታክሲ",
      Sound: "",
    },
    {
      Word: "Bus",
      Translation: "አውቶብስ",
      Sound: "",
    },
    {
      Word: "Train",
      Translation: "ባቡር",
      Sound: "",
    },
    {
      Word: "Airplane",
      Translation: "አውሮፕላን",
      Sound: "",
    },
    {
      Word: "Shopping",
      Translation: "ግብይት",
      Sound: "",
    },
    {
      Word: "Price",
      Translation: "ዋጋ",
      Sound: "",
    },
    {
      Word: "Change",
      Translation: "መልስ",
      Sound: "",
    },
    {
      Word: "Travel",
      Translation: "ጉዞ",
      Sound: "",
    },
    {
      Word: "Historical places",
      Translation: "ታሪካዊ ቦታዎች",
      Sound: "",
    },
    {
      Word: "Hiking",
      Translation: "ተራራ መውጣት",
      Sound: "",
    },
    {
      Word: "Swimming",
      Translation: "ዋና",
      Sound: "",
    },
    {
      Word: "Horse Ride",
      Translation: "ፈረስ ግልቢያ",
      Sound: "",
    },
    {
      Word: "Appearance",
      Translation: "አካላዊ አቁም",
      Sound: "",
    },
    {
      Word: "Beautiful",
      Translation: "የሴት ቆንጆ",
      Sound: "",
    },
    {
      Word: "Handsome",
      Translation: "የወንድ ቆንጆ",
      Sound: "",
    },
    {
      Word: "Pretty",
      Translation: "ቆንጆ",
      Sound: "",
    },
    {
      Word: "Ugly",
      Translation: "መልከ ጥፉ",
      Sound: "",
    },
    {
      Word: "Scary",
      Translation: "አስፈሪ",
      Sound: "",
    },
    {
      Word: "Sport",
      Translation: "ስፖርት",
      Sound: "",
    },
    {
      Word: "Football",
      Translation: "ኳስ ተጫዎች",
      Sound: "",
    },
    {
      Word: "Volley Ball",
      Translation: "የመረብ ኳስ",
      Sound: "",
    },
    {
      Word: "Tennis",
      Translation: "ቴኒስ ኳስ",
      Sound: "",
    },
    {
      Word: "Running",
      Translation: "ሯጭ",
      Sound: "",
    },
    {
      Word: "Boxing",
      Translation: "ቦክስ",
      Sound: "",
    },
    {
      Word: "Basket ball",
      Translation: "ቅርጫት ኳስ",
      Sound: "",
    },
    {
      Word: "Health",
      Translation: "ጤና",
      Sound: "",
    },
    {
      Word: "Head ache",
      Translation: "ራስ ምታት",
      Sound: "",
    },
    {
      Word: "Stomach ache",
      Translation: "የሆድ ህመም",
      Sound: "",
    },
    {
      Word: "Flu",
      Translation: "ሳል",
      Sound: "",
    },
    {
      Word: "Cold",
      Translation: "ጉንፋን",
      Sound: Audio1I,
    },
  ],
  tensI: [
    {
      Grammar: "Request/Complaints/Apologies",
      Form: "I am Afraid/Excuse me/I apologize",
      Example: "I’m afraid I have to make a complaint, excuse me, I apologize.",
    },
    {
      Grammar: "Expressing Likes",
      Form:
        "i like, I love, I adore, I’m crazy about, I’m mad about, I enjoy, keen on ",
      Example:
        "I love meeting new peoples. What makes me crazy about it is thier first impression",
    },
    {
      Grammar: "Expressing dislikes",
      Form:
        "I don’t like, i dislike, I hate, I abhor, I can’t near, I can’t stand, I detest ",
      Example: "I don’t like wasting time with guys who hates me",
    },
    {
      Grammar: "simple sentence",
      Form: "one complete subject + one complete predicate",
      Example: "Some animals live in cages ",
    },
    {
      Grammar: "compound sentence",
      Form: "Simple sentence connected by conjenction",
      Example:
        "Elephants’ eyes are not so bright, but their eyelashes are long.",
    },
    {
      Grammar: "Proper noun",
      Form: "Name of person, place, thing, or idea ",
      Example: "Addis Ababa, Almaz, Revolutionary",
    },
    {
      Grammar: "common noun",
      Form: "Names of any person, place, thing, or idea ",
      Example: "Children, honesty",
    },

    {
      Grammar: "Concrete nouns",
      Form: "Name of things you can see or touch ",
      Example: "Desk, chair",
    },
    {
      Grammar: "Abstract nouns",
      Form: "Name of ideas, qualities, or feelings ",
      Example: "Honor, sadness",
    },
    {
      Grammar: "Compound nouns",
      Form: "Two or more words",
      Example: "Commander in Chief ",
    },
    {
      Grammar: "Collective nouns",
      Form: "Names a group",
      Example: "Forest, Flock, People",
    },
    {
      Grammar: "Transitive verb",
      Form: "Transitive verb + Object",
      Example: "I do my homework",
    },
    {
      Grammar: "Intransitive Verb",
      Form: "Intransitive verb + No Object",
      Example: "The crowd cheers enthusiastically",
    },
    {
      Grammar: "Direct Object",
      Form: "Action receipter",
      Example: "I wrote a letter.",
    },
    {
      Grammar: "Indirect Object",
      Form: "for whom an action is done",
      Example: "I sent mother the letter.",
    },
    {
      Grammar: "Continous Form",
      Form: "Verb to be + Verb + ‘ing’",
      Example: "I’m doing, He’s looking, We were running",
    },
    {
      Grammar: "Perfect Form",
      Form: "Verb to have + past participle",
      Example: "I have got, We had eaten, He has come",
    },
    {
      Grammar: "Present tense",
      Form: "Subject + Verb1 + Object ",
      Example: "The mail arrives at 1:00 P.M.",
    },
    {
      Grammar: "Simple past tense",
      Form: "Subject + Verb2 + Object",
      Example: "Yesterday the mail arrived late ",
    },
    {
      Grammar: "Present progressive form",
      Form: "Subject + Present Continous Verb + Object",
      Example: "It’s raining",
    },
    {
      Grammar: "Past progressive form",
      Form: "Subject + Past Continous Verb + Object",
      Example: "She was exploring ",
    },
    {
      Grammar: "Present perfect tense",
      Form: "Has/have + Past participle",
      Example: "The dogs have barked for hours.",
    },
    {
      Grammar: "Past perfect tense",
      Form: "Had + Past participate",
      Example: "He had just sat down when the music began.",
    },
    {
      Grammar: "Future tense",
      Form: "Will/Shall + Verb",
      Example: "Joe will play the piano.",
    },
    {
      Grammar: "Future perfect tense",
      Form: "Will/Shall + perfect form",
      Example: "Tomorrow we leave for vacation. Later we are eating dinner.",
    },
    {
      Grammar: "Active voice",
      Form: "Subject performs action",
      Example: "My uncle milked the cow.",
    },
    {
      Grammar: "Passive voice",
      Form: "Subject receives action",
      Example: "The cow was milked by my uncle.",
    },
  ],
  vidI: [
    { urlI: "https://www.youtube.com/embed/HIFzQdKcGNg" },
    { urlI: "https://www.youtube.com/embed/SJOnhWiJArM" },
    { urlI: "https://www.youtube.com/embed/taOQboGLPfg" },
    { urlI: "https://www.youtube.com/embed/VL363_dpaHc" },
  ],
  testI: [
    {
      questionI: "I ________ to school yesterday.",
      alternativesI: "A.	go           B. gone        C. went ",
      answerI: "Answer: C. went",
    },
    {
      questionI: "we ______ bread from Mrs. Aberash last week. ",
      alternativesI: "A.	Buy          B. buys            C. bought ",
      answerI: "Answer: B. buys",
    },
    {
      questionI: "The ________ have their own association.  ",
      alternativesI: "A.	woman        B. women             C. womans  ",
      answerI: "Answer: B. women ",
    },
    {
      questionI: "My brother became a vegetarian and stopped _______ meat. ",
      alternativesI: "A.	eating 		B. to eat 			C. eaten ",
      answerI: "Answer: A.	eating ",
    },
    {
      questionI: "Cakes and friends are to be chosen _______. ",
      alternativesI: "A.	careful 		B. care 			C. carefully ",
      answerI: "Answer: A.	careful",
    },
    {
      questionI: "They have two children. _______ names are Nahom and Nati. ",
      alternativesI: "A.	their 		B. there 			C. they’re ",
      answerI: "Answer: C. carefully",
    },
    {
      questionI: "The cat saw two _______ and run after them. ",
      alternativesI: "A.	mouse 		B.	mice		C. mouses   ",
      answerI: "Answer: A.	mouse",
    },
  ],
};

class Intermediet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vocI: "Vocabulary",
      tensI: "Grammar",
      excI: "Exercice",
      englishI: "Cold",
      amharicI: "ጉንፋን",
      soundI: Audio1I,
      tenseTypeI: "Passive voice",
      structureI: "Subject receives action",
      tenseExampleI: "The cow was milked by my uncle.",
      questionI: "The cat saw two _______ and run after them.",
      alternativesI: "A.	mouse 		B.	mice		C. mouses",
      answerI: "Answer: A.	mouse",
      dispQnI: "Click Qn to Start the test",
      dispAltI: "",
      dispAnsI: "",
      langVideoTitleI: "Tutorial Video",
      langVideoSrcI: "https://www.youtube.com/embed/isMpyCkKuDU",
    };
  }

  nextVocHandleI = () => {
    this.setState({
      englishI: dataBoxI.vocabI[vocStoreI.getState()].Word,
      amharicI: dataBoxI.vocabI[vocStoreI.getState()].Translation,
    });
    this.setState(
      { soundI: dataBoxI.vocabI[vocStoreI.getState()].Sound },
      function () {
        this.refs.audio.pause();
        this.refs.audio.load();
      }
    );

    if (vocStoreI.getState() < dataBoxI.vocabI.length - 1) {
      vocStoreI.dispatch({ type: "INCREMENTI" });
    }
  };

  prevVocHandleI = () => {
    this.setState({
      englishI: dataBoxI.vocabI[vocStoreI.getState()].Word,
      amharicI: dataBoxI.vocabI[vocStoreI.getState()].Translation,
    });
    this.setState(
      { soundI: dataBoxI.vocabI[vocStoreI.getState()].Sound },
      function () {
        this.refs.audio.pause();
        this.refs.audio.load();
      }
    );
    if (vocStoreI.getState() > 0) {
      vocStoreI.dispatch({ type: "DECREMENTI" });
    }
  };
  ///////////////////Tense/////////////////////////
  nextTensHandleI = () => {
    this.setState({
      tenseTypeI: dataBoxI.tensI[tensStoreI.getState()].Grammar,
    });
    this.setState({
      structureI: dataBoxI.tensI[tensStoreI.getState()].Form,
    });
    this.setState({
      tenseExampleI: dataBoxI.tensI[tensStoreI.getState()].Example,
    });

    if (tensStoreI.getState() < dataBoxI.tensI.length - 1) {
      tensStoreI.dispatch({ type: "INCREMENTAI" });
    }
  };

  prevTensHandleI = () => {
    this.setState({
      tenseTypeI: dataBoxI.tensI[tensStoreI.getState()].Grammar,
    });
    this.setState({
      structureI: dataBoxI.tensI[tensStoreI.getState()].Form,
    });
    this.setState({
      tenseExampleI: dataBoxI.tensI[tensStoreI.getState()].Example,
    });
    if (tensStoreI.getState() > 0) {
      tensStoreI.dispatch({ type: "DECREMENTAI" });
    }
  };
  /////////////////////Exercise//////////////////////////////////
  nextTestHandleI = () => {
    this.setState({
      questionI: dataBoxI.testI[storequestionI.getState()].questionI,
    });
    this.setState({
      answerI: dataBoxI.testI[storequestionI.getState()].answerI,
    });
    this.setState({
      alternativesI: dataBoxI.testI[storequestionI.getState()].alternativesI,
    });
    this.setState({ dispQnI: "Click Qn to see the next question" });
    this.setState({ dispAltI: "" });
    this.setState({ dispAnsI: "" });

    if (storequestionI.getState() < dataBoxI.testI.length - 1) {
      storequestionI.dispatch({ type: "INCREMENTWI" });
    }
  };

  prevTestHandleI = () => {
    this.setState({
      questionI: dataBoxI.testI[storequestionI.getState()].questionI,
    });
    this.setState({
      answerI: dataBoxI.testI[storequestionI.getState()].answerI,
    });
    this.setState({
      alternativesI: dataBoxI.testI[storequestionI.getState()].alternativesI,
    });
    this.setState({ dispQnI: "Click Qn to see the previous question" });
    this.setState({ dispAnsI: "" });
    this.setState({ dispAltI: "" });

    if (storequestionI.getState() > 0) {
      storequestionI.dispatch({ type: "DECREMENTWI" });
    }
  };

  displayQnI = () => {
    this.setState({ dispQnI: this.state.questionI });
    this.setState({ dispAltI: this.state.alternativesI });
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
        <LangNavbar2 />
        <div className="languageContainer">
          <Container>
            <div className="languageTitle">
              <Row>
                <Col xs="4" className="levelInd">
                  <h1 className="interLevel">Intermediet Level</h1>
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
                <h2 className="vocTtl" id="vocTtl">{`${this.state.vocI}`}</h2>

                <div className="vocabulary">
                  <div className="vocBody">
                    {/* <div className="vocTop">
                      <div className="lSide">
                        <h2 className="vocEnglish">English</h2>
                      </div>
                      <div className="rSide">
                        <h2 className="vocEngDisplay">{`${this.state.englishI}`}</h2>
                      </div>
                    </div>
                    <div className="vocMid">
                      <div className="lSide">
                        <h2 className="vocAmharic">አማርኛ</h2>
                      </div>
                      <div className="rSide">
                        <h2 className="vocAmDisplay">{`${this.state.amharicI}`}</h2>
                      </div>
                    </div>
                    <div className="vocBottom">
                      <div className="lSide">
                        <h2 className="pronounce">Sound</h2>
                      </div>
                      <div className="rSide">
                        <audio controls ref="audio">
                          <source
                            src={`${this.state.soundI}`}
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                    </div> */}
                    <div className="rightSide">
                      <h2 className="vocEngDisplay">
                        {`${this.state.englishI}`}
                      </h2>
                      <h2 className="vocAmDisplay">
                        {`${this.state.amharicI}`}
                      </h2>
                      <audio controls ref="audio">
                        <source
                          src={`${this.state.soundI}`}
                          type="audio/mpeg"
                        />
                      </audio>
                    </div>
                    <div className="leftSide">
                      <h2 className="vocEnglish">English</h2>
                      <h2 className="vocAmharic">አማርኛ</h2>
                      <h2 className="sound">Sound</h2>
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
                      <h2 className="tensType">Grammar</h2>
                      <h2 className="structure">Form</h2>
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
                      <h2 className="alternativesDisplay">{`${this.state.dispAltI}`}</h2>
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
            </div>
          </Container>
          <Footer />
        </div>
      </>
    );
  }
}

export default Intermediet;
