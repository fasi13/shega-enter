import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addAdvanVocabulary } from "../../../actions/vocabAction";
import { addAdvanGrammar } from "../../../actions/gramAction";
import { addAdvanTutorialVid } from "../../../actions/tutorialVedio";
import { addAdvanExercise } from "../../../actions/exerciseAction";
import { withRouter } from "react-router-dom";
import $ from "jquery";

import "react-toastify/dist/ReactToastify.css";

class LanguageAddModal extends React.Component {
  constructor() {
    super();
    this.state = {
      english: "",
      amaharic: "",
      sound: "",
      grammer: "",
      form: "",
      example: "",
      vedioLink: "",
      question: "",
      mChoiceA: "",
      mChoiceB: "",
      mChoiceC: "",
      mchoiceD: "",
      answer: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }

    $("#add-vocabulary-modal").modal("hide");
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onVocabularyAdd = (e) => {
    e.preventDefault();
    const newVocabulary = {
      english: this.state.english,
      amaharic: this.state.amaharic,
      sound: this.state.sound,
    };
    this.props.addAdvanVocabulary(newVocabulary, this.props.history);
    $("#add-vocabulary-modal").modal("hide");
  };

  onGrammarAdd = (e) => {
    e.preventDefault();
    const newGrammar = {
      grammer: this.state.grammer,
      form: this.state.form,
      example: this.state.example,
    };
    this.props.addAdvanGrammar(newGrammar, this.props.history);
    $("#add-grammar-modal").modal("hide");
  };

  onVedioLinkAdd = (e) => {
    e.preventDefault();
    const newGrammar = {
      vedioLink: this.state.vedioLink,
    };
    this.props.addAdvanTutorialVid(newGrammar, this.props.history);
    $("#add-vedioLink-modal").modal("hide");
  };

  onExerciseAdd = (e) => {
    e.preventDefault();
    const newData = {
      question: this.state.question,
      mChoiceA: this.state.mChoiceA,
      mChoiceB: this.state.mChoiceB,
      mChoiceC: this.state.mChoiceC,
      mChoiceD: this.state.mChoiceD,
      answer: this.state.answer,
    };
    this.props.addAdvanExercise(newData, this.props.history);
    $("#add-exercise-modal").modal("hide");
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="modal fade" id="add-vocabulary-modal" data-reset="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">add Vocabulary</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form
                  noValidate
                  onSubmit={this.onVocabularyAdd}
                  id="add-Vocabulary"
                >
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="name">English</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.english}
                        id="english"
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
                        error={errors.email}
                        id="amaharic"
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
                        id="sound"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.sound,
                        })}
                      />
                      <span className="text-danger">{errors.example}</span>
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
                  form="add-Vocabulary"
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Vocabulary
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="add-grammar-modal" data-reset="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">add Grammar</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form noValidate onSubmit={this.onGrammarAdd} id="add-grammar">
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="name">Grammar</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.grammer}
                        id="grammer"
                        type="text"
                        error={errors.grammer}
                        className={classnames("form-control", {
                          invalid: errors.grammer,
                        })}
                      />
                      <span className="text-danger">{errors.grammer}</span>
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
                        id="form"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.form,
                        })}
                      />
                      <span className="text-danger">{errors.form}</span>
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
                        id="example"
                        type="text"
                        className={classnames("form-control", {
                          invalid: errors.example,
                        })}
                      />
                      <span className="text-danger">{errors.example}</span>
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
                  form="add-grammar"
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Grammar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="add-vedioLink-modal" data-reset="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Vedio Link</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form
                  noValidate
                  onSubmit={this.onVedioLinkAdd}
                  id="add-vedioLink"
                >
                  <div className="row mt-2">
                    <div className="col-md-3">
                      <label htmlFor="name">Tutorial Vedio Link</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        onChange={this.onChange}
                        value={this.state.vedioLink}
                        id="vedioLink"
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
                  form="add-vedioLink"
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Vedio Link
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="add-exercise-modal" data-reset="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Exercise List</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form
                  noValidate
                  onSubmit={this.onExerciseAdd}
                  id="add-exercise"
                >
                  <div className="row mt-2">
                    <div className="col-md-2">
                      <label htmlFor="name">Question</label>
                    </div>
                    <div className="col-md-10">
                      <input
                        onChange={this.onChange}
                        value={this.state.question}
                        id="question"
                        type="text"
                        error={errors.question}
                        className={classnames("form-control", {
                          invalid: errors.question,
                        })}
                      />
                      <span className="text-danger">{errors.question}</span>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-md-2">
                      <label htmlFor="name">Choice A)</label>
                    </div>
                    <div className="col-md-3">
                      <input
                        onChange={this.onChange}
                        value={this.state.mChoiceA}
                        id="mChoiceA"
                        type="text"
                        error={errors.mChoiceA}
                        className={classnames("form-control", {
                          invalid: errors.mChoiceA,
                        })}
                      />
                      <span className="text-danger">{errors.mChoiceA}</span>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-md-2">
                      <label htmlFor="name">Choice B)</label>
                    </div>
                    <div className="col-md-3">
                      <input
                        onChange={this.onChange}
                        value={this.state.mChoiceB}
                        id="mChoiceB"
                        type="text"
                        error={errors.mChoiceB}
                        className={classnames("form-control", {
                          invalid: errors.mChoiceB,
                        })}
                      />
                      <span className="text-danger">{errors.mChoiceB}</span>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-md-2">
                      <label htmlFor="name">Choice C)</label>
                    </div>
                    <div className="col-md-3">
                      <input
                        onChange={this.onChange}
                        value={this.state.mChoiceC}
                        id="mChoiceC"
                        type="text"
                        error={errors.mChoiceC}
                        className={classnames("form-control", {
                          invalid: errors.mChoiceC,
                        })}
                      />
                      <span className="text-danger">{errors.mChoiceC}</span>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-md-2">
                      <label htmlFor="name">Choice D)</label>
                    </div>
                    <div className="col-md-3">
                      <input
                        onChange={this.onChange}
                        value={this.state.mChoiceD}
                        id="mChoiceD"
                        type="text"
                        error={errors.mChoiceD}
                        className={classnames("form-control", {
                          invalid: errors.mChoiceD,
                        })}
                      />
                      <span className="text-danger">{errors.question}</span>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-md-2">
                      <label htmlFor="name">Answer</label>
                    </div>
                    <div className="col-md-10">
                      <input
                        onChange={this.onChange}
                        value={this.state.answer}
                        id="answer"
                        type="text"
                        error={errors.answer}
                        className={classnames("form-control", {
                          invalid: errors.answer,
                        })}
                      />
                      <span className="text-danger">{errors.answer}</span>
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
                  form="add-exercise"
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Exercise
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LanguageAddModal.propTypes = {
  addAdvanVocabulary: PropTypes.func.isRequired,
  addAdvanGrammar: PropTypes.func.isRequired,
  addAdvanTutorialVid: PropTypes.func.isRequired,
  addAdvanExercise: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, {
  addAdvanVocabulary,
  addAdvanGrammar,
  addAdvanTutorialVid,
  addAdvanExercise,
})(withRouter(LanguageAddModal));
