import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
// import { increment } from "../../actions/subCountAction"
import { logoutAdmin } from "../../actions/authActions";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons/faList";
// import {Link} from "react-router-dom";
// import {faAdminAlt} from "@fortawesome/free-solid-svg-icons/faUserAlt";

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            tolaNumVideo: 0,
            totalNumUploads: 0,
            subscriberNumber: 0,
            numSelectedJokes: 0,
            numFamilyJokes: 0,
            numOfficeJokes: 0,
            totalNumJoks: 0,
            numVocabulary: 0,
            numSentens: 0,
            numLangVideo: 0,
            numExcercises: 0,
            totalLangUpload: 0,
            numRule: 0,
            numSymbol: 0,
            numParts: 0,
            numDrivVideo: 0,
            totalDrivUpload: 0,
        }
    }

    

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
 
    render() {
        //const { user } = this.props.auth;
        const {tolaNumVideo, totalNumUploads, subscriberNumber,  numSelectedJokes,
            numFamilyJokes,  numOfficeJokes, totalNumJoks, numVocabulary,
            numSentens, numLangVideo,  numExcercises, totalLangUpload, numRule,
            numSymbol,  numParts,  numDrivVideo, totalDrivUpload} = this.state;

            // this.setState({totalNumJoks: (numSelectedJokes + numFamilyJokes + numOfficeJokes)})
            // this.setState({totalLangUpload: (numVocabulary + numSentens + numLangVideo)})
            // this.setState({totalDrivUpload: (numRule + numSymbol + numParts + numDrivVideo + numExcercises)})
            // this.setState({tolaNumVideo: (numLangVideo + numDrivVideo)})
            // this.setState({totalNumUploads: (totalNumJoks + totalLangUpload + totalDrivUpload)})
        // const coutSubscribers = useSelector(state => state.subCounterReducer);
        // const dispatch = useDispatch();    
        return (
            <div>
                <Navbar/>
                <div className="d-flex" id="wrapper">
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <button className="btn btn-link mt-2" id="menu-toggle"><FontAwesomeIcon icon={faList}/></button>
                            <h1 className="mt-2 text-primary">Dashboard</h1>
                            <div className="row px-2">
                                <div className="col-sm-12 p-sm-2">
                                    <div className="card bg-info text-white shadow-lg">
                                        <div className="card-body">
                                            <h4 className="card-title text-center">Shega</h4>
                                            <div className="row px-2">
                                                <div className="col-sm-1 p-sm-2  mr-3 "></div>
                                                <div className="col-sm-3 p-sm-2 bg-secondary mr-3 ">
                                                   <h5 className="card-title text-center">Total Number of Video</h5>
                                                    <p className="text-center"><strong>{tolaNumVideo}</strong></p>
                                                </div>
                                                <div className="col-sm-3 p-sm-2 bg-secondary mr-3">
                                                    <h5 className="card-title text-center">Total Number of Uploads</h5>
                                                    <p className="text-center"><strong>{totalNumUploads}</strong></p> 
                                                </div>
                                                <div className="col-sm-3 p-sm-2 bg-secondary ">
                                                    <h5 className="card-title text-center">Number of Subscribers</h5>
                                                    <p className="text-center"><strong>{subscriberNumber}</strong></p> 
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 p-sm-2">
                                    <div className="card bg-primary text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title">Jokes</h5>
                                            <h6>Number of Selected Jokes <strong>{numSelectedJokes}</strong></h6>
                                            <h6>Number of Family Jokes <strong>{numFamilyJokes}</strong></h6>
                                            <h6>Number of Office Jokes <strong>{numOfficeJokes}</strong></h6>
                                            <h6 style={{opacity: 0}}>Number of Office Jokes <strong>100</strong></h6>
                                            <h5 style={{color: "white"}}>Total Number of Jokes <strong>{totalNumJoks}</strong></h5>
                                            <a href="#pablo" className="btn btn-light">Go to Jokes</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 p-sm-2">
                                    <div className="card bg-info text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title">Languages</h5>
                                            <h6>Number of Vocabulary <strong>{numVocabulary}</strong></h6>
                                            <h6>Number of Sentenses <strong>{numSentens}</strong></h6>
                                            <h6>Number of Video <strong>{numLangVideo}</strong></h6>
                                            <h6>Number of Exrecises <strong>{numExcercises}</strong></h6>
                                            <h5 style={{color: "white"}}>Number of Uploads <strong>{totalLangUpload}</strong></h5>
                                            <a href="#pablo" className="btn btn-light">Go to Languages</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 p-sm-2">
                                    <div className="card bg-dark text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title">Driving License</h5>
                                            <h6>Number of Rules: <strong>{numRule}</strong></h6>
                                            <h6>Number of Symbols: <strong>{numSymbol}</strong></h6>
                                            <h6>Number of Parts: <strong>{numParts}</strong></h6>
                                            <h6>Number of Video: <strong>{numDrivVideo}</strong></h6>
                                            <h5 style={{color: "white"}}>Number of Uploads: <strong>{totalDrivUpload}</strong></h5>
                                            <a href="#pablo" className="btn btn-light">Go to Driving License</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-sm-3 p-sm-2">
                                    <div className="card bg-primary text-white shadow-lg">
                                        <div className="card-body">
                                            <h5 className="card-title">Admins</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to
                                                additional content.</p>
                                            <Link to="/admins" className="btn btn-light"><FontAwesomeIcon className="text-primary" icon={faAdminAlt}/> Go to Admins</Link>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutAdmin: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutAdmin }
)(Dashboard);
