import React from "react";
import "./Drive.css";

//images
import image1 from "../../../assets/img/rule/1.png";
import image2 from "../../../assets/img//rule/22.jpg";
import image3 from "../../../assets/img//rule/33.png";
import image5 from "../../../assets/img//rule/55.png";
import image6 from "../../../assets/img//rule/66.png";
import image7 from "../../../assets/img//rule/77.png";
import image8 from "../../../assets/img//rule/88.jpeg";
import image9 from "../../../assets/img//rule/99.jpg";
import image10 from "../../../assets/img//rule/100.png";
import image11 from "../../../assets/img//rule/111.png";
import image12 from "../../../assets/img//rule/112.png";
import image13 from "../../../assets/img//rule/113.png";
import image14 from "../../../assets/img//rule/114.png";

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
import part5 from "../../../assets/img/part/moter.png";
import part6 from "../../../assets/img/part/pestata.png";
import part7 from "../../../assets/img/part/fuelPump.png";
import part8 from "../../../assets/img/part/injectionPump.png";
import part9 from "../../../assets/img/part/kamShaft.png";
import part10 from "../../../assets/img/part/filtro.png";
import part11 from "../../../assets/img/part/moter.png";
import part12 from "../../../assets/img/part/chansis.png";
import part13 from "../../../assets/img/part/dashBoard.png";
import part14 from "../../../assets/img/part/bela.png";
import part15 from "../../../assets/img/part/chisMawucha.png";
import part16 from "../../../assets/img/part/debrater.png";
import part17 from "../../../assets/img/part/electric.png";
import part18 from "../../../assets/img/part/fan.png";
import part19 from "../../../assets/img/part/karborator.png";
import part20 from "../../../assets/img/part/kolo.png";
import part21 from "../../../assets/img/part/manikoto.png";
import part22 from "../../../assets/img/part/manoBlock.png";
import part23 from "../../../assets/img/part/piston.png";
import part24 from "../../../assets/img/part/pistonPin.png";
import part25 from "../../../assets/img/part/radiator.png";
import part26 from "../../../assets/img/part/salvatiyo.png";
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
      meaningD: "ስነ- ምግባር",
      ruleImgD:
        "መልካሙንና መጥፎዉን ለመለየት የሚያስችልና መጥፎዉን በመተዉ መልካሙን  እንድንከተል የሚያበረታታ እሴት ነዉ፡፡ከሌሎች ጋር አብሮ ለመስራትና ለመኖር  አስፈላጊ ነዉ፡፡",
    },
    {
      ruleD: "",
      meaningD: "የሙያ ስነ-ምግባር",
      ruleImgD:
        "ባለሞያዉ በተሰማራበት ሙያ የሚሰራዉን ስራ ጤናማና ዉጤታማ እንዲሆን ሞያዉ የሚጠይቀዉን፡-እዉቀት፣ ክህሎት፣ መርህና ስነ-ስርዓት በማካተት ስራዉን በጥራትና በብቃት መተግበር የሚያስችለን ነዉ፡፡",
    },

    {
      ruleD: "",
      meaningD: "መገንዘብ(sensation)",
      ruleImgD:
        "መረጃን ከአካባቢያችን በስሜት ህዋሳቶቻችን የመቀበል፣የመለወጥ እና አምርኣችን የመላክ ሂደት ነዉ፡፡ ዝግጁነት፡-የብስለት ፣የችሎታ፣ የትምህረትና የመነሳሳት የጋራ ዉጤት ነዉ፡፡",
    },
    {
      ruleD: "",
      meaningD: "መነቃቃት",
      ruleImgD:
        "በሰዎች ዉስጥ ያለ ሁኔታ ሆኖ ባህሪን ወደ ግብ የሚያንቀሳቅስ ሂደት ነዉ፡፡ በመነቃቃት የሚያሽከርክር  አሽከርካሪ በትራፊክ እቅስቃሴ ዉስጥ የሚገጥሙትን ነገሮች እንደት ማለፍ እደሚችል ለማየት ፣ ለማገናዘብ እና ለማተኮር ይችላል፡፡",
    },
    {
      ruleD: "",
      meaningD: "መረጃን የመሰብሰብና የመተርጎም ሂደት",
      ruleImgD:
        "መረጃን የመሰብሰብና የመተርጎ ሂደት በ3 ንዑስ ክፍል ይከፈላል፡፡  መረጃን ከአካባቢያችን መሰብሰብ የምችለዉ  በማየት፣በመስማት፣በማሽተት እና በመዳሰስ ሲሆን ከ80-90% አካባቢን ለማወቅ  እና መረጃን ለመሰብሰብ የሚያስችለን በማየት ነዉ፡፡",
    },
    {
      ruleD: "",
      meaningD: "ትኩረት(attention ):",
      ruleImgD:
        "በስሜት ህዋሳቶቻችን አማካኝነት ከሚደረሱ መረጃወች መካከል ዋናዉን ተፈላጊዉን የመምረጥ ሂደት ነዉ፡፡ለማሽከርከር የሚረዳንን መረጃ /ዋነኛ ነጥብ/  ላያ ትኩረት  መስጠት ያስፈልጋል፡፡",
    },
    {
      ruleD: "",
      meaningD: "ማስተዋል(perception)",
      ruleImgD:
        "በስሜት ህዋሳቶቻችን አማካኝነት ከሚደረሱ መረጃዎችን  የመምረጥ ፣የማቀናበርና ትርጉም የመስጠት ሂደት ነዉ፡፡ አሽከርካሪወች ትርጉም የሚሰጡ መረጃዎችን በጊዜዉ መተግበር አለባቸዉ፡፡",
    },
    {
      ruleD: "",
      meaningD: "የስሜት ባህሪ",
      ruleImgD: "ፍላጎትን፣አመለካከትን፣እሴትን፣ መነሳሳትንና ማንኛውንም ግብ ያለመ የሰወችን ድርጊት ያጠቃልላል፡፡",
    },
    {
      ruleD: "",
      meaningD: "የመገንዘብ /አእምሮዊ/ ባህሪ",
      ruleImgD: "መረዳትን፣ ማሰብን፣ምክንያት መስጠትን፣ዉሳኔ መስጠትን የሰዎችን ድርጊት ማጤንን ያካትታል፡፡",
    },
    {
      ruleD: "",
      meaningD: "የክህሎት ባህሪ፡",
      ruleImgD:
        " በአእምሮ አዛዥነትና በአካል እንቅስቃሴ የሚፈጸሙ ማንኛዉም እንቅስቃሴ የክህሎት ባህሪያት ያካተተ ነው፡፡",
    },
  ],
  traficSymbol: [
    {
      symbolD: "Symbol",
      meaningSymbD: "የሚከለክሉ የመንገድ ዳር ምልክቶች / prohibitory sign /",
      contentRuleMeaning:
        "ቅርፃቸዉ ክብ ፣ ጠርዛቸዉ ቀይ እና መደባቸዉ ነጭ ሲሆን የሚያስተላለፉት መልዕክት በጥቁር ቀለም በተሰራ በምስል፣ በቀስት ወይም በቁጥር ሊሆን ይችላል፡፡",
      eymImgD: image2,
    },
    {
      symbolD: "Symbol2",
      meaningSymbD: "የሚያስገድዱ የመንገድ ዳር ምልክቶች/ Mandatory sign/ ",
      contentRuleMeaning:
        "ቅርፃቸዉ ክብ  እና መደባቸዉ ነጭ ሲሆን የሚያስተላለፉት መልዕክት በነጭ  ቀለም በተሰራ በምስል፣ በቀስት ወይም በቁጥር ሊሆን ይችላል፡፡",
      eymImgD: image3,
    },
    {
      symbolD: "Symbol3",
      meaningSymbD: "ቅድሚያ  የሚያሰጡ የመንገድ  ዳር  ምልክቶች / Give way sign/",
      contentRuleMeaning: "ቅርፃቸዉ የተለያየ ሆኖ  የሚያስተላለፉት መልዕክት ቅድሚያ ስጥ የሚል ነዉ፡፡",
      eymImgD: image5,
    },
    {
      symbolD: "Symbol4",
      meaningSymbD: "መረጃ ሰጭ የመንገድ ዳር ምልክቶች / Information sign/",
      contentRuleMeaning:
        "ቅርፃቸው አራት ማዕዘን  መደባቸው ሰማያዊ መልዕክታቸው የሚተላለፍ በነጭ ወይም በጥቁር ቀለም ሲሆን  በፅሁፍ ፣ በቀስት ፣በስዕል እና በቁጥር  ሊሆን ይችላል፡፡",
      eymImgD: image6,
    },
    {
      symbolD: "",
      meaningSymbD: "የእግረኞች  ማስተላለፊያ  መብራት",
      contentRuleMeaning:
        "እግረኞች ከአደጋ ነፃ ሆነዉ መንገዱን ባጭር ርቀት እንዲያቋርጡ የሚረዱ ሲሆኑ  በቀለም ብዛትና አይነት ከላይ ወደታች  ቀይ ና አረንጓደ  በመበል  በ2 ይከፈላሉ ፡፡  በተጨማሪም በዉስጣቸዉ  የእግረኛ  ምስል አላቸዉ፡፡",
      eymImgD: image7,
    },

    {
      symbolD: "",
      meaningSymbD: "የተሸከርካሪ ማስተላለፊያ መብራቶች",
      contentRuleMeaning:
        "ተሸከርካሪዎች ተራቸዉን ጠብቀዉ እድተላለፉ የሚረዱ ሲሆኑ  በቀለም ብዛትና አይነት  በ3 ይከፈላሉ ፡፡",
      eymImgD: image8,
    },
    {
      symbolD: "",
      meaningSymbD: "የባቡር ማስተላለፊያ መብራቶች",
      contentRuleMeaning:
        "በከተማ ዉስጥ የሚገኙ የባቡር ሃዲድ ማቋረጫ  መብራቶች ተጨማሪ መዝጊያ ያላቸዉ ሲሆን በቀለማቸዉም ይሁን ባበራራቸዉ በ2 ይከፈላሉ፡፡",
      eymImgD: image9,
    },
    {
      symbolD: "",
      meaningSymbD: "የትራፊክ ፖሊስ የእጅ ምልክቶች",
      contentRuleMeaning:
        "ይህ የትራፊክ የእጅ ምልክት ከትራፊክ ፖሊስ በስተኃላና ከፊት ለፊት የሚመጡ ተሸከርካሪዎች ለማስቆም የሚሰጥ ተእዛዝ ነው፡፡",
      eymImgD: image11,
    },
    {
      symbolD: "",
      meaningSymbD: "የትራፊክ ፖሊስ የእጅ ምልክቶች",
      contentRuleMeaning:
        "ይህ የትራፊክ ፖሊስ የእጅ ምልክት ከትራፊክ ፓሊስ በስተቀኝ ቆመው የነበሩ ተሸከርካሪዎች ቀጥታ ወደፊት እና ወደግራ ታጥፈው እንዲሂዱ ትዕዛዝ ያስተላልፋል",
      eymImgD: image12,
    },
    {
      symbolD: "",
      meaningSymbD: "የትራፊክ ፖሊስ የእጅ ምልክቶች",
      contentRuleMeaning:
        "ይህ  የትራፊክ የእጅ ምልክት ከትራፊክ ፖሊስ የቀኝ ረድፋቸውን ይዘው ከፊት ለፊት የሚመጡትን ተሸከርካሪዎች ወደፊትና ወደቀኝ ጉዞ እንዲቀጥሉ የሚሰጥ የእጅ  ምልክት ነው፡፡    ",
      eymImgD: image13,
    },
    {
      symbolD: "",
      meaningSymbD: "የትራፊክ ፖሊስ የእጅ ምልክቶች",
      contentRuleMeaning:
        "ይህ የትራፊክ የእጅ ምልክት  ከትራፊክ ፖሊስ በስተኃላ የሚመጡትን ተሸከርካሪዎች ለማሰቆም የሚሰጥ ትእዛዝ ነው፡፡   ",
      eymImgD: image14,
    },
  ],
  traficPart: [
    // {
    //   partD: "ሞተር （ኢንጅን）",
    //   meaningPrtD: " Exploded view",
    //   partImgD: part1,
    // },
    // {
    //   partD: "Gear Box (Transmission)",
    //   meaningPrtD:
    //     "The Gear Box, or transmission, comes in at a close second to the engine and is what commonly needs attention when vehicles fail.      The transmission is what contains the different gears that the vehicle needs to shift into depending on speed. These gears transfer the engine’s power to the wheels of the vehicle. There are many types of gearbox parts in different cars.",
    //   partImgD: part2,
    // },
    // {
    //   partD: "Oil Filter",
    //   meaningPrtD:
    //     "Filters are essential in removing dust and abrasive particles from the engine oil. Such particles can harm the engine and prevent proper functioning. Oil filters are mainly used to segregate the engine oil from unwanted debris and dust particles. Most of the oil filters are classified as high-efficiency filters as it segregates abrasive materials from the engine oil.",
    //   partImgD: part3,
    // },
    // {
    //   partD: "Gear Box parts and oil filter",
    //   meaningPrtD:
    //     "There are quite a variety of gearbox parts included in the transmission. Most of these parts can be purchased from the online stores for replacement but that’s less than half the battle, you’ll need technical expertise to fix a transmission. Some of the parts include the gearbox cover, the shifter fork, the shifter rod, gearbox fork, and synchronizer rings or hubs.",
    //   partImgD: part4,
    // },
    // {
    //   meaningPrtD:
    //     "One of the most important components of a vehicle includes the engine. This is the most important component of an automobile by all accords. The performance of a vehicle depends on its engine and it is the heart of every car.",
    //   partD: "ሞተር （ኢንጅን）",
    //   partImgD: part5,
    // },
    {
      partD: "ቴስታታ （ሲሊንደር ሄድ）",
      meaningPrtD: " ",
      partImgD: part6,
    },
    {
      partD: "የነዳጅ ፓምፕ （ፊዩል ፓምፕ) ",
      meaningPrtD: " ",
      partImgD: part7,
    },
    {
      partD: "ኢንጀክሽን ፐምፕ",
      meaningPrtD: " ",
      partImgD: part8,
    },
    {
      partD: "ካም ሻፍት",
      meaningPrtD: " ",
      partImgD: part9,
    },
    {
      partD: "የነዳጅ ማጣሪያ （ፊልትሮ ） ",
      meaningPrtD: " ",
      partImgD: part10,
    },
    // {
    //   partD: "ሞተር （ኢንጅን）",
    //   meaningPrtD: " ",
    //   partImgD: part11,
    // },
    {
      partD: "ቻንሲስ ",
      meaningPrtD: " ",
      partImgD: part12,
    },
    {
      partD: "ዳሽቦርድ",
      meaningPrtD: " ",
      partImgD: part13,
    },
    {
      partD: "ቤላ（ኮኔክቲን ሮድ",
      meaningPrtD: " ",
      partImgD: part14,
    },
    {
      partD: "ደብራተር （የአየር ማጣሪያ）",
      meaningPrtD: " ",
      partImgD: part15,
    },
    {
      partD: "ጭስ መውጭ",
      meaningPrtD: " ",
      partImgD: part15,
    },
    {
      partD: "ደብራተር （የአየር ማጣሪያ）",
      meaningPrtD: " ",
      partImgD: part16,
    },
    {
      partD: "የኤለትሪክ ክፍሎች",
      meaningPrtD: " ",
      partImgD: part17,
    },
    {
      partD: "ፋን （ቬንትሌተር)",
      meaningPrtD: " ",
      partImgD: part18,
    },
    {
      partD: "ካርቦሬተር",
      meaningPrtD: " ",
      partImgD: part19,
    },
    {
      partD: "ኮሎ （ክራንክ ሻፍት）",
      meaningPrtD: " ",
      partImgD: part20,
    },
    {
      partD: "ማኒኮቶ （ራዲያተር ሆዝ）",
      meaningPrtD: " ",
      partImgD: part21,
    },
    {
      partD: "ማኖ ብሎክ （ሲሊንደር ብሎክ）",
      meaningPrtD: " ",
      partImgD: part22,
    },

    {
      partD: "ቫልቭ",
      meaningPrtD: " ",
      partImgD: part23,
    },
    {
      partD: "ፒስተን ፒን",
      meaningPrtD: " ",
      partImgD: part24,
    },
    {
      partD: "ራዲያተር",
      meaningPrtD: " ",
      partImgD: part25,
    },
    {
      partD: "ሰልቫቲዮ （የነዳጅ ጋን）",
      meaningPrtD: " ",
      partImgD: part26,
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
      ruleTitle: "የማሽከርከር ስነ-ባህሪ ትምህርት",
      partTitle: "የተሽከርካሪ የቴክኒክ ትምህርት",
      symbolTitle: "የማሽከርከር ህግና ስነ-ስርዓት ትምህርት",
      qnA: "የትራፊክ መብራት ምልክቶችን ትርጉም ያብራሩ",
      qnB: "",
      rule: "የትራፊክ መብራት ቀይ ሲበራ",
      meaning: "ሙያ",
      ruleImg:
        "በህብረተሰቡ የተከበረና የተወደደ የስራ መስክ ሲሆን በትምህርት፣ በስልጠና እና በልምድ የሚገኝ ነዉ፡፡",
      img2: "",
      symbol: "30",
      symbolMeaning: "የሚያስጠነቅቁ መንገድ ዳር ምልክቶች  /warning signs/",
      contentRule:
        "አሽከርካሪዎች በሚያሽከረክሩበት መንገድ ላይ ስለሚያጋጥማቸው አደገኛ ሁኔታ አስቀድመው እንዲያውቁና ጥንቃቄ እንዲያደርጉ የሚረዱ ምልክቶች ሲሆኑ ቅርፃቸዉ ሶስት ማዕዘን ፣ ጠርዛቸዉ ቀይ እና መደባቸዉ ነጭ ሲሆን የሚያስተላለፉት መልክት በጥቁር ቀለም በተሰራ በምስል፣ በቀስት ወይም በቁጥር ሊሆን ይችላል፡፡",
      symbolImg: image1,
      part: "ሞተር （ኢንጅን）",
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
      contentRule:
        drivBox.traficSymbol[symbolStore.getState()].contentRuleMeaning,
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
                        <h2
                          className="ruleMeaningDisplay"
                          style={{ fontWeight: "bold" }}
                        >
                          {`${this.state.meaning}`}
                        </h2>
                      </Col>
                      <Col md="6" style={{ paddingTop: "10px" }}>
                        <h2 className="ruleMeaningDisplay">
                          {`${this.state.ruleImg}`}
                        </h2>
                      </Col>
                      {/* <Col md="6">
                        <div className="rulePictorial">
                          <img src={ruleImg} alt="" />
                        </div>
                      </Col> */}
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
                        <h3 className="ruleMeaningDisplay">{`${this.state.symbolMeaning}`}</h3>
                        <p>{`${this.state.contentRule}`}</p>
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
                        <h2 className="ruleMeaningDisplay">{`${this.state.part}`}</h2>
                        {/* <h6
                          className="ruleMeaningDisplay"
                          style={{ marginTop: "0" }}
                        >{`${this.state.partMeaning}`}</h6> */}
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
