import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { logoutAdmin } from "../../actions/authActions";
import { Link } from "react-router-dom";
import { UncontrolledCollapse } from "reactstrap";
class Sidebar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutAdmin();
  };

  render() {
    //const { user } = this.props.auth;
    return (
      <div className="border-right h-100" id="sidebar-wrapper">
        <div className="list-group list-group-flush">
          <Link
            to="/dashboard"
            className="list-group-item list-group-item-action"
          >
            Dashboard
          </Link>
          <Link to="/admins" className="list-group-item list-group-item-action">
            Admins
          </Link>
          <Link
            id="togglerlang"
            className="list-group-item list-group-item-action"
          >
            language <i className="fa fa-caret-down rotate-if-collapsed"></i>{" "}
          </Link>
          <UncontrolledCollapse toggler="#togglerlang">
            <Link
              id="togglerBegineer"
              style={{
                backgroundColor: "white",
                fontSize: "14px",
                fontWeight: "bold",
              }}
              className="list-group-item list-group-item-action"
            >
              Beginner <i className="fa fa-caret-down rotate-if-collapsed"></i>
            </Link>
            <UncontrolledCollapse toggler="#togglerBegineer">
              <Link
                to="/biggenerVocab"
                style={{
                  backgroundColor: "gray",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                className="list-group-item list-group-item-action"
              >
                Vocabulary
              </Link>
              <Link
                to="/biggenerGra"
                style={{
                  backgroundColor: "gray",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                className="list-group-item list-group-item-action"
              >
                Grammar
              </Link>
              <Link
                to="/biggenerTutorVedio"
                style={{
                  backgroundColor: "gray",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                className="list-group-item list-group-item-action"
              >
                Tutorial Video
              </Link>
              <Link
                to="/biggenerExercise"
                style={{
                  backgroundColor: "gray",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                className="list-group-item list-group-item-action"
              >
                Exercise
              </Link>
            </UncontrolledCollapse>

            <Link
              id="togglerInter"
              style={{
                backgroundColor: "white",
                fontSize: "14px",
                fontWeight: "bold",
              }}
              className="list-group-item list-group-item-action"
            >
              Intermediate{" "}
              <i className="fa fa-caret-down rotate-if-collapsed"></i>{" "}
            </Link>
            <UncontrolledCollapse toggler="#togglerInter">
              <Link
                to="/interMedVocab"
                style={{
                  backgroundColor: "gray",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                className="list-group-item list-group-item-action"
              >
                Vocabulary
              </Link>
              <Link
                to="/interMedGra"
                style={{
                  backgroundColor: "gray",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                className="list-group-item list-group-item-action"
              >
                Grammar
              </Link>
              <Link
                to="/interMedTutorVedio"
                style={{
                  backgroundColor: "gray",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                className="list-group-item list-group-item-action"
              >
                Tutorial Video
              </Link>
              <Link
                to="/interMedExercise"
                style={{
                  backgroundColor: "gray",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                className="list-group-item list-group-item-action"
              >
                Exercise
              </Link>
            </UncontrolledCollapse>

            <Link
              id="togglerAdvanced"
              style={{
                backgroundColor: "white",
                fontSize: "14px",
                fontWeight: "bold",
              }}
              className="list-group-item list-group-item-action"
            >
              Advanced <i className="fa fa-caret-down rotate-if-collapsed"></i>
            </Link>
            <UncontrolledCollapse toggler="#togglerAdvanced">
              <Link
                to="/advancedVocab"
                style={{
                  backgroundColor: "gray",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                className="list-group-item list-group-item-action"
              >
                Vocabulary
              </Link>
              <Link
                to="/advancedGra"
                style={{
                  backgroundColor: "gray",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                className="list-group-item list-group-item-action"
              >
                Grammar
              </Link>
              <Link
                to="/advancedTutorVedio"
                style={{
                  backgroundColor: "gray",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                className="list-group-item list-group-item-action"
              >
                Tutorial Video
              </Link>
              <Link
                to="/advancedExercise"
                style={{
                  backgroundColor: "gray",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                className="list-group-item list-group-item-action"
              >
                Exercise
              </Link>
            </UncontrolledCollapse>
          </UncontrolledCollapse>
          <Link to="#pablo" className="list-group-item list-group-item-action">
            Driving License
          </Link>
          <button
            className="list-group-item list-group-item-action"
            onClick={this.onLogoutClick}
          >
            Logout <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  logoutAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutAdmin })(Sidebar);
