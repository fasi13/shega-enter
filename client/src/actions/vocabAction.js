import axios from "axios";
import {
  GET_ERRORS,
  VOCABULARY_ADD,
  VOCABULARY_DELETE,
  VOCABULARY_UPDATE,
  GET_VOCABULARY,
} from "./types";

export const getVocabulary = () => (dispatch) => {
  axios
    .get("/api/languages/beginner")
    .then((res) => {
      dispatch({
        type: GET_VOCABULARY,
        payload: res.data,
      });
    })
    .catch();
};
export const addVocabulary = (vocabData, history) => (dispatch) => {
  axios
    .put("/api/languages/beginner-lang", vocabData)
    .then((res) =>
      dispatch({
        type: VOCABULARY_ADD,
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

export const updateVocabulary = (updateData) => (dispatch) => {
  axios
    .post("/api/languages/update-B_Vocablery", updateData)
    .then((res) =>
      dispatch({
        type: VOCABULARY_UPDATE,
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

export const deleteVocabulary = (vocData) => (dispatch) => {
  axios
    .delete(`/api/languages/delete-B_Vocablery/${vocData._id}`)
    .then((res) =>
      dispatch({
        type: VOCABULARY_DELETE,
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
