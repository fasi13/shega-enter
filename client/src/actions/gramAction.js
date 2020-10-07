import axios from "axios";
import {
  GET_ERRORS,
  GRAMMAR_ADD,
  GRAMMAR_DELETE,
  GRAMMAR_UPDATE,
  GET_GRAMMAR,
} from "./types";

export const getgrammar = () => (dispatch) => {
  axios
    .get("/api/languages/beginner-grammar")
    .then((res) => {
      dispatch({
        type: GET_GRAMMAR,
        payload: res.data[0].grammer_,
      });
    })
    .catch();
};
export const addGrammar = (gramData, history) => (dispatch) => {
  axios
    .put("/api/languages/beginner-lang-grammar", gramData)
    .then((res) =>
      dispatch({
        type: GRAMMAR_ADD,
        payload: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const updateGrammar = (updateData) => (dispatch) => {
  console.log(updateData);
  axios
    .post("/api/languagesupdate-B_Grammar", updateData)
    .then((res) =>
      dispatch({
        type: GRAMMAR_UPDATE,
        payload: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const deleteGrammar = (vocData) => (dispatch) => {
  axios
    .delete(`/api/languages/delete-B_Grammar/${vocData._id}`)
    .then((res) =>
      dispatch({
        type: GRAMMAR_DELETE,
        payload: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};