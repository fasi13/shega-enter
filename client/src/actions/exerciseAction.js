import axios from "axios";
import {
  GET_ERRORS,
  EXERCISE_ADD,
  EXERCISE_DELETE,
  EXERCISE_UPDATE,
  GET_EXERCISE,
  GET_INTR_EXERCISE,
  INTR_EXERCISE_ADD,
  INTR_EXERCISE_UPDATE,
  INTR_EXERCISE_DELETE,
  GET_ADV_EXERCISE,
  ADV_EXERCISE_ADD,
  ADV_EXERCISE_UPDATE,
  ADV_EXERCISE_DELETE,
} from "./types";

export const getExercise = () => (dispatch) => {
  axios
    .get("/api/languages/beginner")
    .then((res) => {
      dispatch({
        type: GET_EXERCISE,
        payload: res.data,
      });
    })
    .catch();
};
export const addExercise = (vocabData, history) => (dispatch) => {
  axios
    .put("/api/languages/beginner-lang-exercise", vocabData)
    .then((res) =>
      dispatch({
        type: EXERCISE_ADD,
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

export const updateExercise = (updateData) => (dispatch) => {
  axios
    .post("/api/languages/update-B_exercise", updateData)
    .then((res) =>
      dispatch({
        type: EXERCISE_UPDATE,
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

export const deleteExercise = (vocData) => (dispatch) => {
  axios
    .delete(`/api/languages/delete-B_exercise/${vocData._id}`)
    .then((res) =>
      dispatch({
        type: EXERCISE_DELETE,
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
/////////////////////////////////////Intermediate//////////////////////////////////////////////////////
export const getIntrExercise = () => (dispatch) => {
  axios
    .get("/api/languages/Intermediate-exercise")
    .then((res) => {
      dispatch({
        type: GET_INTR_EXERCISE,
        payload: res.data,
      });
    })
    .catch();
};
export const addIntrExercise = (vocabData, history) => (dispatch) => {
  axios
    .put("/api/languages/Intermediate-lang-exercise", vocabData)
    .then((res) =>
      dispatch({
        type: INTR_EXERCISE_ADD,
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

export const updateIntrExercise = (updateData) => (dispatch) => {
  axios
    .post("/api/languages/update-I_exercise", updateData)
    .then((res) =>
      dispatch({
        type: INTR_EXERCISE_UPDATE,
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

export const deleteIntrExercise = (vocData) => (dispatch) => {
  axios
    .delete(`/api/languages/delete-I_exercise/${vocData._id}`)
    .then((res) =>
      dispatch({
        type: INTR_EXERCISE_DELETE,
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
/////////////////////////////////////Advanced//////////////////////////////////////////////////////
export const getAdvanExercise = () => (dispatch) => {
  axios
    .get("/api/languages/Advanced-exercise")
    .then((res) => {
      dispatch({
        type: GET_ADV_EXERCISE,
        payload: res.data,
      });
    })
    .catch();
};
export const addAdvanExercise = (vocabData, history) => (dispatch) => {
  axios
    .put("/api/languages/Advanced-lang-exercise", vocabData)
    .then((res) =>
      dispatch({
        type: ADV_EXERCISE_ADD,
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

export const updateAdvanExercise = (updateData) => (dispatch) => {
  axios
    .post("/api/languages/update-A_exercise", updateData)
    .then((res) =>
      dispatch({
        type: ADV_EXERCISE_UPDATE,
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

export const deleteAdvanExercise = (vocData) => (dispatch) => {
  axios
    .delete(`/api/languages/delete-A_exercise/${vocData._id}`)
    .then((res) =>
      dispatch({
        type: ADV_EXERCISE_DELETE,
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
