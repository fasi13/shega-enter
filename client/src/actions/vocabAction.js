import axios from "axios";
import {
  GET_ERRORS,
  VOCABULARY_ADD,
  VOCABULARY_DELETE,
  VOCABULARY_UPDATE,
  GET_VOCABULARY,
  GET_INTR_VOCABULARY,
  INTR_VOCABULARY_ADD,
  INTR_VOCABULARY_UPDATE,
  INTR_VOCABULARY_DELETE,
  GET_ADV_VOCABULARY,
  ADV_VOCABULARY_ADD,
  ADV_VOCABULARY_UPDATE,
  ADV_VOCABULARY_DELETE,
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

////////////////////Intermediate//////////////////////////////////////////////////////////
export const getIntrVocabulary = () => (dispatch) => {
  axios
    .get("/api/languages/intermediate")
    .then((res) => {
      dispatch({
        type: GET_INTR_VOCABULARY,
        payload: res.data,
      });
    })
    .catch();
};
export const addIntrVocabulary = (vocabData, history) => (dispatch) => {
  axios
    .put("/api/languages/Intermediate-lang", vocabData)
    .then((res) =>
      dispatch({
        type: INTR_VOCABULARY_ADD,
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

export const updateIntrVocabulary = (updateData) => (dispatch) => {
  axios
    .post("/api/languages/update-I_Vocablery", updateData)
    .then((res) =>
      dispatch({
        type: INTR_VOCABULARY_UPDATE,
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

export const deleteIntrVocabulary = (vocData) => (dispatch) => {
  axios
    .delete(`/api/languages/delete-I_Vocablery/${vocData._id}`)
    .then((res) =>
      dispatch({
        type: INTR_VOCABULARY_DELETE,
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

////////////////////Advanced//////////////////////////////////////////////////////////
export const getAdvanVocabulary = () => (dispatch) => {
  axios
    .get("/api/languages/advanced")
    .then((res) => {
      dispatch({
        type: GET_ADV_VOCABULARY,
        payload: res.data,
      });
    })
    .catch();
};
export const addAdvanVocabulary = (vocabData, history) => (dispatch) => {
  axios
    .put("/api/languages/Advanced-lang", vocabData)
    .then((res) =>
      dispatch({
        type: ADV_VOCABULARY_ADD,
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

export const updateAdvanVocabulary = (updateData) => (dispatch) => {
  axios
    .post("/api/languages/update-A_Vocablery", updateData)
    .then((res) =>
      dispatch({
        type: ADV_VOCABULARY_UPDATE,
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

export const deleteAdvanVocabulary = (vocData) => (dispatch) => {
  axios
    .delete(`/api/languages/delete-A_Vocablery/${vocData._id}`)
    .then((res) =>
      dispatch({
        type: ADV_VOCABULARY_DELETE,
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
