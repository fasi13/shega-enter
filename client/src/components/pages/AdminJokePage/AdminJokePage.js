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
} from "reactstrap";
import ImageUploader from "react-images-upload";
import "./AdminJokePage.css";

class AdminJokePage extends Component {
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
          <select>
            <option>Selected</option>
            <option>Family</option>
            <option>Office</option>
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
          <AddSelectedJokes />
          <AddFamilyJokes />
          <AddOfficeJoke />
          {/* <AdminUpdateModal record={this.state.currentRecord} /> */}
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <div className="jokeAddContainer">
                <Button
                  color="primary"
                  id="toggler"
                  // style={{ marginTop: "1rem" }}
                >
                  Add Selected Jokes{" "}
                  <i className="fa fa-caret-down rotate-if-collapsed"></i>
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                  <Card>
                    <CardBody>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <ImageUploader
                            withIcon={false}
                            buttonText="Choose images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                            withPreview={true}
                            label={""}
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Name A"
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Dialog 1"
                            className="dialogInput"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <ImageUploader
                            withIcon={false}
                            buttonText="Choose images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                            label={""}
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Name B"
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Dialog 2"
                            className="dialogInput"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <ImageUploader
                            withIcon={false}
                            buttonText="Choose images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                            label={""}
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Name A"
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Dialog 3"
                            className="dialogInput"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <ImageUploader
                            withIcon={false}
                            buttonText="Choose images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                            label={""}
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Name B"
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Dialog 4"
                            className="dialogInput"
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
                  Add Family Jokes{" "}
                  <i className="fa fa-caret-down rotate-if-collapsed"></i>
                </Button>
                <UncontrolledCollapse toggler="#toggler2">
                  <Card>
                    <CardBody>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <ImageUploader
                            withIcon={false}
                            buttonText="Choose images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                            label={""}
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Name A"
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Dialog 1"
                            className="dialogInput"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <ImageUploader
                            withIcon={false}
                            buttonText="Choose images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                            label={""}
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Name B"
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Dialog 2"
                            className="dialogInput"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <ImageUploader
                            withIcon={false}
                            buttonText="Choose images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                            label={""}
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Name A"
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Dialog 3"
                            className="dialogInput"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <ImageUploader
                            withIcon={false}
                            buttonText="Choose images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                            label={""}
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Name B"
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Dialog 4"
                            className="dialogInput"
                          />
                        </FormGroup>
                      </Form>
                      <Button
                        className="closeAdd"
                        style={{ align: "left", backgroundColor: "red" }}
                      >
                        Close
                      </Button>
                      <Button
                        className="closeAdd"
                        style={{ align: "right", backgroundColor: "green" }}
                      >
                        Save
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
                  Add Office Jokes{" "}
                  <i className="fa fa-caret-down rotate-if-collapsed"></i>
                </Button>
                <UncontrolledCollapse toggler="#toggler3">
                  <Card>
                    <CardBody>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <ImageUploader
                            withIcon={false}
                            buttonText="Choose images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                            label={""}
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Name A"
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Dialog 1"
                            className="dialogInput"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <ImageUploader
                            withIcon={false}
                            buttonText="Choose images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                            label={""}
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Name B"
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Dialog 2"
                            className="dialogInput"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <ImageUploader
                            withIcon={false}
                            buttonText="Choose images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                            label={""}
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Name A"
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Dialog 3"
                            className="dialogInput"
                          />
                        </FormGroup>
                      </Form>
                      <Form inline>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <ImageUploader
                            withIcon={false}
                            buttonText="Choose images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                            label={""}
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Name B"
                          />
                        </FormGroup>
                        <FormGroup className="mb-0 mr-sm-2 mb-sm-0">
                          <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Dialog 4"
                            className="dialogInput"
                          />
                        </FormGroup>
                      </Form>

                      <Button
                        className="closeAdd"
                        style={{ align: "left", backgroundColor: "red" }}
                      >
                        Close
                      </Button>
                      <Button
                        className="closeAdd"
                        style={{ align: "right", backgroundColor: "green" }}
                      >
                        Save
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

AdminJokePage.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  records: state.records,
});

export default connect(mapStateToProps)(AdminJokePage);

// import React, { Component, useState } from "react";
// import { Button, Card } from "reactstrap";
// import Accordion from "react-bootstrap/Accordion";
// import "react-accessible-accordion/dist/fancy-example.css";
// import ReactTable from "react-table-6";
// import "react-table-6/react-table.css";
// import "./AdminJokePage.css";

// import Navbar from "../../partials/Navbar";
// import Sidebar from "../../partials/Sidebar";

// class AdminJokePage extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     posts: [],
//   //   };
//   // }
//   // componentDidMount() {
//   //   const url = "https://jsonplaceholder.typicode.com/posts";
//   //   fetch(url, {
//   //     method: "GET",
//   //   })
//   //     .then((response) => response.json())
//   //     .then((post) => {
//   //       this.setState({ posts: post });
//   //       console.log(post);
//   //     });
//   // }

//   render() {
//     const data = [
//       {
//         name: "Tanner Linsley",
//         age: 26,
//         friend: {
//           name: "Jason Maurer",
//           age: 23,
//         },
//       },
//     ];

//     const columns = [
//       {
//         Header: "Name",
//         accessor: "name", // String-based value accessors!
//       },
//       {
//         Header: "Age",
//         accessor: "age",
//         Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
//       },
//       {
//         id: "friendName", // Required because our accessor is not a string
//         Header: "Friend Name",
//         accessor: (d) => d.friend.name, // Custom value accessors!
//       },
//       {
//         Header: (props) => <span>Friend Age</span>, // Custom header components!
//         accessor: "friend.age",
//       },
//     ];
//     return (
//       <div>
//         <Navbar />
//         <div className="d-flex" id="wrapper">
//           <Sidebar />
//           <div id="page-content-wrapper">
//             {/* <Accordion>
//               <Card>
//                 <Card.Header>
//                   <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                     Click me!
//                   </Accordion.Toggle>
//                 </Card.Header>
//                 <Accordion.Collapse eventKey="0">
//                   <Card.Body>Hello! I'm the body</Card.Body>
//                 </Accordion.Collapse>
//               </Card>
//               <Card>
//                 <Card.Header>
//                   <Accordion.Toggle as={Button} variant="link" eventKey="1">
//                     Click me!
//                   </Accordion.Toggle>
//                 </Card.Header>
//                 <Accordion.Collapse eventKey="1">
//                   <Card.Body>Hello! I'm another body</Card.Body>
//                 </Accordion.Collapse>
//               </Card>
//             </Accordion> */}
//             <ReactTable data={data} columns={columns} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminJokePage;
