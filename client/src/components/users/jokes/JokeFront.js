import React from "react";
import './Joke.css';
import { Button, Container } from "reactstrap";
import { createStore} from 'redux'; 
// core components
import Footer from "../footer/Footer";
import JokeNavbar from "../navbars/JokeNavbar"
import icon from '../../../assets/img/logo.png';
import men from '../../../assets/img/men.png';



function selJoke(state = -1, action) {
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
    return state
  }
}
let selStore = createStore(selJoke)
selStore.subscribe(() => {
// console.log(famStore.getState())
}
)
//////////////////FAM JOK/////////////////////////
function famJok(stateA = -1, action) {
  switch(action.type){
    case 'INCREMENTA':
      return stateA + 1
    case 'DECREMENTA':
      return stateA - 1
    default:
    return stateA
  }
}
let storeFam = createStore(famJok)
/////////////////WORK JOK//////////////////////////
function workJok(stateW = -1, action) {
  switch(action.type){
    case 'INCREMENTW':
      return stateW + 1
    case 'DECREMENTW':
      return stateW - 1
    default:
    return stateW
  }
}
let storeWork = createStore(workJok)
//////////////////////////////////////////////
class JokeFront extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        titleS: 'የተመረጡ ቀልዶች',
        titleF: 'የቤተሰብ ቀልዶች',
        titleW: 'የስራ ቦታ ቀልዶች',
        jokeSA: 'በጣም አጭር ነው ቁመቱ ስትይ',
        jokeSB: 'በጣም አጭር',
        jokeSC: 'ምን ያህል?',
        jokeSD: 'ካስነጠሰ ግንባሩ መሬት ይነካል',
        jokeFA: 'እኛ ቤት ከበላን በኋላ ነው ምንፀልየው',
        jokeFB: 'ለምን?',
        jokeFC: 'ሁሌ የሚሰራው ምግብ ለሆድ አስጊ ስለሆነ',
        jokeFD: 'ሃሃሃ',
        jokeWA: 'ይሄ ኮምፒውተር ስራህን በግማሽ ያቀልልካል',
        jokeWB: 'ጥሩ,2ት ስጠኝና ስራዬን በሙሉ ይስራልኝ',
        jokeWC: 'ሃሃሃ',
        jokeWD: 'ሃሃሃ',
        shegaDisp: 'landingShega',
    }
    }

nextSelectHandle = () => {
      fetch('http://localhost:8080/choosenJoks', {
          method: 'get',
          headers: {'Content-Type': 'application/json'},
          // body: JSON.stringify({
              
          // }) 
      })
      .then(response => response.json())
      .then(data => {
          if(data){
              this.setState({jokeSA: data[selStore.getState()].joke1});         
              this.setState({jokeSB: data[selStore.getState()].joke2});
              this.setState({jokeSC: data[selStore.getState()].joke3});  
              this.setState({jokeSD: data[selStore.getState()].joke4});         
          } }
      )
  if(selStore.getState() < 3){
    selStore.dispatch({type: 'INCREMENT'})
  } else if(selStore.getState() === 3){
    
  }
  }

prevSelectHandle = () => {
      fetch('http://localhost:8080/choosenJoks', {
          method: 'get',
          headers: {'Content-Type': 'application/json'},
          // body: JSON.stringify({
              
          // }) 
      })
      .then(response => response.json())
      .then(data => {
          if(data){
            this.setState({jokeSA: data[selStore.getState()].joke1});         
            this.setState({jokeSB: data[selStore.getState()].joke2});
            this.setState({jokeSC: data[selStore.getState()].joke3});  
            this.setState({jokeSD: data[selStore.getState()].joke4});              
          } }
      )
    if(selStore.getState() > 0){
      selStore.dispatch({type: 'DECREMENT'})
    }
  
  }
 ////////////////////////////////////////////
 nextFamHandle = () => {
  fetch('http://localhost:8080/familyJoks', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
      // }) 
  })
  .then(response => response.json())
  .then(data => { 
      if(data){
        this.setState({jokeFA: data[storeFam.getState()].joke1});         
        this.setState({jokeFB: data[storeFam.getState()].joke2});
        this.setState({jokeFC: data[storeFam.getState()].joke3});
        this.setState({jokeFD: data[storeFam.getState()].joke4});                       
      } }
  )
if(storeFam.getState() < 3){
  storeFam.dispatch({type: 'INCREMENTA'})
}
}

prevFamHandle = () => {
  fetch('http://localhost:8080/familyJoks', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
          
      // }) 
  })
  .then(response => response.json())
  .then(data => {
      if(data){
        this.setState({jokeFA: data[storeFam.getState()].joke1});         
        this.setState({jokeFB: data[storeFam.getState()].joke2});
        this.setState({jokeFC: data[storeFam.getState()].joke3});  
        this.setState({jokeFD: data[storeFam.getState()].joke4});              
      } }
  )
if(storeFam.getState() > 0){
  storeFam.dispatch({type: 'DECREMENTA'})
}

}
////////////////////////////////////////////////////////////////
nextWorkHandle = () => {
  fetch('http://localhost:8080/officeJoks', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
          
      // }) 
  })
  .then(response => response.json())
  .then(data => {
      if(data){
         this.setState({jokeWA: data[storeWork.getState()].joke3});  
         this.setState({jokeWB: data[storeWork.getState()].joke3}); 
         this.setState({jokeWC: data[storeWork.getState()].joke3});  
         this.setState({jokeWD: data[storeWork.getState()].joke4});         
      } }
  )
if(storeWork.getState() < 3){
  storeWork.dispatch({type: 'INCREMENTW'})
}
}

prevWorkHandle = () => {
  fetch('http://localhost:8080/officeJoks', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({
          
      // }) 
  })
  .then(response => response.json())
  .then(data => {
      if(data){
        this.setState({jokeWA: data[storeWork.getState()].joke3});  
        this.setState({jokeWB: data[storeWork.getState()].joke3}); 
        this.setState({jokeWC: data[storeWork.getState()].joke3});  
        this.setState({jokeWD: data[storeWork.getState()].joke4});               
      } }
  )
if(storeWork.getState() > 0){
  storeWork.dispatch({type: 'DECREMENTW'})
}

}
/////////////////////////////////////////////////////////////
// contDisplay = () => {
//   if (
//     document.documentElement.scrollTop > 49 
//   ) {
//     console.log("true");
//     this.setState({shegaDisp: "landingShegaOff"});
//   } else if (
//     document.documentElement.scrollTop < 50 
//   ) {
//     console.log("false");
//     this.setState({shegaDisp: "landingShega"});
//   }
// };
/////////////////////////////////////////////////////////////
  render(){
    return ( 
    <>
      <JokeNavbar />
      <div className="jokeContainer">
        <div className="jokeHeaderContainer">
          <div className="content-center">
            <h1 className="slogan">ሳቅ በሽታ የመከላከል አቅምን ይጨምራል!</h1>
            <div className="listContainer">
              <a className="list1" href="#selectedJokTitle">የተመረጡ ቀልዶች</a>
              <a className="list2" href="#familyJokTitle">የቤተሰብ ቀልዶች</a> 
              <a className="list3" href="#workJokTitle">የስራ ቦታ ቀልዶች</a>
            </div>
            <h4 id="landingShegajok" className="landingShegaJok" >Shega Entertainment</h4>
          </div>
        </div> 

        <div className="jokeCards">
          <Container >
            <div className="selectedJokContainer">
              <h2 className="selectedJokTitle" id="selectedJokTitle">{`${this.state.titleS}`}</h2>
              <div className="selectedJokes">
                <div className="selectedBody">
                  <h2 className="selJokMsg">
                    <img src={icon} alt="" className="imogy" align="left" /><p>{`${this.state.jokeSA}`}</p>
                    <img src={men} alt="" className="imogy" align="left" /><p>{`${this.state.jokeSB}`}</p>
                    <img src={icon} alt="" className="imogy" align="left" /> <p>{`${this.state.jokeSC}`}</p>
                    <img src={men} alt="" className="imogy" align="left" /><p>{`${this.state.jokeSD}`}</p>
                  </h2>
                </div> 
                <div>
                  <Button className="prevSel" onClick={this.prevSelectHandle}><i className="fa fa-backward" aria-hidden='true'></i></Button>  
                </div>
                <div>
                  <Button className="nextSel" onClick={this.nextSelectHandle}><i className="fa fa-forward" aria-hidden='true'></i></Button>
                </div>
              </div>
            </div>

            <div className="familyJokContainer">
              <h2 className="familyJokTitle" id="familyJokTitle">{`${this.state.titleF}`}</h2>
              <div className="familyJokes">
                <div className="familyBody">
                  <h2 className="familyMsg">
                    <img src={icon} alt="" className="imogy" align="left" /><p>{`${this.state.jokeFA}`}</p>
                    <img src={men} alt="" className="imogy" align="left" /><p>{`${this.state.jokeFB}`}</p>
                    <img src={icon} alt="" className="imogy" align="left" /><p>{`${this.state.jokeFC}`}</p>
                    <img src={men} alt="" className="imogy" align="left" /><p>{`${this.state.jokeFD}`}</p>
                  </h2>
                </div> 
                <div>
                  <Button className="prevFam" onClick={this.prevFamHandle}><i className="fa fa-backward" aria-hidden='true'></i></Button>
                </div>
                <div>
                  <Button className="nextFam" onClick={this.nextFamHandle}><i className="fa fa-forward" aria-hidden='true'></i></Button>
                </div>
              </div>
            </div>
           
            <div className="workJokContainer">
              <h2 className="workJokTitle" id="workJokTitle">{`${this.state.titleW}`}</h2>
              <div className="workJokes">
                <div className="workBody">
                  <h2 className="workMsg">
                    <img src={icon} alt="" className="imogy" align="left" /><p>{`${this.state.jokeWA}`}</p>
                    <img src={men} alt="" className="imogy" align="left" /><p>{`${this.state.jokeWB}`}</p>
                    <img src={icon} alt="" className="imogy" align="left" /><p>{`${this.state.jokeWC}`}</p>
                    <img src={men} alt="" className="imogy" align="left" /><p>{`${this.state.jokeWD}`}</p>
                  </h2>
                </div> 
                <div>
                  <Button className="prevWork" onClick={this.prevWorkHandle}><i className="fa fa-backward" aria-hidden='true'></i></Button>
                </div>
                <div>
                  <Button className="nextWork" onClick={this.nextWorkHandle}><i className="fa fa-forward" aria-hidden='true'></i></Button>
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

export default JokeFront;
