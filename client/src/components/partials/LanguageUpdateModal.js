import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateVocabulary } from "../../actions/vocabAction";
import { updateGrammar } from "../../actions/gramAction";
import { updateTutorialVid } from "../../actions/tutorialVedio";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import $ from "jquery";
import "react-toastify/dist/ReactToastify.css";
class LanguageUpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.record._id,
      english: this.props.record.english,
      amaharic: this.props.record.amaharic,
      sound: this.props.record.sound,
      grammer: this.props.record.grammer,
      form: this.props.record.form,
      example: this.props.record.example,
      vedioLink: this.props.record.vedioLink,
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.record) {
      this.setState({
        id: nextProps.record._id,
        english: nextProps.record.english,
        amaharic: nextProps.record.amaharic,
        sound: nextProps.record.sound,
        grammer: nextProps.record.grammer,
        form: nextProps.record.form,
        example: nextProps.record.example,
        vedioLink: nextProps.record.vedioLink,
      });
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    if (e.target.id === "voc-update-english") {
      this.setState({ english: e.target.value });
    }
    if (e.target.id === "voc-update-amaharic") {
      this.setState({ amaharic: e.target.value });
    }
    if (e.target.id === "voc-update-sound") {
      this.setState({ sound: e.target.value });
    }
    if (e.target.id === "gram-update-grammar") {
      this.setState({ grammer: e.target.value });
    }
    if (e.target.id === "gram-update-form") {
      this.setState({ form: e.target.value });
    }
    if (e.target.id === "gram-update-example") {
      this.setState({ example: e.target.value });
    }
    if (e.target.id === "tutorial-update-vediolink") {
      this.setState({ vedioLink: e.target.value });
    }
  };

  onVocabularyUpdate = (e) => {
    e.preventDefault();
    const newData = {
      _id: this.state.id,
      english: this.state.english,
      amaharic: this.state.amaharic,
      sound: this.state.sound,
    };
    this.props.updateVocabulary(newData);
    $("#update-vocab-modal").modal("hide");
  };

  onGrammarUpdate = (e) => {
    e.preventDefault();
    const newData = {
      _id: this.state.id,
      grammer: this.state.grammer,
      form: this.state.form,
      example: this.state.example,
    };
    this.props.updateGrammar(newData);
    $("#update-grammar-modal").modal("hide");
  };

  onVedioLinkUpdate = (e) => {
    e.preventDefault();
    const newData = {
      _id: this.state.id,
      vedioLink: this.state.vedioLink,
    };
    this.props.updateTutorialVid(newData);
    $("#update-vedioLink-modal").modal("hide");
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="modal fade" id="update-vocab-modal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Update Vocabulary</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form
                  noValidate
                  onSubmit={this.onVocabularyUpdate}
                  id="update-vocabulary"
                >
                  <input
                    onChange={this.onChange}
                    value={this.state.id}
                    id="voc-update-id"
                    type="text"
                    className="d-none"
                  />
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="name">English</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.english}
                        id="voc-update-english"
                        type="text"
                        error={errors.english}
                        className={classnames("form-control", {
                          invalid: errors.english,
                        })}
                      />
                      <span className="text-danger">{errors.english}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="email">Amaharic</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.amaharic}
                        error={errors.amaharic}
                        id="voc-update-amaharic"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.amaharic,
                        })}
                      />
                      <span className="text-danger">{errors.amaharic}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="password">Sound</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.sound}
                        error={errors.sound}
                        id="voc-update-sound"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.sound,
                        })}
                      />
                      <span className="text-danger">{errors.sound}</span>
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
                  form="update-vocabulary"
                  type="submit"
                  className="btn btn-primary"
                >
                  Update Vocabulary
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="update-grammar-modal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Update Vocabulary</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form
                  noValidate
                  onSubmit={this.onGrammarUpdate}
                  id="update-Grammar"
                >
                  <input
                    onChange={this.onChange}
                    value={this.state.id}
                    id="gram-update-id"
                    type="text"
                    className="d-none"
                  />
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="name">Grammar</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.grammer}
                        id="gram-update-grammar"
                        type="text"
                        error={errors.grammer}
                        className={classnames("form-control", {
                          invalid: errors.grammer,
                        })}
                      />
                      <span className="text-danger">{errors.english}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="email">Form</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.form}
                        error={errors.form}
                        id="gram-update-form"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.form,
                        })}
                      />
                      <span className="text-danger">{errors.amaharic}</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="password">Example</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.example}
                        error={errors.example}
                        id="gram-update-example"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.example,
                        })}
                      />
                      <span className="text-danger">{errors.sound}</span>
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
                  form="update-Grammar"
                  type="submit"
                  className="btn btn-primary"
                >
                  Update Grammar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="update-vedioLink-modal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Update Vedio Link</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form
                  noValidate
                  onSubmit={this.onVedioLinkUpdate}
                  id="update-VedioLink"
                >
                  <input
                    onChange={this.onChange}
                    value={this.state.id}
                    id="gram-update-id"
                    type="text"
                    className="d-none"
                  />
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="name">Vedio Link</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.vedioLink}
                        id="tutorial-update-vediolink"
                        type="text"
                        error={errors.vedioLink}
                        className={classnames("form-control", {
                          invalid: errors.vedioLink,
                        })}
                      />
                      <span className="text-danger">{errors.vedioLink}</span>
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
                  form="update-VedioLink"
                  type="submit"
                  className="btn btn-primary"
                >
                  Update Vedio Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LanguageUpdateModal.propTypes = {
  updateVocabulary: PropTypes.func.isRequired,
  updateGrammar: PropTypes.func.isRequired,
  updateTutorialVid: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, {
  updateVocabulary,
  updateGrammar,
  updateTutorialVid,
})(LanguageUpdateModal);
