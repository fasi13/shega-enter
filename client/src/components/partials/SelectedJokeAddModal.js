import React from 'react'
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addSelectedJokes } from "../../actions/jokes";
import { withRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
import $ from 'jquery';

class SelectedJokeAddModal extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            JokesBody: "",
            errors: {},
        };
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('************444*******')
    //     if (nextProps.errors) {
    //         this.setState({
    //             errors: nextProps.errors
    //         });
    //     }
    //     if (nextProps.auth !== undefined
    //         && nextProps.auth.admin !== undefined
    //         && nextProps.auth.admin.data !== undefined
    //         && nextProps.auth.admin.data.message !== undefined) {
    //         $('#add-joke-modal').modal('hide');
    //         toast(nextProps.auth.admin.data.message, {
    //             position: toast.POSITION.TOP_CENTER
    //         });
    //     }
    // }


    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };


    onAddJokes = e => {
        e.preventDefault();
        if(this.state.title !== '' || this.state.JokesBody !== ''){
            const newSelectedJokes = {
                title: this.state.title,
                JokesBody: this.state.JokesBody
            };
            this.props.addSelectedJokes(newSelectedJokes,this.props.history);
            $('#add-joke-modal').modal('hide');
           
        }
    };

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="modal fade" id="add-joke-modal" data-reset="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Selected Jokes</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form noValidate onSubmit={this.onAddJokes} id="add-joke">
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="name">Title</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.title}
                                                id="title"
                                                type="text"
                                                error={errors.title}
                                                className={classnames("form-control", {
                                                    invalid: errors.title
                                                })} />
                                            <span className="text-danger">{errors.title}</span>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-3">
                                            <label htmlFor="email">Description</label>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.JokesBody}
                                                error={errors.JokesBody}
                                                id="JokesBody"
                                                type="text"
                                                className={classnames("form-control", {
                                                    invalid: errors.JokesBody
                                                })}
                                            />
                                            <span className="text-danger">{errors.JokesBody}</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button
                                form="add-joke"
                                type="submit"
                                className="btn btn-primary">
                                Add Selected Joke
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SelectedJokeAddModal.propTypes = {
    addSelectedJokes: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,
    {addSelectedJokes})(withRouter(SelectedJokeAddModal))
