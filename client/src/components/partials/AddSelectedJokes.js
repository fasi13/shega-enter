import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addSelectedJoke } from "../../actions/addSelectedJoke";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import $ from "jquery";

import "react-toastify/dist/ReactToastify.css";

class AddSelectedJoke extends React.Component {
  constructor() {
    super();
    this.state = {
      type: "",
      descriprion: "",
      dialog1: "",
      dialog2: "",
      dialog3: "",
      dialog4: "",
      dialog5: "",
      dialog6: "",
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
      nextProps.auth.selectedJoke !== undefined &&
      nextProps.auth.selectedJoke.data !== undefined &&
      nextProps.auth.selectedJoke.data.message !== undefined
    ) {
      $("#add-selected-joke").modal("hide");
      toast(nextProps.auth.selectedJoke.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSelectedJokeAdd = (e) => {
    e.preventDefault();
    const newSelectedJoke = {
      type: this.state.type,
      description: this.state.descriprion,
      dialog1: this.state.dialog1,
      dialog2: this.state.dialog2,
      dialog3: this.state.dialog3,
      dialog4: this.state.dialog4,
      dialog5: this.state.dialog5,
      dialog6: this.state.dialog6,
    };
    this.props.addSelectedJoke(newSelectedJoke, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="modal fade" id="add-selected-joke" data-reset="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">add Joke</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form
                  noValidate
                  onSubmit={this.onSelectedJokeAdd}
                  id="add-selected-joke"
                >
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="type">Joke Type</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.type}
                        id="type"
                        type="text"
                        error={errors.type}
                        className={classnames("form-control", {
                          invalid: errors.type,
                        })}
                      />
                      <span className="text-danger">{errors.type}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="description">Descriprion</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.description}
                        error={errors.description}
                        id="description"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.description,
                        })}
                      />
                      <span className="text-danger">{errors.description}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="dialog1">Dialog1</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        autoComplete={""}
                        onChange={this.onChange}
                        value={this.state.dialog1}
                        error={errors.dialog1}
                        id="dialog1"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.dialog1,
                        })}
                      />
                      <span className="text-danger">{errors.dialog1}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="dialog2">Dialog2</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        autoComplete={""}
                        onChange={this.onChange}
                        value={this.state.dialog2}
                        error={errors.dialog2}
                        id="dialog2"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.dialog2,
                        })}
                      />
                      <span className="text-danger">{errors.dialog2}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="dialog3">Dialog3</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        autoComplete={""}
                        onChange={this.onChange}
                        value={this.state.dialog3}
                        error={errors.dialog3}
                        id="dialog3"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.dialog3,
                        })}
                      />
                      <span className="text-danger">{errors.dialog3}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="dialog4">Dialog4</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        autoComplete={""}
                        onChange={this.onChange}
                        value={this.state.dialog4}
                        error={errors.dialog4}
                        id="dialog4"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.dialog4,
                        })}
                      />
                      <span className="text-danger">{errors.dialog4}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="dialog5">Dialog5</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        autoComplete={""}
                        onChange={this.onChange}
                        value={this.state.dialog5}
                        error={errors.dialog5}
                        id="dialog5"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.dialog5,
                        })}
                      />
                      <span className="text-danger">{errors.dialog5}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="dialog6">Dialog6</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        autoComplete={""}
                        onChange={this.onChange}
                        value={this.state.dialog6}
                        error={errors.dialog6}
                        id="dialog6"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.dialog6,
                        })}
                      />
                      <span className="text-danger">{errors.dialog6}</span>
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
                  form="add-selected-joke"
                  type="submit"
                  className="btn btn-primary"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddSelectedJoke.propTypes = {
  addSelectedJoke: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addSelectedJoke })(
  withRouter(AddSelectedJoke)
);
