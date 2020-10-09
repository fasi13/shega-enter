import React, { Component, Fragment } from "react";
import Navbar from "../../partials/Navbar";
import Sidebar from "../../partials/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import ReactDatatable from "@ashvin27/react-datatable";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import LanguageAddModal from "../../partials/BeginnerModal/LanguageAddModal";
import LanguageUpdateModal from "../../partials/BeginnerModal/LanguageUpdateModal";
import { deleteVocabulary } from "../../../actions/vocabAction";
import { toast, ToastContainer } from "react-toastify";
import spinner from "../../users/layout/Spinner2.gif";

class LangBiggenerVocab extends Component {
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
        key: "english",
        text: "English",
        className: "name",
        align: "left",
        sortable: true,
      },
      {
        key: "amaharic",
        text: "Amaharic",
        className: "email",
        align: "left",
        sortable: true,
      },
      {
        key: "sound",
        text: "Sound",
        className: "date",
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
                data-target="#update-vocab-modal"
                className="btn btn-primary btn-sm"
                onClick={() => this.editRecord(record)}
                style={{ marginRight: "5px" }}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.onDeleteRecord(record)}
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
      filename: "Admins",
      no_data_text: "No admin found!",
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
      isLoadding: false,
    };

    this.state = {
      currentRecord: {
        id: "",
        english: "",
        amaharic: "",
        sound: "",
      },
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.setState({ isLoadding: true });
  }

  componentWillReceiveProps(nextProps) {
    this.getData();
  }

  getData() {
    axios
      .get("/api/languages/beginner")
      .then((res) => {
        this.setState({ records: res.data[0].vocabulary, isLoadding: false });
      })
      .catch();
  }

  editRecord(record) {
    this.setState({ currentRecord: record });
  }

  onDeleteRecord(record) {
    this.props.deleteVocabulary(record);
  }

  pageChange(pageData) {
    console.log("OnPageChange", pageData);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div
          className="d-flex"
          id="wrapper"
          style={{ backgroundColor: "white" }}
        >
          <Sidebar />
          <LanguageAddModal />
          <LanguageUpdateModal record={this.state.currentRecord} />
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <button className="btn btn-link mt-3" id="menu-toggle">
                <FontAwesomeIcon icon={faList} />
              </button>
              <button
                className="btn btn-outline-primary float-right mt-3 mr-2"
                data-toggle="modal"
                data-target="#add-vocabulary-modal"
              >
                <FontAwesomeIcon icon={faPlus} /> Add Vocabulary
              </button>
              <h1 className="mt-2 text-primary">
                Beginner Level <br /> Vocabulary List
              </h1>
              {this.state.isLoadding ? (
                <img
                  src={spinner}
                  style={{
                    width: "50px",
                    hight: "50px",
                    margin: "auto",
                    marginTop: "170px",
                    display: "block",
                  }}
                  alt="Loading..."
                />
              ) : (
                <ReactDatatable
                  config={this.config}
                  records={this.state.records}
                  columns={this.columns}
                  onPageChange={this.pageChange.bind(this)}
                />
              )}
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    );
  }
}

LangBiggenerVocab.propTypes = {
  deleteVocabulary: PropTypes.func.isRequired,
  langVoc: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  records: state.records,
  langVoc: state.langVoc,
});

export default connect(mapStateToProps, { deleteVocabulary })(
  LangBiggenerVocab
);
