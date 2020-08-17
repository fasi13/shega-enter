import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Jokes from "./components/pages/JokesPage";
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
import ThanksPage from "./components/users/thanksPage/ThanksPage";
import HomePage from "./components/users/homePage/HomePage";
import JokeFront from "./components/users/jokes/JokeFront"
import LanguageFront from "./components/users/language/LanguageFront";
import DriveFront from "./components/users/driving/DriveFront";

//////////////////////////Style///////////////////////////////////////
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/popper';

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
    render () {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Switch>
                            {/* <Route exact path="/" component={WelcomePage} /> */}
                            <Route 
                                exact
                                path="/" 
                                render={(props) => <WelcomePage {...props} />} />
                            {/* <Route exact path="/" component={Login} /> */}
                            <Route 
                                exact
                                path="/thanks" 
                                render={(props) => <ThanksPage {...props} />} />
                            <Route 
                                exact
                                path="/home" 
                                render={(props) => <HomePage {...props} />} />
                            <Route 
                                exact
                                path="/suhbesgcarEbnetdejrotkainment" 
                                render={(props) => <JokeFront {...props} />} /> 
                            <Route 
                                exact
                                path="/suhbesgcarEbnetdelratnagiunamgeent" 
                                render={(props) => <LanguageFront {...props} />} /> 
                            <Route 
                                exact
                                path="/suhbesgcarEbnetdedrrtiavinment" 
                                render={(props) => <DriveFront {...props} />} /> 
                            <Route exact path="/register" component={Register} /> 
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/jokes" component={Jokes}/>
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
