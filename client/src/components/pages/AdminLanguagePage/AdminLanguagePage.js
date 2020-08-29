import React, { Component, Fragment } from "react";
import Navbar from "../../partials/Navbar";
import Sidebar from "../../partials/Sidebar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import ReactDatatable from "@ashvin27/react-datatable";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import axios from "axios";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddSelectedJokes from "../../partials/AddSelectedJokes";
import AddFamilyJokes from "../../partials/AddFamilyJokes";
import AddOfficeJoke from "../../partials/AddOfficeJoke";
// import AdminUpdateModal from "../../partials/AdminUpdateModal";
import { ToastContainer } from "react-toastify";
import {
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import ImageUploader from "react-images-upload";
import "./AdminLanguagePage.css";

class AdminLanguagePage extends Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        key: "name",
        text: "",
        className: "name",
        align: "left",
        sortable: true,
      },
      {
        key: "address",
        text: (
          <select className="dropSelect">
            <option>Vocabulary</option>
            <option>Sentences</option>
            <option>Test</option>
          </select>
        ),
        className: "address",
        align: "left",
        sortable: true,
      },
      {
        key: "postcode",
        text: "Description",
        className: "postcode",
        sortable: true,
      },
      {
        key: "action",
        text: "Action",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: (record) => {
          return (
            <Fragment>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => this.editRecord(record)}
                style={{ marginRight: "5px" }}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.deleteRecord(record)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </Fragment>
          );
        },
      },
    ];
    this.state = {
      records: [
        {
          name: <input type="checkbox" />,
          address: "228 City Road",
          postcode: "3JH",
          rating: 5,
          type_of_food: "Chinese",
        },
        {
          name: <input type="checkbox" />,
          address: "228 City Road",
          postcode: "3JH",
          rating: 5,
          type_of_food: "Chinese",
        },
        {
          name: <input type="checkbox" />,
          address: "228 City Road",
          postcode: "3JH",
          rating: 5,
          type_of_food: "Chinese",
        },
        {
          name: <input type="checkbox" />,
          address: "228 City Road",
          postcode: "3JH",
          rating: 5,
          type_of_food: "Chinese",
        },
      ],
      pictures: [],
    };

    this.config = {
      page_size: 10,
      length_menu: [10, 20, 50],
      filename: "Jokes",
      no_data_text: "No jokes found!",
      button: {
        excel: false,
        print: false,
        csv: false,
      },
      language: {
        length_menu: "Show _MENU_ result per page",
        filter: "Filter in records...",
        info: "Showing _START_ to _END_ of _TOTAL_ records",
        pagination: {
          first: "First",
          previous: "Previous",
          next: "Next",
          last: "Last",
        },
      },
      show_length_menu: true,
      show_filter: true,
      show_pagination: true,
      show_info: true,
    };

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex" id="wrapper">
          <Sidebar />
          {/* <AddSelectedJokes />
          <AddFamilyJokes />
          <AddOfficeJoke /> */}
          {/* <AdminUpdateModal record={this.state.currentRecord} /> */}
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <div className="langAddContainer">
                <Button
                  color="primary"
                  id="toggler"
                  // style={{ marginTop: "1rem" }}
                >
                  Add Vocabulary{" "}
                  <i className="fa fa-caret-down rotate-if-collapsed"></i>
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                  <Card>
                    <CardBody>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Label for="eng">English</Label>
                          <Input
                            type="text"
                            name="text"
                            id="eng"
                            placeholder="English"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Label for="amh">አማርኛ</Label>
                          <Input
                            type="text"
                            name="text"
                            id="amh"
                            placeholder="አማርኛ"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Label for="pro">Pronounce</Label>
                          <Input
                            type="text"
                            name="text"
                            id="pro"
                            placeholder="Pronounce"
                          />
                        </FormGroup>
                      </Form>
                      <Button
                        className="closeAdd"
                        style={{ backgroundColor: "green" }}
                      >
                        Save
                      </Button>
                      <Button
                        className="closeAdd"
                        style={{ backgroundColor: "red" }}
                      >
                        Close
                      </Button>
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
                <br></br>
                <Button
                  color="primary"
                  id="toggler2"
                  // style={{ margin: "1rem" }}
                >
                  Add Sentences{" "}
                  <i className="fa fa-caret-down rotate-if-collapsed"></i>
                </Button>
                <UncontrolledCollapse toggler="#toggler2">
                  <Card>
                    <CardBody>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Label for="tens">Tens Type</Label>
                          <Input
                            type="text"
                            name="text"
                            id="tens"
                            placeholder="Tense Type"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Label for="str">Structure</Label>
                          <Input
                            type="text"
                            name="text"
                            id="str"
                            placeholder="Structure"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Label for="eg">Example</Label>
                          <Input
                            type="text"
                            name="text"
                            id="eg"
                            placeholder="Example"
                          />
                        </FormGroup>
                      </Form>
                      <Button
                        className="closeAdd"
                        style={{ backgroundColor: "green" }}
                      >
                        Save
                      </Button>
                      <Button
                        className="closeAdd"
                        style={{ backgroundColor: "red" }}
                      >
                        Close
                      </Button>
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
                <br></br>
                <Button
                  color="primary"
                  id="toggler3"
                  // style={{ margin: "1rem" }}
                >
                  Add Tests{" "}
                  <i className="fa fa-caret-down rotate-if-collapsed"></i>
                </Button>
                <UncontrolledCollapse toggler="#toggler3">
                  <Card>
                    <CardBody>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Label for="qn"> Question</Label>
                          <Input
                            type="text"
                            name="text"
                            id="qn"
                            placeholder="Question"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Label for="ans">Answer</Label>
                          <Input
                            type="text"
                            name="text"
                            id="ans"
                            placeholder="Answer"
                          />
                        </FormGroup>
                      </Form>
                      <Button
                        className="closeAdd"
                        style={{ backgroundColor: "green" }}
                      >
                        Save
                      </Button>
                      <Button
                        className="closeAdd"
                        style={{ backgroundColor: "red" }}
                      >
                        Close
                      </Button>
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
                <Button
                  color="primary"
                  id="toggler4"
                  // style={{ margin: "1rem" }}
                >
                  Add Video{" "}
                  <i className="fa fa-caret-down rotate-if-collapsed"></i>
                </Button>
                <UncontrolledCollapse toggler="#toggler4">
                  <Card>
                    <CardBody>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Label for="text" className="videoLable">
                            Video URL
                          </Label>
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="https://www.youtube.com/embed/AVYfyTvc9KY "
                            className="videoInput"
                          />
                        </FormGroup>
                      </Form>
                      <Button
                        className="closeAdd"
                        style={{ backgroundColor: "green" }}
                      >
                        Save
                      </Button>
                      <Button
                        className="closeAdd"
                        style={{ backgroundColor: "red" }}
                      >
                        Close
                      </Button>
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </div>

              <ReactDatatable
                config={this.config}
                records={this.state.records}
                columns={this.columns}
                // onPageChange={this.pageChange.bind(this)}
              />
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    );
  }
}

AdminLanguagePage.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  records: state.records,
});

export default connect(mapStateToProps)(AdminLanguagePage);
