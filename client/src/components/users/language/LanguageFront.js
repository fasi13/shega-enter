import React from "react";
import './Language.css';
import Audio1 from '../../../assets/mp3/sound1.mp3';
 
// reactstrap components
import { Button, Container, } from "reactstrap";
import { createStore} from 'redux'; 

// core components
import Footer from "../footer/Footer";
import LangNavbar from "../navbars/LangNavbar";

function vocLang(state = -1, action) {
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
    return state
  }
}
let vocStore = createStore(vocLang)
///////////////////tens////////////////////////
function tensLang(stateA = -1, action) {
  switch(action.type){
    case 'INCREMENTA':
      return stateA + 1
    case 'DECREMENTA':
      return stateA - 1
    default:
    return stateA
  }
}
let tensStore = createStore(tensLang)
///////////////////test////////////////////////
function testLang(stateW = -1, action) {
  switch(action.type){
    case 'INCREMENTW':
      return stateW + 1
    case 'DECREMENTW':
      return stateW - 1
    default:
    return stateW
  }
}
let storeTest = createStore(testLang)
///////////////////video////////////////////////
function videoLang(stateW = -1, action) {
  switch(action.type){
    case 'INCREMENTW':
      return stateW + 1
    case 'DECREMENTW':
      return stateW - 1
    default:
    return stateW
  }
}
let storeVideo = createStore(videoLang)
///////////////////////////////////////////

class LanguageFront extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        voc: 'Vocabulary',
        tens: 'Sentences',
        exc: 'Exercice',
        english: 'Delicious',
        amharic: 'ጣፋጭ',
        tenseType: 'Past Tense',
        structure: 'S + V3 + O',
        tenseExample: 'I saw her',
        test: 'what is the meaning of destiny?',
        answer: 'መዳረሻ',
        dispQn: 'Click Qn to Start the test',
        dispAns: '',
        langVideoTitle: 'Tutorial Video',
        langVideoSrc: 'https://www.youtube.com/embed/ZmUm29fc6nI',

    }
    }

nextVocHandle = () => {
      fetch('http://localhost:8080/vocab', {
          method: 'get',
          headers: {'Content-Type': 'application/json'},
          // body: JSON.stringify({
              
          // }) 
      })
      .then(response => response.json())
      .then(data => {
          if(data){
            this.setState({english: data[vocStore.getState()].english});  
            this.setState({amharic: data[vocStore.getState()].amharic});             
          } }
      )
  if(vocStore.getState() < 3){
    vocStore.dispatch({type: 'INCREMENT'})
  }
  }

prevVocHandle = () => {
    fetch('http://localhost:8080/vocab', {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        // body: JSON.stringify({
            
        // }) 
    })
    .then(response => response.json())
    .then(data => {
        if(data){
            this.setState({english: data[vocStore.getState()].english});  
            this.setState({amharic: data[vocStore.getState()].amharic});                 
        } }
    )
  if(vocStore.getState() > 0){
    vocStore.dispatch({type: 'DECREMENT'})
  }

}
 ///////////////////Tense/////////////////////////
nextTensHandle = () => {
    fetch('http://localhost:8080/tense', {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        // body: JSON.stringify({
            
        // }) 
    })
    .then(response => response.json())
    .then(data => { 
        if(data){
            this.setState({tenseType: data[tensStore.getState()].tnsTyp});   
            this.setState({structure: data[tensStore.getState()].tnsStrucure}); 
            this.setState({tenseExample: data[tensStore.getState()].tnsExmpl});                    
        } }
    )
  if(tensStore.getState() < 3){
    tensStore.dispatch({type: 'INCREMENTA'})
  }
}

prevTensHandle = () => {
  fetch('http://localhost:8080/tense', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
          
      // }) 
  })
  .then(response => response.json())
  .then(data => {
      if(data){
        this.setState({tenseType: data[tensStore.getState()].tnsTyp});  
        this.setState({structure: data[tensStore.getState()].tnsStrucure});  
        this.setState({tenseExample: data[tensStore.getState()].tnsExmpl});                
      } }
  )
if(tensStore.getState() > 0){
  tensStore.dispatch({type: 'DECREMENTA'})
}

}
/////////////////////Exercise//////////////////////////////////
nextTestHandle = () => {
  fetch('http://localhost:8080/test', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
          
      // }) 
  })
  .then(response => response.json())
  .then(data => {
      if(data){
          this.setState({test: data[storeTest.getState()].qn}); 
          this.setState({answer: data[storeTest.getState()].ans});   
          this.setState({dispQn: 'Click Qn to see the next question'}); 
          this.setState({dispAns: ''});                
      } }
  )
if(storeTest.getState() < 3){
  storeTest.dispatch({type: 'INCREMENTW'})
}
}

prevTestHandle = () => {
  fetch('http://localhost:8080/test', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
          
      // }) 
  })
  .then(response => response.json())
  .then(data => {
      if(data){
        this.setState({test: data[storeTest.getState()].qn}); 
        this.setState({answer: data[storeTest.getState()].ans}); 
        this.setState({dispQn: 'Click Qn to see the previous question'}); 
        this.setState({dispAns: ''});              
      } }
  )
if(storeTest.getState() > 0){
  storeTest.dispatch({type: 'DECREMENTW'})
}

}

displayQn = () => {
  this.setState({dispQn: this.state.test})
  this.setState({dispAns: 'Click Ans to see the answer'})
}
displayAns = () => {
  this.setState({dispAns: this.state.answer})
}
/////////////////////////////////////////////////////////////
/////////////////////Video//////////////////////////////////
nextlangVideoHandle = () => {
  fetch('http://localhost:8080/langVideo', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
          
      // }) 
  })
  .then(response => response.json())
  .then(data => {
      if(data){
          this.setState({langVideoSrc: data[storeVideo.getState()].langVideoSrc});         
      } }
  )
if(storeVideo.getState() < 3){
  storeVideo.dispatch({type: 'INCREMENTW'})
}
}

prevlangVideoHandle = () => {
  fetch('http://localhost:8080/langVideo', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
  })
  .then(response => response.json())
  .then(data => {
      if(data){
        this.setState({langVideoSrc: data[storeVideo.getState()].langVideoSrc});                
      } }
  )
if(storeVideo.getState() > 0){
  storeVideo.dispatch({type: 'DECREMENTW'})
}

}
/////////////////////////////////////////////////////////////////////

  render(){
    const {langVideoSrc} = this.state;

    return (
    <>
      <LangNavbar />
      <div className="languageContainer">
        <div className="langHeaderContainer">
          <div className="content-center">
            <h1 className="slogan">Communicate to the World</h1>
            <div className="listContainer">
              <a className="list1" href="#vocTtl">English Vocabulary</a>
              <a className="list2" href="#tensTtl">Types of Tences</a>
              <a className="list3" href="#testTtl">Self Test</a>
            </div>
            <h4 className="shegaLangLang" >Shega Entertainment</h4>
          </div>
        </div> 

        <div className="languageCards">
          <Container >
            <div className="vocabularyContainer">
                <h2 className="vocTtl" id="vocTtl">{`${this.state.voc}`}</h2>
                <div className="vocabulary">
                  <div className="vocBody"> 
                    <div className="rightSide">
                      <h2 className="vocEngDisplay">{`${this.state.english}`}</h2>
                      <h2 className="vocAmDisplay">{`${this.state.amharic}`}</h2>
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
                    <Button className="prevVoc" onClick={this.prevVocHandle}><i className="fa fa-backward" aria-hidden='true'></i></Button>                  
                  </div>
                  <div>
                    <Button className="nextVoc" onClick={this.nextVocHandle}><i className="fa fa-forward" aria-hidden='true'></i></Button>
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
                  <Button className="prevTens" onClick={this.prevTensHandle}><i className="fa fa-backward" aria-hidden='true'></i></Button>                  
                </div>
                <div>
                  <Button className="nextTens" onClick={this.nextTensHandle}><i className="fa fa-forward" aria-hidden='true'></i></Button>
                </div>
              </div>
            </div>

            <div className="tenseContainer">
              <h2 className="langVideoTitle" id="langVideoTitle">{`${this.state.langVideoTitle}`}</h2>
              <div className="tense">
                <div className="langVideoBody">
                    <iframe title="firstVideo" src={`${langVideoSrc}`}
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                  </iframe>
                </div>
                <div>
                  <Button className="prevTens" onClick={this.prevlangVideoHandle}><i className="fa fa-backward" aria-hidden='true'></i></Button>
                </div>
                <div>
                  <Button className="nextTens" onClick={this.nextlangVideoHandle}><i className="fa fa-forward" aria-hidden='true'></i></Button>
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
                    <h2><Button className="qn" onClick={this.displayQn}>Qn</Button></h2>
                    <Button className="ans" onClick={this.displayAns}>Ans</Button>
                  </div>
                </div> 
                 <div>
                  <Button className="prevTest" onClick={this.prevTestHandle}><i className="fa fa-backward" aria-hidden='true'></i></Button>                  
                </div>
                <div>
                  <Button className="nextTest" onClick={this.nextTestHandle}><i className="fa fa-forward" aria-hidden='true'></i></Button>
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

export default LanguageFront;
