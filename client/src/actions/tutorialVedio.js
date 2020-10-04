import axios from "axios";
import {
  GET_ERRORS,
  TUTORIAL_VEDIO_ADD,
  TUTORIAL_VEDIO_DELETE,
  TUTORIAL_VEDIO_UPDATE,
  GET_TUTORIAL_VEDIO,
} from "./types";

export const getTutorialVid = () => (dispatch) => {
  axios
    .get("/api/languages/beginner")
    .then((res) => {
      dispatch({
        type: GET_TUTORIAL_VEDIO,
        payload: res.data,
      });
    })
    .catch();
};
export const addTutorialVid = (vocabData, history) => (dispatch) => {
  axios
    .put("/api/langTutorVedio/beginner-lang-tutorial", vocabData)
    .then((res) =>
      dispatch({
        type: TUTORIAL_VEDIO_ADD,
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

export const updateTutorialVid = (updateData) => (dispatch) => {
  axios
    .post("/api/langTutorVedio/update-B_tutorial", updateData)
    .then((res) =>
      dispatch({
        type: TUTORIAL_VEDIO_UPDATE,
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

export const deleteTutorialVid = (vocData) => (dispatch) => {
  axios
    .delete(`/api/langTutorVedio/delete-B_tutorial/${vocData._id}`)
    .then((res) =>
      dispatch({
        type: TUTORIAL_VEDIO_DELETE,
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
