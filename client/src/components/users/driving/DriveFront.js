import React from "react";
import './Drive.css';

// reactstrap components
import { Button, Container, } from "reactstrap";
import { createStore} from 'redux'; 

// core components
import Footer from "../footer/Footer";
import DriveNavbar from "../navbars/DriveNavbar"

function drivRule(state = -1, action) {
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
    return state
  }
}
let ruleStore = createStore(drivRule)
////////////////Symbol///////////////////////////
function drivSymbol(stateA = -1, action) {
  switch(action.type){
    case 'INCREMENTA':
      return stateA + 1
    case 'DECREMENTA':
      return stateA - 1
    default:
    return stateA
  }
}
let symbolStore = createStore(drivSymbol)
//////////////////Parts/////////////////////////
function drivPart(stateW = -1, action) {
  switch(action.type){
    case 'INCREMENTW':
      return stateW + 1
    case 'DECREMENTW':
      return stateW - 1
    default:
    return stateW
  }
}
let partStore = createStore(drivPart)
///////////////////////////////////////////

class DriveFront extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ruleTitle: 'የትራፊክ ህጎች',
      partTitle: 'የመኪና ክፍሎች',
      symbolTitle: 'የትራፊክ ምልክቶች', 
      qnA: 'የትራፊክ መብራት ምልክቶችን ትርጉም ያብራሩ',
      qnB: '',
      rule: 'የትራፊክ መብራት ቀይ',
      meaning: 'ቁም ማለት ነው',
      img1: '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', 
      symbol: '',
      symbolMeaning: '',
      symbolImg: '',
      part: 'ስፖኪዮ',
      partMeaning: 'የመኪና መስታወት',
      partImg: '',
    }
    }

prevRuleHandle = () => {
      fetch('http://localhost:8080/rules', {
          method: 'get',
          headers: {'Content-Type': 'application/json'},
          // body: JSON.stringify({
              
          // }) 
      })
      .then(response => response.json())
      .then(data => {
          if(data){
            this.setState({rule: data[ruleStore.getState()].rule});  
            this.setState({meaning: data[ruleStore.getState()].meaning});  
            // var base64Flag = 'data:image/jpeg;base64,';
            this.setState({img1: data[ruleStore.getState()].ruleImg});         
          } 
      }
      )
  if(ruleStore.getState() < 3){
    ruleStore.dispatch({type: 'INCREMENT'})
  }
  }

nextRuleHandle = () => {
    fetch('http://localhost:8080/rules', {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        // body: JSON.stringify({
            
        // }) 
    })
    .then(response => response.json())
    .then(data => {
        if(data){
            this.setState({rule: data[ruleStore.getState()].rule});  
            this.setState({meaning: data[ruleStore.getState()].meaning}); 
            this.setState({img1: data[ruleStore.getState()].ruleImg});         
            // var base64Flag = 'data:image/jpeg;base64,';
            // this.setState({img1: base64Flag + data[ruleStore.getState()].ruleImg});  
          //assuming hex array input from server 
          /*var base64Flag = 'data:image/jpeg;base64,';
            var imageStr =
                this.arrayBufferToBase64(data.img.data.data);
            this.setState({
                img: base64Flag + imageStr
            )}*/
                       
        } }
    )
  if(ruleStore.getState() > 0){
    ruleStore.dispatch({type: 'DECREMENT'})
  }

}
 ////////////////Symbol////////////////////////////
nextSymbolHandle = () => {
  fetch('http://localhost:8080/symbols', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
          
      // }) 
  })
  .then(response => response.json())
  .then(data => { 
      if(data){
          this.setState({symbol: data[symbolStore.getState()].symbol});   
          this.setState({symbolMeaning: data[symbolStore.getState()].symbolMeaning}); 
          this.setState({symbolImg: data[symbolStore.getState()].symbolImg});                   
      } }
  )
if(symbolStore.getState() < 3){
  symbolStore.dispatch({type: 'INCREMENTA'})
}
}

prevSymbolHandle = () => {
  fetch('http://localhost:8080/symbols', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
          
      // }) 
  })
  .then(response => response.json())
  .then(data => {
      if(data){
        this.setState({symbol: data[symbolStore.getState()].symbol});   
        this.setState({symbolMeaning: data[symbolStore.getState()].symbolMeaning});  
        this.setState({symbolImg: data[symbolStore.getState()].symbolImg});                
      } }
  )
if(symbolStore.getState() > 0){
  symbolStore.dispatch({type: 'DECREMENTA'})
}

}
///////////////////////Parts/////////////////////////////////
nextPartHandle = () => {
  fetch('http://localhost:8080/parts', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
          
      // }) 
  })
  .then(response => response.json())
  .then(data => {
      if(data){
          this.setState({rule: data[partStore.getState()].part});   
          this.setState({meaning: data[partStore.getState()].partMeaning}); 
          this.setState({partImg: data[partStore.getState()].partImg});            
      } }
  )
if(partStore.getState() < 3){
  partStore.dispatch({type: 'INCREMENTW'})
}
}

prevPartHandle = () => {
  fetch('http://localhost:8080/parts', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
          
      // }) 
  })
  .then(response => response.json())
  .then(data => {
      if(data){
        this.setState({rule: data[partStore.getState()].part});   
        this.setState({meaning: data[partStore.getState()].partMeaning}); 
        this.setState({partImg: data[partStore.getState()].partImg});              
      } }
  )
if(partStore.getState() > 0){
  partStore.dispatch({type: 'DECREMENTW'})
}

}
/////////Array of binary to a Base64 string////////////////////
arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};
/////////////////////////////////////////////////////////////


  render(){
    const {img1, symbolImg, partImg} = this.state;
    var base64Flag = 'data:image/jpeg;base64,';
    // var img = base64Flag + this.state.img1;
    return (
    <>
      <DriveNavbar />
      <div className="driveContainer">
        <div className="driveHeaderContainer">
          <div className="content-center">
            <h2 className="slogan">በቀላሉ ይማሩ መንዳት ይቻሉ</h2>
            <div className="listContainer">
              <a className="list1" href="#traficRuleTitle">የትራፊክ ህጎች</a>
              <h3 className="list2">የትራፊክ ምልክቶች</h3>
              <h3 className="list3">የመኪና ክፍሎች</h3>
            </div>
            <h4 className="shegaDriveLanding" >Shega Entertainment</h4>
          </div>
        </div>

        <div className="driveCards">
          <Container >
            <div className="traficRuleContainer">
                <h2 className="traficRuleTitle" id="traficRuleTitle">{`${this.state.ruleTitle}`}</h2>
                <div className="traficRule">
                  <div className="ruleBody">
                    <div className="rightSide">
                      <h2 className="ruleDisplay">{`${this.state.rule}`}</h2>
                      <h2 className="ruleMeaningDisplay">{`${this.state.meaning}`}</h2>
                    </div>
                    <div className="leftSide">
                      <h2 className="rule">Rule</h2>
                      <h2 className="meaning">Meaning</h2>                  
                    </div>
                    <div className="rulePictorial">
                      <img src={base64Flag + `${img1}`} alt="" />
                    </div>
                  </div> 
                  <div>
                    <Button className="prevRule" onClick={this.prevRuleHandle}><i className="fa fa-backward" aria-hidden='true'></i></Button>
                  </div>
                  <div>
                    <Button className="nextRule" onClick={this.nextRuleHandle}><i className="fa fa-forward" aria-hidden='true'></i></Button>
                  </div>
                </div>
            </div>

            <div className="traficSymbolContainer">
                <h2 className="traficSymbolTitle" id="traficSymbolTitle">{`${this.state.symbolTitle}`}</h2>
                <div className="traficSymbol">
                  <div className="symbolBody">
                    <div className="rightSide">
                      <h2 className="symbolDisplay">{`${this.state.symbol}`}</h2>
                      <h2 className="symbolMeaningDisplay">{`${this.state.symbolMeaning}`}</h2>
                    </div>
                    <div className="leftSide">
                      <h2 className="symbol">Symbol</h2>
                      <h2 className="symbolMeaning">Meaning</h2>                  
                    </div>
                    <div className="symbolPictorial">
                      <img src={base64Flag + `${symbolImg}`} alt="" />
                    </div>
                  </div> 
                  <div>
                    <Button className="prevSymbol" onClick={this.prevSymbolHandle}><i className="fa fa-backward" aria-hidden='true'></i></Button>
                  </div>
                  <div>
                    <Button className="nextSymbol" onClick={this.nextSymbolHandle}><i className="fa fa-forward" aria-hidden='true'></i></Button>
                  </div>
                </div>
            </div>

            <div className="partContainer">
                <h2 className="partTitle" id="partTitle">{`${this.state.partTitle}`}</h2>
                <div className="part">
                  <div className="partBody">
                    <div className="rightSide">
                      <h2 className="partDisplay">{`${this.state.part}`}</h2>
                      <h2 className="partMeaningDisplay">{`${this.state.partMeaning}`}</h2>
                    </div>
                    <div className="leftSide">
                      <h2 className="part">Symbol</h2>
                      <h2 className="partMeaning">Meaning</h2>                  
                    </div>
                    <div className="partPictorial">
                      <img src={base64Flag + `${partImg}`} alt="" />
                    </div>
                  </div> 
                  <div>
                    <Button className="prevPart" onClick={this.prevPartHandle}><i className="fa fa-backward" aria-hidden='true'></i></Button>
                  </div>
                  <div>
                    <Button className="nextPart" onClick={this.nextPartHandle}><i className="fa fa-forward" aria-hidden='true'></i></Button>
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
