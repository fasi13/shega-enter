import React, { Component, Fragment } from "react";
import { Button, Collapse } from "reactstrap";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";
import ReactTable from "react-table";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faList} from "@fortawesome/free-solid-svg-icons/faList";
// import ReactDatatable from '@ashvin27/react-datatable';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api from "../../utils/api";
// import {faPlus} from "@fortawesome/free-solid-svg-icons";
import SelectedJokeAddModal from "../partials/SelectedJokeAddModal";
// import AdminUpdateModal from "../partials/AdminUpdateModal";
import { toast, ToastContainer } from "react-toastify";
import { response } from "express";
// import { SELECTED_JOKE_ADD } from "../../actions/types";

class Jokes extends Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        key: "_id",
        text: "Id",
        className: "id",
        align: "left",
        sortable: true,
      },
      {
        key: "title",
        text: "Title",
        className: "name",
        align: "left",
        sortable: true,
      },
      {
        key: "JokesBody",
        text: "Description ",
        className: "email",
        align: "left",
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
                data-toggle="modal"
                data-target="#update-admin-modal"
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

    this.config = {
      page_size: 10,
      length_menu: [10, 20, 50],
      filename: "Jokes",
      no_data_text: "No Jokes found!",
      button: {
        excel: true,
        print: true,
        csv: true,
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

    this.state = {
      records: [],
    };

    this.state = {
      posts: [],
    };

    this.state = {
      currentRecord: {
        id: "",
        title: "",
        JokesBody: "",
      },
    };

    this.state = {
      collapses: false,
    };

    this.getData = this.getData.bind(this);
    this.colapseJok = this.colapseJok.bind(this);
  }

  componentDidMount() {
    this.getData();
    const url = "jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((post) => {
        this.setState({ posts: post });
      });
  }

  componentWillReceiveProps(nextProps) {
    this.getData();
  }
  getData() {
    api
      .get("/jokes/selected-jokes-data")
      .then((res) => {
        this.setState({ records: res.data });
      })
      .catch();
  }

  editRecord(record) {
    this.setState({ currentRecord: record });
  }

  deleteRecord(record) {
    api
      .delete(`/jokes/delete-joke/${record._id}`)
      .then((res) => {
        if (res.status === 200) {
          toast(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch();
    this.getData();
  }

  pageChange(pageData) {
    console.log("OnPageChange", pageData);
  }

  colapseJok() {
    this.setState({ collapse: !this.state.collapses });
  }

  render() {
    const columns = [
      {
        Header: "User ID",
        accessor: "userId",
      },
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Content",
        accessor: "body",
      },
    ];
    return (
      <div>
        <Navbar />
        <div className="d-flex" id="wrapper">
          <Sidebar />
          <SelectedJokeAddModal />
          <ReactTable columns={columns}></ReactTable>
          {/* <AdminUpdateModal record={this.state.currentRecord}/> */}
          <div id="page-content-wrapper">
            <div className="container-fluid mr-auto ml-auto"></div>
          </div>
          <ToastContainer />
        </div>
      </div>
    );
  }
}

Jokes.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  records: state.records,
});

export default connect(mapStateToProps)(Jokes);
