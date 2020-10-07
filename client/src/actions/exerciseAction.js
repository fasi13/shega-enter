import axios from "axios";
import {
  GET_ERRORS,
  EXERCISE_ADD,
  EXERCISE_DELETE,
  EXERCISE_UPDATE,
  GET_EXERCISE,
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
