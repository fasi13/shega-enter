import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateAdmin } from "../../actions/adminActions";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import $ from "jquery";

import "react-toastify/dist/ReactToastify.css";

class AddminUpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.record.id,
      name: this.props.record.name,
      email: this.props.record.email,
      password: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.record) {
      this.setState({
        id: nextProps.record.id,
        name: nextProps.record.name,
        email: nextProps.record.email,
      });
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
    if (
      nextProps.auth !== undefined &&
      nextProps.auth.admin !== undefined &&
      nextProps.auth.admin.data !== undefined &&
      nextProps.auth.admin.data.message !== undefined &&
      nextProps.auth.admin.data.success
    ) {
      $("#update-admin-modal").modal("hide");
      toast(nextProps.auth.admin.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  onChange = (e) => {
    if (e.target.id === "admin-update-name") {
      this.setState({ name: e.target.value });
    }
    if (e.target.id === "admin-update-email") {
      this.setState({ email: e.target.value });
    }
    if (e.target.id === "admin-update-password") {
      this.setState({ password: e.target.value });
    }
  };

  onAdminUpdate = (e) => {
    e.preventDefault();
    const newAdmin = {
      _id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.updateAdmin(newAdmin);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="modal fade" id="update-admin-modal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Update Admin</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form
                  noValidate
                  onSubmit={this.onAdminUpdate}
                  id="update-admin"
                >
                  <input
                    onChange={this.onChange}
                    value={this.state.id}
                    id="admin-update-id"
                    type="text"
                    className="d-none"
                  />
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.name}
                        id="admin-update-name"
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
                        id="admin-update-email"
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
                        data-reset-input={true}
                        autoComplete={""}
                        onChange={this.onChange}
                        error={errors.password}
                        id="admin-update-password"
                        type="password"
                        className={classnames("form-control", {
                          invalid: errors.password,
                        })}
                      />
                      <span className="text-danger">{errors.password}</span>
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
                  form="update-admin"
                  type="submit"
                  className="btn btn-primary"
                >
                  Update Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddminUpdateModal.propTypes = {
  updateAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { updateAdmin })(
  withRouter(AddminUpdateModal)
);
