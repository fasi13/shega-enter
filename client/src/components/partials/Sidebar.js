import React, { Component } from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {logoutAdmin} from "../../actions/authActions";
import {Link} from "react-router-dom";
import {UncontrolledCollapse} from 'reactstrap';
class Sidebar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutAdmin();
    };

    render() {
        //const { user } = this.props.auth;
        return (
            <div className="border-right h-100" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    <Link to="/dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                    <Link to="/admins" className="list-group-item list-group-item-action">Admins</Link>
                    {/* <Link to="/jokes" className="list-group-item list-group-item-action">Jokes</Link> */}
                    <Link id="togglerlang" className = "list-group-item list-group-item-action">
                        Languages <i className="fa fa-caret-down rotate-if-collapsed"></i> </Link>
                    <UncontrolledCollapse toggler="#togglerlang">
                        <Link id="togglerBegineer" style = {{backgroundColor:"white", fontSize:'14px', fontWeight:"bold"}} 
                         className="list-group-item list-group-item-action">
                             Biggeners <i className="fa fa-caret-down rotate-if-collapsed"></i></Link>
                            <UncontrolledCollapse toggler="#togglerBegineer">
                            <Link to="/biggenerVocab" style = {{backgroundColor:"gray", fontSize:'14px', fontWeight:"bold"}}
                              className="list-group-item list-group-item-action">
                                  Vocabulary</Link>
                                  <Link to="/biggenerGra" style = {{backgroundColor:"gray", fontSize:'14px', fontWeight:"bold"}}
                              className="list-group-item list-group-item-action">
                                  Grammer</Link>
                                  <Link to="/biggenerTut" style = {{backgroundColor:"gray", fontSize:'14px', fontWeight:"bold"}}
                              className="list-group-item list-group-item-action">
                                  Tutorial Vedio</Link>
                                  <Link to="/biggenerEx" style = {{backgroundColor:"gray", fontSize:'14px', fontWeight:"bold"}}
                              className="list-group-item list-group-item-action">
                                  Exercise</Link>
                            </UncontrolledCollapse>
                        <Link to="/languages" style = {{backgroundColor:"white", fontSize:'14px', fontWeight:"bold"}}  
                        className="list-group-item list-group-item-action">Intermediate <i className="fa fa-caret-down rotate-if-collapsed"></i> </Link>
                        <Link to="/languages" style = {{backgroundColor:"white", fontSize:'14px', fontWeight:"bold"}}  className="list-group-item list-group-item-action">Advanced <i className="fa fa-caret-down rotate-if-collapsed"></i></Link>
                    </UncontrolledCollapse>
                    <Link to="/driveLicense" className="list-group-item list-group-item-action">Driving License</Link>
                    <button className="list-group-item list-group-item-action" onClick={this.onLogoutClick}>Logout <FontAwesomeIcon icon={faSignOutAlt} /></button>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    logoutAdmin: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutAdmin }
)(Sidebar);
