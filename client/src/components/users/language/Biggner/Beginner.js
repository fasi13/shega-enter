import React from "react";
import "../Language.css";
import Audio1 from "../../../../assets/mp3/beg/sound1.mp3";
import Audio2 from "../../../../assets/mp3/beg/ambitius.mp3";
import Audio3 from "../../../../assets/mp3/beg/extraordinary.mp3";
import Audio4 from "../../../../assets/mp3/beg/Soulful1.mp3";
import Audio5 from "../../../../assets/mp3/beg/relative_1.mp3";
import Audio6 from "../../../../assets/mp3/beg/apple.mp3";
import Audio7 from "../../../../assets/mp3/beg/air1.mp3";
import Audio8 from "../../../../assets/mp3/beg/ball1.mp3";
import Audio9 from "../../../../assets/mp3/beg/bag1.mp3";
import Audio10 from "../../../../assets/mp3/beg/cat1.mp3";
import Audio11 from "../../../../assets/mp3/beg/cell1.mp3";
import Audio12 from "../../../../assets/mp3/beg/dog1.mp3";
import Audio13 from "../../../../assets/mp3/beg/dad1.mp3";
import Audio14 from "../../../../assets/mp3/beg/egg1.mp3";
import Audio15 from "../../../../assets/mp3/beg/ear1.mp3";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { createStore } from "redux";
// import ReactDatatable from "@ashvin27/react-datatable";

// core components
import Footer from "../../footer/Footer";
import LangNavbar2 from "../../navbars/LangNavbar2";

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
    case "INCREMENTT":
      return stateW + 1;
    case "DECREMENTT":
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
      sound: Audio2,
    },
    {
      english: "Extraordinary",
      amharic: "እጅግ ጎበዝ",
      sound: Audio3,
    },
    {
      english: "Soulful",
      amharic: "ጥልቅ ስሜት",
      sound: Audio4,
    },
    {
      english: "Relative",
      amharic: "ዘመድ",
      sound: Audio5,
    },
    {
      english: "Apple",
      amharic: "ፖም",
      sound: Audio6,
    },
    {
      english: "air",
      amharic: "አየር",
      sound: Audio7,
    },
    {
      english: "ball",
      amharic: "ኳስ",
      sound: Audio8,
    },
    {
      english: "bag",
      amharic: "ሻንጣ/ቦርሳ",
      sound: Audio9,
    },
    {
      english: "cat",
      amharic: "ድመት",
      sound: Audio10,
    },
    {
      english: "cell",
      amharic: "ህዋስ",
      sound: Audio11,
    },
    {
      english: "dog",
      amharic: "ውሻ",
      sound: Audio12,
    },
    {
      english: "dad",
      amharic: "አባት",
      sound: Audio13,
    },
    {
      english: "egg",
      amharic: "እንቁላል",
      sound: Audio14,
    },
    {
      english: "ear",
      amharic: "ጀሮ",
      sound: Audio15,
    },
    {
      english: "father",
      amharic: "አባት",
      sound: "",
    },
    {
      english: "fish",
      amharic: "አሳ",
      sound: "",
    },
    {
      english: "goat",
      amharic: "ፍየል",
      sound: "",
    },
    {
      english: "gym",
      amharic: "ጅምናዝየም/የስፖርት መስሪያ ቦታ",
      sound: "",
    },

    {
      english: "hat",
      amharic: "ባርኔጣ",
      sound: "",
    },
    {
      english: "house",
      amharic: "ቤት",
      sound: "",
    },
    {
      english: "juice",
      amharic: "ጭማቂ",
      sound: "",
    },
    {
      english: "kite",
      amharic: "ካይት/መጫወቻ በራሪ ነገር",
      sound: "",
    },
    {
      english: "key",
      amharic: "ቁልፍ",
      sound: "",
    },
    {
      english: "lamp",
      amharic: "አምፖል/መብራት",
      sound: "",
    },
    {
      english: "leg",
      amharic: "እግር",
      sound: "",
    },
    {
      english: "man",
      amharic: "ወንድ/ሰውየ",
      sound: "",
    },
    {
      english: "moon",
      amharic: "ጨረቃ",
      sound: "",
    },

    {
      english: "net",
      amharic: "መረብ",
      sound: "",
    },
    {
      english: "nest",
      amharic: "የወፍ ጎጆ",
      sound: "",
    },
    {
      english: "orange",
      amharic: "ብርቱካን",
      sound: "",
    },
    {
      english: "owl",
      amharic: "ጉጉት(ወፍ)",
      sound: "",
    },
    {
      english: "pan",
      amharic: "ዳቦ/ቂጣ",
      sound: "",
    },
    {
      english: "pen",
      amharic: "እስክሪብቶ",
      sound: "",
    },
    {
      english: "queen",
      amharic: "ንግስት",
      sound: "",
    },
    {
      english: "quill",
      amharic: "የወፍ ላቫ ",
      sound: "",
    },
    {
      english: "riddle",
      amharic: "እንቆቅልሽ ",
      sound: "",
    },

    {
      english: "red",
      amharic: "ቀይ",
      sound: "",
    },

    {
      english: "sun",
      amharic: "ፅሐይ",
      sound: "",
    },
    {
      english: "son",
      amharic: "ወንድ ልጅ",
      sound: "",
    },
    {
      english: "tea",
      amharic: "ሻይ",
      sound: "",
    },
    {
      english: "toy",
      amharic: "አሻንጉሊት",
      sound: "",
    },
    {
      english: "umbrella",
      amharic: "ጥላ",
      sound: "",
    },
    {
      english: "unity",
      amharic: "አንድነት",
      sound: "",
    },
    {
      english: "van",
      amharic: "የመኪና ስም",
      sound: "",
    },

    {
      english: "vegetable",
      amharic: "አትክልት",
      sound: "",
    },
    {
      english: "watch",
      amharic: "ሰዓት",
      sound: "",
    },
    {
      english: "wool",
      amharic: "ሱፍ",
      sound: "",
    },
    {
      english: "x- ray",
      amharic: "ኤክስሬይ",
      sound: "",
    },
    {
      english: "xylophone",
      amharic: "ዚለፎን የሙዚቃ መሳሪያ",
      sound: "",
    },
    {
      english: "yellow",
      amharic: "ቢጫ",
      sound: "",
    },
    {
      english: "yacht",
      amharic: "ጀልባ",
      sound: "",
    },
    {
      english: "zebra",
      amharic: "የሚዳ አህያ",
      sound: "",
    },
    {
      english: "zip",
      amharic: "ዚፕ ቁልፍ",
      sound: "",
    },
    {
      english: "Living Room",
      amharic: "መኖሪያ ቤት",
      sound: "",
    },
    {
      english: "sofa",
      amharic: "ሶፋ",
      sound: "",
    },
    {
      english: "table",
      amharic: "ጠረንጴዛ",
      sound: "",
    },
    {
      english: "chair",
      amharic: "ወንበር",
      sound: "",
    },
    {
      english: "TV-stand",
      amharic: "የቴሌቪዥን መስቀያ",
      sound: "",
    },
    {
      english: "Shelf",
      amharic: "እቃ መደርደሪያ",
      sound: "",
    },
    {
      english: "Vase",
      amharic: "የአበባ ማስቀመጫ",
      sound: "",
    },
    {
      english: "mat",
      amharic: "የወለል ንጣፍ",
      sound: "",
    },
    {
      english: "Kitchen",
      amharic: "ኩሽና",
      sound: "",
    },
    {
      english: "Bowl",
      amharic: "ጎድጓዳ ሰሀን",
      sound: "",
    },
    {
      english: "Cup",
      amharic: "የሻየ ብርጭቆ",
      sound: "",
    },
    {
      english: "Carrot",
      amharic: "ካሮት",
      sound: "",
    },
    {
      english: "Stove",
      amharic: "ምድጃ",
      sound: "",
    },
    {
      english: "Refrigerator",
      amharic: "ፍሪጅ/ማቀዝቀዣ",
      sound: "",
    },
    {
      english: "Sink",
      amharic: "እቃ ማጠቢያ ሰህን",
      sound: "",
    },
    {
      english: "Dish",
      amharic: "ሰሀን",
      sound: "",
    },
    {
      english: "sponge",
      amharic: "ስፖንጅ",
      sound: "",
    },
    {
      english: "Bathroom",
      amharic: "መታጠቢያ ቤት",
      sound: "",
    },

    {
      english: "Towel",
      amharic: "ፎጣ",
      sound: "",
    },
    {
      english: "Soap",
      amharic: "ሳሙና",
      sound: "",
    },
    {
      english: "Sandal",
      amharic: "ነጠላ ጫማ",
      sound: "",
    },
    {
      english: "Bath",
      amharic: "መታጠቢያ ሰሀን",
      sound: "",
    },
    {
      english: "Mirror",
      amharic: "መስታውት",
      sound: "",
    },
    {
      english: "Time",
      amharic: "ጊዜ",
      sound: "",
    },
    {
      english: "Squence",
      amharic: "የጊዜ ቅደም ተከተል",
      sound: "",
    },
    {
      english: "Order",
      amharic: "የሁኒታ/ነገሮች ቅደም ተከተል",
      sound: "",
    },
    {
      english: "first",
      amharic: "አንደኛ",
      sound: "",
    },
    {
      english: "after",
      amharic: "በኋላ",
      sound: "",
    },
    {
      english: "yesterday",
      amharic: "ትናንት",
      sound: "",
    },
    {
      english: "next",
      amharic: "ቀጥሎ",
      sound: "",
    },
    {
      english: "before",
      amharic: "በፊት",
      sound: "",
    },
    {
      english: "today",
      amharic: "ዛሬ",
      sound: "",
    },
    {
      english: "then",
      amharic: "ያን ጊዜ",
      sound: "",
    },
    {
      english: "now",
      amharic: "አሁን",
      sound: "",
    },
    {
      english: "tomorrow",
      amharic: "ነገ",
      sound: "",
    },
    {
      english: "finally",
      amharic: "በመጨረሻ",
      sound: "",
    },
    {
      english: "soon",
      amharic: "በቅርቡ",
      sound: "",
    },
    {
      english: "long ago",
      amharic: "ከረዥም ጊዜ በፊት",
      sound: "",
    },
    {
      english: "Monday",
      amharic: "ሰኞ",
      sound: "",
    },
    {
      english: "Tuesday",
      amharic: "ማክሰኞ",
      sound: "",
    },
    {
      english: "Wednesday",
      amharic: "ሮብዕ",
      sound: "",
    },
    {
      english: "Thursday",
      amharic: "ሐሙስ",
      sound: "",
    },
    {
      english: "Friday",
      amharic: "አርብ",
      sound: "",
    },
    {
      english: "Satureday",
      amharic: "ቅዳሜ",
      sound: "",
    },
    {
      english: "Sunday",
      amharic: "እሁድ",
      sound: "",
    },
  ],
  tens: [
    {
      Grammar: "Noun",
      Form: "Every name in a phrase or sentence",
      Example: "Field, fountain, street, town",
    },
    {
      Grammar: "pronoun",
      Form: "Stands for nouns or phrase nouns",
      Example: "He, she, it, we, I, they, you",
    },
    {
      Grammar: "adjective",
      Form: "describes a thing",
      Example: "Cleaver, strong, cute, lovly ",
    },
    {
      Grammar: "verbs",
      Form: "action indicator word",
      Example: "Study, read, write, jump, run ",
    },
    {
      Grammar: "adverbs",
      Form: "Express how things are done ",
      Example: "Quickly, slowly, badly, well ",
    },
    {
      Grammar: "preposition",
      Form: "Shows relation ",
      Example: "To, in, at, of, with",
    },
    {
      Grammar: "Conjunctions",
      Form: "joint ",
      Example: "Or, and",
    },
    {
      Grammar: "interjection",
      Form: "Exclamation expression",
      Example: "Heed! ",
    },
    {
      Grammar: "Phrase",
      Form: "Adjective + Noun ",
      Example: "Cute Dog",
    },
    {
      Grammar: "Sentences",
      Form: "Subject + Verb + Object + Complement",
      Example: "My dad makes soup in the kitchen.",
    },
    {
      Grammar: "Plural Nouns",
      Form: "Regular noun + s/es",
      Example: "Orange-Oranges, Cow-Cows, Bunny-Bunnies",
    },
    {
      Grammar: "Plural Nouns(Irregular)",
      Form: "Varies",
      Example: "Man-Men, Child-Children, Mouse-Mice",
    },

    {
      Grammar: "Singular possessive Nouns",
      Form: "Noun + (‘) + s",
      Example: "Sky’s, Girl’s,  bird’s",
    },
    {
      Grammar: "Plural Possessive Nouns",
      Form: "Noun ends in ‘s’ + (‘)",
      Example: "Kids’, boys’, Bats’,Dogs’",
    },
    {
      Grammar: "Present – Tense Verbs",
      Form: "Verb + s/es",
      Example: "sleeps, watches, likes, buzzes",
    },
    {
      Grammar: "Past –Tense Verbs",
      Form: "Verb + d/ed",
      Example: "dropped, traced ",
    },
    {
      Grammar: "The Verb Have",
      Form: "have, has, and had + Complement",
      Example: "I have a bike. Adane has one, too. We had none yesterday",
    },
    {
      Grammar: "The verb Be",
      Form: "Noun/Pronoun + Verb to Be",
      Example: "I am, She/he/it is, You/we/they are, Tedla is",
    },
  ],
  vid: [
    { url: "https://www.youtube.com/embed/ZmUm29fc6nI" },
    { url: "https://www.youtube.com/embed/AVYfyTvc9KY" },
    { url: "https://www.youtube.com/embed/RUNj1jAouHA" },
    { url: "https://www.youtube.com/embed/Nd4MScADY94" },
  ],
  test: [
    {
      question: "Where ____ they come from?",
      alternatives: "a)	does  b) do c)	are",
      answer: "Answer: b) do",
    },
    {
      question: "The cat climbed out ____ the window.",
      alternatives: "a) on  b) to  c)	of",
      answer: "Answer: c)	of",
    },
    {
      question: "I write letters ____ a pen.",
      alternatives: "a)	in b)	with  c)	on",
      answer: "Answer: b)	with",
    },
    {
      question: "____ she ____ any sisters?",
      alternatives: "a)	Does/has b)	Do/has c)	Does/have",
      answer: "Answer: c)	Does/have",
    },
    {
      question: "Joe teaches ____ to drive a car.",
      alternatives: "a)	myself b)	herself c)	himself",
      answer: "Answer: c)	himself",
    },
    {
      question: "She is meeting me ____ four o'clock.",
      alternatives: "a)	in b)	at c)	on",
      answer: "Answer: b)	at",
    },
    {
      question: "There are too ____ questions in this exam.",
      alternatives: "a)	much b)	many ",
      answer: "Answer: b)	many",
    },
    {
      question: "She's arriving ___ the airport at eight.",
      alternatives: "a)	at b)	on c)	to ",
      answer: "Answer: a)	at",
    },
    {
      question: "He ____ English every day.",
      alternatives: "a)	study b)	studys c)	studies ",
      answer: "Answer: c)	studies",
    },
    {
      question: "How ___ you pronounce it?",
      alternatives: "a)	do b)	are c)	can ",
      answer: "Answer: a)	do",
    },
    {
      question: "How much did you ___ in the supermarket?",
      alternatives: "a)	cost  b) spend ",
      answer: "Answer: b) spend",
    },
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
      //   key: "sound",
      //   text: "sound",
      //   className: "name",
      //   align: "left",
      //   sortable: false,
      // },
    ];
    this.state = {
      preRec: [],
      voc: "Vocabulary",
      tens: "Grammar",
      exc: "Exercice",
      english: "Delicious",
      amharic: "ጣፋጭ",
      sound: Audio1,
      tenseType: "The verb Be",
      structure: "Noun/Pronoun + Verb to Be",
      tenseExample: " am, She/he/it is, You/we/they are",
      question: "How much did you ___ in the supermarket?",
      alternatives: "a)	cost  b) spend",
      answer: "Answer: b) spend",
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
      amharic: dataBox.vocab[vocStore.getState()].amharic,
    });
    this.setState(
      { sound: dataBox.vocab[vocStore.getState()].sound },
      function () {
        this.refs.audio.pause();
        this.refs.audio.load();
        // this.refs.audio.play();
      }
    );

    if (vocStore.getState() < dataBox.vocab.length - 1) {
      vocStore.dispatch({ type: "INCREMENT" });
    }
  };

  prevVocHandle = () => {
    this.setState({
      english: dataBox.vocab[vocStore.getState()].english,
      amharic: dataBox.vocab[vocStore.getState()].amharic,
    });
    this.setState(
      { sound: dataBox.vocab[vocStore.getState()].sound },
      function () {
        this.refs.audio.pause();
        this.refs.audio.load();
        // this.refs.audio.play();
      }
    );
    if (vocStore.getState() > 0) {
      vocStore.dispatch({ type: "DECREMENT" });
    }
  };
  ///////////////////Tense/////////////////////////
  nextTensHandle = () => {
    this.setState({ tenseType: dataBox.tens[tensStore.getState()].Grammar });
    this.setState({ structure: dataBox.tens[tensStore.getState()].Form });
    this.setState({
      tenseExample: dataBox.tens[tensStore.getState()].Example,
    });

    if (tensStore.getState() < dataBox.tens.length - 1) {
      tensStore.dispatch({ type: "INCREMENTA" });
    }
  };

  prevTensHandle = () => {
    this.setState({ tenseType: dataBox.tens[tensStore.getState()].Grammar });
    this.setState({ structure: dataBox.tens[tensStore.getState()].Form });
    this.setState({
      tenseExample: dataBox.tens[tensStore.getState()].Example,
    });
    if (tensStore.getState() > 0) {
      tensStore.dispatch({ type: "DECREMENTA" });
    }
  };
  /////////////////////Exercise//////////////////////////////////
  nextTestHandle = () => {
    this.setState({ question: dataBox.test[storeTest.getState()].question });
    this.setState({
      alternatives: dataBox.test[storeTest.getState()].alternatives,
    });
    this.setState({ answer: dataBox.test[storeTest.getState()].answer });
    this.setState({ dispQn: "Click Qn to see the next question" });
    this.setState({ dispAns: "" });
    this.setState({ dispAlt: "" });
    if (storeTest.getState() < dataBox.test.length - 1) {
      storeTest.dispatch({ type: "INCREMENTT" });
    }
  };

  prevTestHandle = () => {
    this.setState({ question: dataBox.test[storeTest.getState()].question });
    this.setState({
      alternatives: dataBox.test[storeTest.getState()].alternatives,
    });
    this.setState({ answer: dataBox.test[storeTest.getState()].answer });
    this.setState({ dispQn: "Click Qn to see the previous question" });
    this.setState({ dispAns: "" });
    this.setState({ dispAlt: "" });

    if (storeTest.getState() > 0) {
      storeTest.dispatch({ type: "DECREMENTT" });
    }
  };

  displayQn = () => {
    this.setState({ dispQn: this.state.question });
    this.setState({ dispAlt: this.state.alternatives });
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
    if (storeVideo.getState() < dataBox.vid.length - 1) {
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
                      <h2 className="vocEngDisplay">
                        {`${this.state.english}`}
                      </h2>
                      <h2 className="vocAmDisplay">
                        {`${this.state.amharic}`}
                      </h2>
                      <audio controls ref="audio">
                        <source src={`${this.state.sound}`} type="audio/mpeg" />
                      </audio>
                    </div>
                    <div className="leftSide">
                      <h2 className="vocEnglish">English</h2>
                      <h2 className="vocAmharic">አማርኛ</h2>
                      <h2 className="sound">Sound</h2>
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
                      <h2 className="tensType">Grammar</h2>
                      <h2 className="structure">Form</h2>
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
                      <h2 className="alternativesDisplay">{`${this.state.dispAlt}`}</h2>
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
            </div>
          </Container>
          <Footer />
        </div>
      </>
    );
  }
}

export default Beginner;
