import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addAdmin } from "../../actions/adminActions";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import $ from "jquery";

import "react-toastify/dist/ReactToastify.css";

class AdminAddModal extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("*******************");
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
    if (
      nextProps.auth !== undefined &&
      nextProps.auth.admin !== undefined &&
      nextProps.auth.admin.data !== undefined &&
      nextProps.auth.admin.data.message !== undefined
    ) {
      $("#add-admin-modal").modal("hide");
      toast(nextProps.auth.admin.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onAdminAdd = (e) => {
    e.preventDefault();
    const newAdmin = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.addAdmin(newAdmin, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="modal fade" id="add-admin-modal" data-reset="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">add Admin</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form noValidate onSubmit={this.onAdminAdd} id="add-admin">
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.name}
                        id="name"
                        type="text"
                        error={errors.name}
                        className={classnames("form-control", {
                          invalid: errors.name,
                        })}
                      />
                      <span className="text-danger">{errors.name}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("form-control", {
                          invalid: errors.email,
                        })}
                      />
                      <span className="text-danger">{errors.email}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        autoComplete={""}
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("form-control", {
                          invalid: errors.password,
                        })}
                      />
                      <span className="text-danger">{errors.password}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="password2">Confirm Password</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        autoComplete={""}
                        onChange={this.onChange}
                        value={this.state.password2}
                        id="password2"
                        type="password"
                        className={classnames("form-control", {
                          invalid: errors.password2,
                        })}
                      />
                      <span className="text-danger">{errors.password2}</span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  form="add-admin"
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AdminAddModal.propTypes = {
  addAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addAdmin })(
  withRouter(AdminAddModal)
);
