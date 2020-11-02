import React from "react";
import "./Drive.css";
import { Card, Collapse } from "react-bootstrap";
//images
import image1 from "../../../assets/img/rule/1.png";
import image2 from "../../../assets/img//rule/22.jpg";
import image3 from "../../../assets/img//rule/33.png";
import image5 from "../../../assets/img//rule/55.png";
import image6 from "../../../assets/img//rule/66.png";
import image7 from "../../../assets/img//rule/77.png";
import image8 from "../../../assets/img//rule/88.jpeg";
import image9 from "../../../assets/img//rule/99.jpg";
// import image10 from "../../../assets/img//rule/100.png";
import image11 from "../../../assets/img//rule/111.png";
import image12 from "../../../assets/img//rule/112.png";
import image13 from "../../../assets/img//rule/113.png";
import image14 from "../../../assets/img//rule/114.png";
import remember from "../../../assets/img/rule/memories.jpg";
import part5 from "../../../assets/img/part/moter.png";
import part6 from "../../../assets/img/part/pestata.png";
import part7 from "../../../assets/img/part/fuelPump.png";
import part8 from "../../../assets/img/part/injectionPump.png";
import part9 from "../../../assets/img/part/kamShaft.png";
import part10 from "../../../assets/img/part/filtro.png";
// import part11 from "../../../assets/img/part/moter.png";
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
import Slider from "react-slick";
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
      open: false,
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
          ruleImgD:
            "ፍላጎትን፣አመለካከትን፣እሴትን፣ መነሳሳትንና ማንኛውንም ግብ ያለመ የሰወችን ድርጊት ያጠቃልላል፡፡",
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
          contentRuleMeaning:
            "ቅርፃቸዉ የተለያየ ሆኖ  የሚያስተላለፉት መልዕክት ቅድሚያ ስጥ የሚል ነዉ፡፡",
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
    };
  }

  Slider() {
    return this.state.traficRule.map((data) => {
      return (
        <dev key={data}>
          <Card style={{ width: "auto" }}>
            <Card.Img variant="top" src={remember} />
            <Card.Body>
              <Card.Title>{data.meaningD}</Card.Title>
              <div id="container">
                <div id="content">
                  <Card.Text>{data.ruleImgD}.</Card.Text>
                </div>
              </div>
              {/* <Card.Text>{data.ruleImgD}.</Card.Text> */}
              {/* <Button
                  variant="primary"
                  onClick={() => this.setState({ open: !this.state.open })}
                >
                  Read More
                </Button> */}
            </Card.Body>

            <Collapse in={this.state.open}>
              <div id="example-collapse-text" style={{ paddingLeft: "10px" }}>
                {data.ruleImgD}
              </div>
            </Collapse>
          </Card>
        </dev>
      );
    });
  }

  SliderRule() {
    return this.state.traficSymbol.map((data) => {
      return (
        <dev key={data}>
          <Card style={{ width: "auto" }}>
            <div
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                height: "300px",
                width: "300px",
              }}
            >
              <Card.Img
                variant="top"
                src={data.eymImgD}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>

            <Card.Body>
              <Card.Title>{data.meaningSymbD}</Card.Title>
              <div id="container">
                <div id="content">
                  <Card.Text>{data.contentRuleMeaning}.</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </dev>
      );
    });
  }

  SliderBodyPart() {
    return this.state.traficPart.map((data) => {
      return (
        <dev key={data}>
          <Card style={{ width: "auto" }}>
            <div
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                height: "300px",
                width: "300px",
              }}
            >
              <Card.Img
                variant="top"
                src={data.partImgD}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
            <Card.Body>
              <Card.Title>{data.partD}</Card.Title>
              {/* <Card.Text>{data.contentRuleMeaning}.</Card.Text> */}
            </Card.Body>
          </Card>
        </dev>
      );
    });
  }

  render() {
    const { symbolImg, partImg, drvVideoSrc } = this.state;
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
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
              <div
                className="traficRuleContainer"
                style={{ paddingBottom: "50px" }}
              >
                <h2 className="traficRuleTitle" id="traficRuleTitle">
                  {`${this.state.ruleTitle}`}
                </h2>

                <Slider {...settings}>{this.Slider()}</Slider>
              </div>

              <div
                className="traficRuleContainer"
                style={{ paddingBottom: "50px" }}
              >
                <h2
                  className="traficRuleTitle"
                  id="traficSymbolTitle"
                >{`${this.state.symbolTitle}`}</h2>
                <Slider {...settings}>{this.SliderRule()}</Slider>
              </div>

              <div
                className="traficRuleContainer"
                style={{ paddingBottom: "50px" }}
              >
                <h2
                  className="traficRuleTitle"
                  id="traficPartTitle"
                >{`${this.state.partTitle}`}</h2>
                <Slider {...settings}>{this.SliderBodyPart()}</Slider>
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
