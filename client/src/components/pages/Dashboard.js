import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { increment } from "../../actions/subCountAction"
import { logoutAdmin } from "../../actions/authActions";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import spinner from "../users/layout/Spinner2.gif";
// import {Link} from "react-router-dom";
// import {faAdminAlt} from "@fortawesome/free-solid-svg-icons/faUserAlt";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: {},
      isLoadding: true,
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
    };
    this.getData = this.getData.bind(this);
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount() {
    this.getData();
  }
  getData() {
    axios
      .get("api/languages/beginner")
      .then((res) => {
        this.setState({ records: res.data[0], isLoadding: false });
      })
      .catch();
  }

  render() {
    //const { user } = this.props.auth;
    const {
      tolaNumVideo,
      totalNumUploads,
      subscriberNumber,
      numSelectedJokes,
      numFamilyJokes,
      numOfficeJokes,
      totalNumJoks,
      numVocabulary,
      numSentens,
      numLangVideo,
      numExcercises,
      totalLangUpload,
      numRule,
      numSymbol,
      numParts,
      numDrivVideo,
      totalDrivUpload,
    } = this.state;
    return (
      <div>
        <Navbar />
        <div className="d-flex" id="wrapper">
          <Sidebar />
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <button className="btn btn-link mt-2" id="menu-toggle">
                <FontAwesomeIcon icon={faList} />
              </button>
              <h1 className="mt-2 text-primary">Dashboard</h1>
              {this.state.isLoadding ? (
                <img
                  src={spinner}
                  style={{
                    width: "50px",
                    hight: "50px",
                    margin: "auto",
                    marginTop: "170px",
                    display: "block",
                  }}
                  alt="Loading..."
                />
              ) : (
                <>
                  <div className="row px-2">
                    <div className="col-sm-12 p-sm-2">
                      <div className="card bg-info text-white shadow-lg">
                        <div className="card-body">
                          <h4 className="card-title text-center ">
                            Shega Entertaiment
                          </h4>
                          <div className="row px-2">
                            <div className="col-sm-1 p-sm-2  mr-3 "></div>
                            <div className="col-sm-3 p-sm-2 bg-secondary mr-3 ">
                              <h5 className="card-title text-center ">
                                Total Number of Video
                              </h5>
                              <p className="text-center">
                                <strong>
                                  {this.state.records.tutorialVedio.length}
                                </strong>
                              </p>
                            </div>
                            <div className="col-sm-3 p-sm-2 bg-secondary mr-3">
                              <h5 className="card-title text-center">
                                Total Number of Uploads
                              </h5>
                              <p className="text-center">
                                <strong>84</strong>
                              </p>
                            </div>
                            <div className="col-sm-3 p-sm-2 bg-secondary ">
                              <h5 className="card-title text-center">
                                Number of Subscribers
                              </h5>
                              <p className="text-center">
                                <strong>{subscriberNumber}</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 p-sm-2">
                      <div className="card bg-info text-white shadow-lg">
                        <div className="card-body">
                          <h5 className="card-title">Language</h5>
                          <h6>
                            Number of Vocabulary:{" "}
                            <strong>
                              {this.state.records.vocabulary.length}
                            </strong>
                          </h6>
                          <h6>
                            Number of Sentenses:{" "}
                            <strong>
                              {this.state.records.grammer_.length}
                            </strong>
                          </h6>
                          <h6>
                            Number of Video:{" "}
                            <strong>
                              {this.state.records.tutorialVedio.length}
                            </strong>
                          </h6>
                          <h6>
                            Number of Exrecises:{" "}
                            <strong>
                              {this.state.records.exercises.length}
                            </strong>
                          </h6>
                          {/* <h5 style={{ color: "white" }}>
                          Number of Uploads: <strong>{totalLangUpload}</strong>
                        </h5> */}

                          <a href="/biggenerVocab" className="btn btn-light">
                            Go to Languages
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 p-sm-2">
                      <div className="card bg-dark text-white shadow-lg">
                        <div className="card-body">
                          <h5 className="card-title">Driving License</h5>
                          <h6>
                            የማሽከርከር ስነ-ባህሪ ትምህርት ብዛት: <strong>11</strong>
                          </h6>
                          <h6>
                            የማሽከርከር ህግና ስነ-ስርዓት ትምህርት ብዛት: <strong>12</strong>
                          </h6>
                          <h6>
                            የተሽከርካሪ የቴክኒክ ትምህርት ብዛት: <strong>11</strong>
                          </h6>
                          <h6>
                            ቪዲዮ መርጃ ብዛት: <strong>1</strong>
                          </h6>
                          {/* <h5 style={{ color: "white" }}>
                          Number of Uploads: <strong>{totalDrivUpload}</strong>
                        </h5> */}
                          <a href="/driveLicense" className="btn btn-light">
                            Go to Driving License
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  records: state.records,
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutAdmin })(Dashboard);
