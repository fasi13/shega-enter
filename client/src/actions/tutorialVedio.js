import axios from "axios";
import {
  GET_ERRORS,
  TUTORIAL_VEDIO_ADD,
  TUTORIAL_VEDIO_DELETE,
  TUTORIAL_VEDIO_UPDATE,
  GET_TUTORIAL_VEDIO,
  GET_INTR_TUTORIAL_VEDIO,
  INTR_TUTORIAL_VEDIO_ADD,
  INTR_TUTORIAL_VEDIO_DELETE,
  INTR_TUTORIAL_VEDIO_UPDATE,
  TUTORIAL_ADV_VEDIO_ADD,
  ADV_TUTORIAL_VEDIO_DELETE,
  ADV_TUTORIAL_VEDIO_UPDATE,
  ADV_GET_TUTORIAL_VEDIO,
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
    .put("/api/languages/beginner-lang-tutorial", vocabData)
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
    .post("/api/languages/update-B_tutorial", updateData)
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
    .delete(`/api/languages/delete-B_tutorial/${vocData._id}`)
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

///////////////////////////Intermediate/////////////////////////////////////////////

export const getIntrTutorialVid = () => (dispatch) => {
  axios
    .get("/api/languages/Intermediate-tutorial")
    .then((res) => {
      dispatch({
        type: GET_INTR_TUTORIAL_VEDIO,
        payload: res.data,
      });
    })
    .catch();
};
export const addIntrTutorialVid = (vocabData, history) => (dispatch) => {
  axios
    .put("/api/languages/Intermediate-lang-tutorial", vocabData)
    .then((res) =>
      dispatch({
        type: INTR_TUTORIAL_VEDIO_ADD,
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

export const updateIntrTutorialVid = (updateData) => (dispatch) => {
  axios
    .post("/api/languages/update-I_tutorial", updateData)
    .then((res) =>
      dispatch({
        type: INTR_TUTORIAL_VEDIO_UPDATE,
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

export const deleteIntrTutorialVid = (newData) => (dispatch) => {
  axios
    .delete(`/api/languages/delete-I_tutorial/${newData._id}`)
    .then((res) =>
      dispatch({
        type: INTR_TUTORIAL_VEDIO_DELETE,
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

///////////////////////////Advanced/////////////////////////////////////////////

export const getAdvanTutorialVid = () => (dispatch) => {
  axios
    .get("/api/languages/Advanced-tutorial")
    .then((res) => {
      dispatch({
        type: ADV_GET_TUTORIAL_VEDIO,
        payload: res.data,
      });
    })
    .catch();
};
export const addAdvanTutorialVid = (addData, history) => (dispatch) => {
  axios
    .put("/api/languages/Advanced-lang-tutorial", addData)
    .then((res) =>
      dispatch({
        type: TUTORIAL_ADV_VEDIO_ADD,
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

export const updateAdvanTutorialVid = (updateData) => (dispatch) => {
  axios
    .post("/api/languages/update-A_tutorial", updateData)
    .then((res) =>
      dispatch({
        type: ADV_TUTORIAL_VEDIO_UPDATE,
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

export const deleteAdvanTutorialVid = (vocData) => (dispatch) => {
  axios
    .delete(`/api/languages/delete-A_tutorial/${vocData._id}`)
    .then((res) =>
      dispatch({
        type: ADV_TUTORIAL_VEDIO_DELETE,
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
