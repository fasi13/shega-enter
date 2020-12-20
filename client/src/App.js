import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";

import Login from "./components/auth/Login";
import Admin from "./components/pages/Admin";
import NotFound from "./components/layout/NotFound";
import { Provider } from "react-redux";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Register from "./components/auth/Register";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentAdmin, logoutAdmin } from "./actions/authActions";
//////////////////////////User Components///////////////////////////////////////
import WelcomePage from "./components/users/welcomePage/WelcomePage";
import WelcomeLogin from "./components/users/welcomePage/WelcomeLogin";
import ThanksPage from "./components/users/thanksPage/ThanksPage";
import HomePage from "./components/users/homePage/HomePage";
import LanguageFront from "./components/users/language/LanguageFront";
import LanguageLanding from "./components/users/language/LanguageLandingPage/LanguageLanding";
import LangBiggenerVocab from "./components/pages/beginner/LangBiggenerVocab";
import LangBiggenerGrammar from "./components/pages/beginner/LangBiggenerGrammar";
import LangBiggenerTutorial from "./components/pages/beginner/LangBiggenerTutorial";
import LangBiggenerExercise from "./components/pages/beginner/LangBegginerExercise";

import LangInterMedVocab from "./components/pages/intermediate/LangInterMedVocab";
import LangInterMedGrammar from "./components/pages/intermediate/LangInterMedGrammar";
import LangInterMedTutorial from "./components/pages/intermediate/LangInterMedTutorial";
import LangInterMedExercise from "./components/pages/intermediate/LangInterMedExercise";

import LangAdvancedVocab from "./components/pages/advanced/LangAdvancedVocab";
import LangAdvancedGrammar from "./components/pages/advanced/LangAdvancedGrammar";
import LangAdvancedTutorial from "./components/pages/advanced/LangAdvancedTutorial";
import LangAdvancedExercise from "./components/pages/advanced/LangAdvancedExercise";

import Begginer from "./components/users/language/Biggner/Beginner";
import Intermediet from "./components/users/language/Intermediet/Intermediet";
import Advanced from "./components/users/language/Advanced/Advanced";
import DriveFront from "./components/users/driving/DriveFront";

//////////////////////////Style///////////////////////////////////////
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/font-awesome/css/font-awesome.css";
import "../node_modules/jquery/dist/jquery.min";
import "../node_modules/popper.js/dist/popper";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentAdmin(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutAdmin());
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              {/* <Route exact path="/" component={WelcomePage} /> */}
              <Route
                exact
                path="/"
                render={(props) => <WelcomePage {...props} />}
              />
              {/* <Route exact path="/" component={Login} /> */}
              <Route
                exact
                path="/thanks"
                render={(props) => <ThanksPage {...props} />}
              />

              <Route exact path="/loginPanel" component={WelcomeLogin} />
              <Route
                exact
                path="/home"
                render={(props) => <HomePage {...props} />}
              />
              <Route
                exact
                path="/lang-land"
                render={(props) => <LanguageLanding {...props} />}
              />
              <Route
                exact
                path="/begginer"
                render={(props) => <Begginer {...props} />}
              />
              <Route
                exact
                path="/intermediet"
                render={(props) => <Intermediet {...props} />}
              />
              <Route
                exact
                path="/advanced"
                render={(props) => <Advanced {...props} />}
              />
              <Route
                exact
                path="/suhbesgcarEbnetdelratnagiunamgeent"
                render={(props) => <LanguageFront {...props} />}
              />
              <Route
                exact
                path="/suhbesgcarEbnetdedrrtiavinment"
                render={(props) => <DriveFront {...props} />}
              />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/biggenerVocab"
                component={LangBiggenerVocab}
              />
              <Route
                exact
                path="/biggenerGra"
                component={LangBiggenerGrammar}
              ></Route>
              <Route
                exact
                path="/biggenerTutorVedio"
                component={LangBiggenerTutorial}
              ></Route>
              <Route
                exact
                path="/biggenerExercise"
                component={LangBiggenerExercise}
              ></Route>
              <Route
                exact
                path="/interMedVocab"
                component={LangInterMedVocab}
              />
              <Route
                exact
                path="/interMedGra"
                component={LangInterMedGrammar}
              ></Route>
              <Route
                exact
                path="/interMedTutorVedio"
                component={LangInterMedTutorial}
              ></Route>
              <Route
                exact
                path="/interMedExercise"
                component={LangInterMedExercise}
              ></Route>
              <Route
                exact
                path="/advancedVocab"
                component={LangAdvancedVocab}
              />
              <Route
                exact
                path="/advancedGra"
                component={LangAdvancedGrammar}
              ></Route>
              <Route
                exact
                path="/advancedTutorVedio"
                component={LangAdvancedTutorial}
              ></Route>
              <Route
                exact
                path="/advancedExercise"
                component={LangAdvancedExercise}
              ></Route>
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/admins" component={Admin} />
              </Switch>
              <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
