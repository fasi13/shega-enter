import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getVocabulary } from "../../../../actions/vocabAction";
import { getgrammar } from "../../../../actions/gramAction";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// core components
import Footer from "../../footer/Footer";
import LangNavbar2 from "../../navbars/LangNavbar2";
// import spinner from "../../layout/Spinner2.gif";

function Beginner({
  getVocabulary,
  getgrammar,
  langVoc: { langVocs, loading },
  langGrams,
}) {
  const [count, setCount] = useState(0);
  const [countGram, setCountGram] = useState(0);
  const [countVedioLink, setVedioLink] = useState(0);
  const [countExercise, setExercise] = useState(0);
  const [show, setShow] = useState(false);
  // const [dispQn, setDisp] = useState("Click Qn to Start the test");

  useEffect(() => {
    getVocabulary();
    getgrammar();
  }, [getVocabulary]);
  function nextUpdate(a, b) {
    setExercise(a);
    setShow(b);
  }

  if (loading) {
    return <p>Loadding....</p>;
  }

  return (
    <>
      <LangNavbar2 />

      <div className="languageContainer">
        <Container>
          <div className="languageTitle">
            <Row>
              <Col xs="4" className="levelInd">
                <h1 className="begginerLevel">Beginner Level</h1>
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
              <h4 className="shegaLangLang">Shega Entertainment</h4>
            </div>
          </div>
          <div className="languageCards">
            <div className="vocabularyContainer">
              <h2 className="vocTtl" id="vocTtl">
                Vocabulary
              </h2>
              <div className="vocabulary">
                <div className="vocBody">
                  <div className="rightSide">
                    <h2 className="vocEngDisplay">
                      {langVocs[0].vocabulary[count].english}
                    </h2>
                    <h2 className="vocAmDisplay">
                      {langVocs[0].vocabulary[count].amaharic}
                    </h2>
                    {/* <audio controls ref="audio">
                      <source src={langVocs[count].sound} type="audio/mpeg" />
                    </audio> */}
                  </div>
                  <div className="leftSide">
                    <h2 className="vocEnglish">English</h2>
                    <h2 className="vocAmharic">አማርኛ</h2>
                    <h2 className="sound">Sound</h2>
                  </div>
                </div>
                <div>
                  <Button
                    className="prevVoc"
                    onClick={() => (count ? setCount(count - 1) : setCount(0))}
                  >
                    <i className="fa fa-backward" aria-hidden="true"></i>
                  </Button>
                </div>
                <div>
                  <Button
                    className="nextVoc"
                    onClick={() =>
                      count >= langVocs[0].vocabulary.length - 1
                        ? setCount(0)
                        : setCount(count + 1)
                    }
                  >
                    <i className="fa fa-forward" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </div>

            <div className="tenseContainer">
              <h2 className="tensTtl" id="tensTtl">
                Grammar
              </h2>
              <div className="tense">
                <div className="tensBody">
                  <div className="rightSide">
                    <h2 className="tenstypeDisplay">
                      {langVocs[0].grammer_[countGram].grammer}
                    </h2>
                    <h2 className="tensStructureDisplay">
                      {langVocs[0].grammer_[countGram].form}
                    </h2>
                    <h2 className="tensEgDisplay">
                      {langVocs[0].grammer_[countGram].example}
                    </h2>
                  </div>
                  <div className="leftSide">
                    <h2 className="tensType">Grammar</h2>
                    <h2 className="structure">Form</h2>
                    <h2 className="tensExample">Example</h2>
                  </div>
                </div>
                <div>
                  <Button
                    className="prevTens"
                    onClick={() =>
                      countGram ? setCountGram(countGram - 1) : setCountGram(0)
                    }
                  >
                    <i className="fa fa-backward" aria-hidden="true"></i>
                  </Button>
                </div>
                <div>
                  <Button
                    className="nextTens"
                    onClick={() =>
                      countGram >= langVocs[0].grammer_.length - 1
                        ? setCountGram(0)
                        : setCountGram(countGram + 1)
                    }
                  >
                    <i className="fa fa-forward" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </div>

            <div className="tenseContainer">
              <h2 className="langVideoTitle" id="langVideoTitle">
                Tutorial Vedio
              </h2>
              <div className="tense">
                <div className="langVideoBody">
                  <iframe
                    title="firstVideo"
                    src={langVocs[0].tutorialVedio[0].vedioLink}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div>
                  <div>
                    <Button
                      className="prevVoc"
                      onClick={() =>
                        countVedioLink
                          ? setVedioLink(countVedioLink - 1)
                          : setVedioLink(0)
                      }
                    >
                      <i className="fa fa-backward" aria-hidden="true"></i>
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="nextVoc"
                      onClick={() =>
                        countVedioLink >= langVocs[0].tutorialVedio.length - 1
                          ? setVedioLink(0)
                          : setVedioLink(countVedioLink + 1)
                      }
                    >
                      <i className="fa fa-forward" aria-hidden="true"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="testContainer">
              <h2 className="testTtl" id="testTtl">
                Exercise
              </h2>
              <div className="test">
                <div className="testBody">
                  <div className="rightSide">
                    <h2 className="questionDisplay">
                      {langVocs[0].exercises[countExercise].question}
                    </h2>
                    <div className="row mt-2" style={{ fontWeight: "bold" }}>
                      <div className="col-md-3">
                        A){`${langVocs[0].exercises[countExercise].mChoiceA}`}
                      </div>
                      <div className="col-md-3">
                        B) {`${langVocs[0].exercises[countExercise].mChoiceB}`}
                      </div>
                      <div className="col-md-3">
                        C){""}
                        {`${langVocs[0].exercises[countExercise].mChoiceC}`}
                      </div>
                      <div className="col-md-3">
                        D){""}
                        {`${langVocs[0].exercises[countExercise].mChoiceD}`}
                      </div>
                    </div>

                    {show ? (
                      <h2
                        className="answerDisplay"
                        style={{ paddingTop: "10px" }}
                      >
                        {`${langVocs[0].exercises[countExercise].answer}`}
                      </h2>
                    ) : null}
                  </div>
                  <div className="leftSide">
                    <h2>
                      <Button className="qn">Qn</Button>
                    </h2>
                    <Button
                      className="ans"
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      Ans
                    </Button>
                  </div>
                </div>
                <div>
                  <Button
                    className="prevTest"
                    onClick={() =>
                      countExercise
                        ? nextUpdate(countExercise - 1, false)
                        : setExercise(0)
                    }
                  >
                    <i className="fa fa-backward" aria-hidden="true"></i>
                  </Button>
                </div>
                <div>
                  <Button
                    className="nextTest"
                    onClick={() =>
                      countExercise >= langVocs[0].exercises.length - 1
                        ? setExercise(0)
                        : nextUpdate(countExercise + 1, false)
                    }
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
Beginner.propTypes = {
  getVocabulary: PropTypes.func.isRequired,
  getgrammar: PropTypes.func.isRequired,
  langVoc: PropTypes.object.isRequired,
  langGrams: PropTypes.object.isRequired,
  langVedioLink: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  langVoc: state.langVoc,
  langGrams: state.langGrams,
  loading: state.loading,
  langVedioLink: state.langVedioLink,
});
export default connect(mapStateToProps, { getVocabulary, getgrammar })(
  Beginner
);
