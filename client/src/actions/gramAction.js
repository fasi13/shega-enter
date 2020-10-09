import axios from "axios";
import {
  GET_ERRORS,
  GRAMMAR_ADD,
  GRAMMAR_DELETE,
  GRAMMAR_UPDATE,
  GET_GRAMMAR,
  GET_INTR_GRAMMAR,
  INTR_GRAMMAR_ADD,
  INTR_GRAMMAR_UPDATE,
  INTR_GRAMMAR_DELETE,
  GET_ADV_GRAMMAR,
  ADV_GRAMMAR_ADD,
  ADV_GRAMMAR_UPDATE,
  ADV_GRAMMAR_DELETE,
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
  axios
    .post("/api/languages/update-B_Grammar", updateData)
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

///////////////////////Interemediate///////////////////////////////////
export const getIntrgrammar = () => (dispatch) => {
  axios
    .get("/api/languages/Intermediate-grammar")
    .then((res) => {
      dispatch({
        type: GET_INTR_GRAMMAR,
        payload: res.data[0].grammer_,
      });
    })
    .catch();
};
export const addIntrGrammar = (gramData, history) => (dispatch) => {
  axios
    .put("/api/languages/Intermediate-lang-grammar", gramData)
    .then((res) =>
      dispatch({
        type: INTR_GRAMMAR_ADD,
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

export const updateIntrGrammar = (updateData) => (dispatch) => {
  axios
    .post("/api/languages/update-I_Grammar", updateData)
    .then((res) =>
      dispatch({
        type: INTR_GRAMMAR_UPDATE,
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

export const deleteIntrGrammar = (vocData) => (dispatch) => {
  axios
    .delete(`/api/languages/delete-I_Grammar/${vocData._id}`)
    .then((res) =>
      dispatch({
        type: INTR_GRAMMAR_DELETE,
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

///////////////////////Advanced///////////////////////////////////
export const getAdvangrammar = () => (dispatch) => {
  axios
    .get("/api/languages/Advanced-grammar")
    .then((res) => {
      dispatch({
        type: GET_ADV_GRAMMAR,
        payload: res.data[0].grammer_,
      });
    })
    .catch();
};
export const addAdvanGrammar = (gramData, history) => (dispatch) => {
  axios
    .put("/api/languages/Advanced-lang-grammar", gramData)
    .then((res) =>
      dispatch({
        type: ADV_GRAMMAR_ADD,
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

export const updateAdvanGrammar = (updateData) => (dispatch) => {
  axios
    .post("/api/languages/update-A_Grammar", updateData)
    .then((res) =>
      dispatch({
        type: ADV_GRAMMAR_UPDATE,
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

export const deleteAdvanGrammar = (vocData) => (dispatch) => {
  axios
    .delete(`/api/languages/delete-A_Grammar//${vocData._id}`)
    .then((res) =>
      dispatch({
        type: ADV_GRAMMAR_DELETE,
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
